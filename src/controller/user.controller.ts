import { Response, Request } from "express";
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
}