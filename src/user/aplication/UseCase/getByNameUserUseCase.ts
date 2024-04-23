import { User } from "../../domain/user";
import { UserRepository } from "../../domain/userRepository";

export class GetByNameUserUseCase {
  constructor(readonly userRepository: UserRepository) {}

  async run(name:string): Promise<User | null> {
    try {
      const user = await this.userRepository.getByNameUser(name);
      return user;
    } catch (error) {
      console.error("Error en GetUsersUseCase", error);
      return null;
    }
  }
}