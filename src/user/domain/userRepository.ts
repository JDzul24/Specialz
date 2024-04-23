import { User } from "./user";

export interface UserRepository{
    addUser(name: string, last_name: string , password : string , email: string): Promise<User | null>;
    getUsers():Promise <User[] | null>;
    getByNameUser(name:string):Promise<User | null>;
    
}
