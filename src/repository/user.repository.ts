import UserModel from "../model/user.model";
import axios from "axios";
import "dotenv/config";

export default class UserRepository {
  #URL = process.env.JSONSERVER;

  getAllUsers = async (): Promise<UserModel[]> => {
    return axios.get(`${this.#URL}`).then((res) => res.data);
  };

  getUserById = async (id: number): Promise<UserModel> => {
    return axios
      .get(`${this.#URL}/${id}`)
      .then((res) => res.data)
      .catch((err) => `L'id que vous avez entré, n'existe pas`);
  };

  addNewUser = async (item: UserModel): Promise<UserModel> => {
    return axios.post(`${this.#URL}`, item).then((res) => res.data);
  };

  deleteUser = (id: number): Promise<any> => {
    return axios.delete(`${this.#URL}/${id}`);
  };

  updateUser = async (id: number, item: UserModel): Promise<UserModel> => {
    return axios.put(`${this.#URL}/${id}`, item).then((res) => res.data);
  }

  patchUser = async (id: number, item: UserModel): Promise<UserModel> => {
    return axios.patch(`${this.#URL}/${id}`, item).then((res) => res.data);
  }
}
