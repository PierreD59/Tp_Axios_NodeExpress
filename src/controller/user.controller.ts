import { Response, Request } from "express";
import UserModel from "../model/user.model";
import UserService from "../service/user.service";

export default class UserController {
  service: UserService;

  constructor(service: UserService) {
    this.service = service;
  }

  getAllUsers = async (req: Request, res: Response): Promise<void> => {
    const data = await this.service.getAllUsers();
    res.send(data);
  };

  getUserById =async (req:Request, res: Response): Promise<void> => {
    const id: number = Number(req.params.id);
    const data = await this.service.getUserById(id);
    res.send(data);
  }

  addNewUser = async (req:Request, res: Response): Promise<void> => {
    const lastName: string = req.body.lastName;
    const firstName: string = req.body.firstName;
    const birthDate: string = req.body.birthDate;
    const nationnality: string = req.body.nationnality;
    const data = await this.service.addNewUser(lastName, firstName, birthDate, nationnality);
    res.send(data);
  }
}
