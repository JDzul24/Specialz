import { User } from "../../domain/user";
import { UserRepository } from "../../domain/userRepository";
import { IHashingService } from "../../aplication/Services/IhashingService";
import { INotificationService } from "../Services/NotificationService";
export class AddUserUseCase{
    constructor( readonly userRepository: UserRepository , readonly hashingService : IHashingService ,readonly notification : INotificationService){}
    async run ( name: string, last_name: string , password:string , email:string): Promise<User | null>{
        try{
            const hashingPassword = await this.hashingService.hashPassword(password);
            const createUser = await this.userRepository.addUser(name, last_name,hashingPassword , email);
            this.notification.sendNotify("Se ha registrado u nuevo usuario")
            return createUser;
        } catch(error){
            console.error('Error in AddUserCase', error);
            return null
        }
        
    }
}