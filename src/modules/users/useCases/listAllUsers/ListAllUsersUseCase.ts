import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {
    console.log(".");
  }

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);

    if (!user) {
      throw new Error("User does not exist!");
    }

    const userNotAdmin = user.admin === false;

    if (userNotAdmin) {
      throw new Error("User does not have admin permission!");
    }

    const result = this.usersRepository.list();

    return result;
  }
}

export { ListAllUsersUseCase };
