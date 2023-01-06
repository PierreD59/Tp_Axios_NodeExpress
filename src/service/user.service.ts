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

  addNewUser = async (
    lastName: string,
    firstName: string,
    birthDate?: string,
    nationnality?: string
  ): Promise<UserModel> => {
    const data = new UserModel(lastName, firstName, birthDate, nationnality);
    return this.#repo.addNewUser(data);
  };

  deleteUser = (id: number): Promise<any> => {
    return this.#repo.deleteUser(id);
  };

  updateUser = async (id: number, item: UserModel): Promise<UserModel> => {
    if (item.id !== id) {
      throw "Objet corrompue";
    } 
    if (await this.getUserById(id))
    {
      return this.addNewUser(item.lastName, item.firstName, item.birthDate, item.nationnality);
    } else {
      const data = new UserModel(item.lastName, item.firstName, item.birthDate, item.nationnality)
      data.registrationDate = (await this.getUserById(id)).registrationDate;
      return this.#repo.updateUser(id, data).catch((err) => err);
    }
  };
}
