import { User } from "../../domain/user";
import { UserRepository } from "../../domain/userRepository";

export class GetAllUsersUseCase {
  constructor(readonly userRepository: UserRepository) {}

  async run(): Promise<User[] | null> {
    try {
      const users = await this.userRepository.getUsers();
      return users;
    } catch (error) {
      console.error("Error en GetUsersUseCase", error);
      return [];
    }
  }
}