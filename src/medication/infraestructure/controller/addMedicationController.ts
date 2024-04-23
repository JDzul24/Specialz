import {Request, Response} from "express";
import { AddMedicationUseCase } from "../../aplication/addMedicationUseCase";

export class AddMedicationController{
    constructor(readonly addMedicationUsecase: AddMedicationUseCase){}

    async run (req: Request, res: Response){
        try{
            let {name, price , quantity }= req.body; 

            let createdmedication = await this.addMedicationUsecase.run(name, price , quantity);

            if (createdmedication) {
                return res.status(200).send({
                    status: "success",
                    data:{
                        name: createdmedication.name,
                        price: createdmedication.price,
                        quantity: createdmedication.quantity
                    },
                    message: "Medicamento registrado"
                })
                
            }else{
                return res.status(400).send({
                    status: "Error",
                    data:[],
                    Message:"Error al registrar medicamento"
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