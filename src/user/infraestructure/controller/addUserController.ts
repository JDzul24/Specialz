import {Request, Response} from "express";
import { AddUserUseCase } from "../../aplication/UseCase/addUserUseCase";

export class AdduserController{
    constructor(readonly addUserUsecase: AddUserUseCase){}

    async run (req: Request, res: Response){
        try{
            let {name, last_name , password , email}= req.body; 

            let createduser = await this.addUserUsecase.run(name, last_name , password , email);

            if (createduser) {
                return res.status(200).send({
                    status: "success",
                    data:{
                        name: createduser.name,
                        last_name: createduser.last_name,
                        password : createduser.password,
                        email: createduser.email
                    },
                    message: "User Creado"
                })
                
            }else{
                return res.status(400).send({
                    status: "Error",
                    data:[],
                    Message:"Error Al Crear User"
                });
            }
        }catch(error){
            console.error("Error In Controller", error);
            res.status(500).send({
                status: "error",
                Message: "Error In Server"
            });
        }
    }
}