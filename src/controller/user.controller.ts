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

  getUserById = async (req: Request, res: Response): Promise<void> => {
    const id: number = +req.params.id;
    const data = await this.service.getUserById(id);
    res.send(data);
  };

  addNewUser = async (req: Request, res: Response): Promise<void> => {
    const lastName: string = req.body.lastName;
    const firstName: string = req.body.firstName;
    const birthDate: string = req.body.birthDate;
    const nationnality: string = req.body.nationnality;
    const data = await this.service.addNewUser(
      lastName,
      firstName,
      birthDate,
      nationnality
    );
    res.send(data);
  };

  deleteUser = (req: Request, res: Response): void => {
    const id: number = +req.params.id;
    this.service
      .deleteUser(id)
      .then((data) => {
        res.sendStatus(200);
      })
      .catch((err) => res.send("Suppression impossible"));
  };

  updateUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const id: number = Number(req.params.id);
      const body = req.body;
      const data = await this.service.updateUser(id, body);
      res.send(data);
    } catch (err) {
      res.send(err);
    }
  };

  patchUser = async (req: Request, res: Response): Promise<void> => {
    const id: number = +req.params.id;
    const body: UserModel = req.body;
    const data: UserModel = await this.service.patchUser(id, body);
    res.send(data);
  };
}
