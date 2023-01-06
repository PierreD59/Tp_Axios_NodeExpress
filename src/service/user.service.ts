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

  getUserById = async (id: number): Promise<UserModel> => {
    return this.#repo.getUserById(id);
  };

  addNewUser = async (lastName: string, firstName: string, birthDate:string, nationnality:string): Promise<UserModel> => {
    const data = new UserModel(lastName, firstName, birthDate, nationnality);
    return this.#repo.addNewUser(data);
  };
}
