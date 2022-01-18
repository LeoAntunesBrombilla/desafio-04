import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const users = this.usersRepository.list();
    const Admin = this.usersRepository.findById(user_id);

    if (!Admin || !Admin.admin) {
      throw new Error("Mensagem de erro");
    }

    return users;
  }
}

export { ListAllUsersUseCase };
