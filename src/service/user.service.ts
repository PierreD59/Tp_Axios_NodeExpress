import UserModel from "../model/user.model";
import UserRepository from "../repository/user.repository";

export default class UserService {
  #repo: UserRepository;

  constructor(repo: UserRepository) {
    this.#repo = repo;
  }
  getAllUsers = async (): Promise<UserModel[]> => {
    return this.#repo.getAllUsers();
  };
}
