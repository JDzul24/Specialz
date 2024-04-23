import { User } from "../domain/user";
import { UserRepository } from "../domain/userRepository";
import UserModel from "./model/userModel";

export class PgsqlUserRepository implements UserRepository {
  async addUser(
    name: string,
    last_name: string,
    password: string,
    email: string
  ): Promise<User | null> {
    try {
      const createdUser = await UserModel.create({
        name,
        last_name,
        password,
        email,
      });
      return new User(
        createdUser.id,
        createdUser.name,
        createdUser.last_name,
        createdUser.password,
        createdUser.email
      );
    } catch (error) {
      console.error("Error In Psql", error);
      return null;
    }
  }

  async getUsers(): Promise<User[]> {
    try {
      const users = await UserModel.findAll();
      return users.map(
        (user) =>
          new User(
            user.id,
            user.name,
            user.last_name,
            user.password,
            user.email
          )
      );
    } catch (error) {
      console.error("Error in Psql", error);
      return [];
    }
  }

  async getByNameUser(name: string): Promise<User | null> {
    try {
      const user = await UserModel.findOne({ where: { name: name } });
      if (user) {
        return new User(
          user.id,
          user.name,
          user.last_name,
          user.password,
          user.email
        );
      }else{
        return null;
      }
    } catch (error) {
      console.error("Error in Psql", error);
      return null;
    }
  }
}
