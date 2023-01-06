import UserModel from "../model/user.model";
import axios from "axios";
import "dotenv/config";

export default class UserRepository {
  #URL = process.env.JSONSERVER;

  getAllUsers = async (): Promise<UserModel[]> => {
    return axios.get(`${this.#URL}`).then((res) => res.data);
  };
}
