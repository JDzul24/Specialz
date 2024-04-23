import { Request, Response } from "express";
import { DeleteMedicationUseCase } from "../../aplication/deleteMedicationUseCase";

export class DeleteMedicationController{
    constructor(readonly deleteMedicationUseCase:DeleteMedicationUseCase){}
    async run(req:Request, res:Response){
        try {
            let name = req.body.name;
            console.log(req.body);

            let deleteMedication = await this.deleteMedicationUseCase.run(name);

            if(deleteMedication){
                res.status(200).send({
                    message:"Medication delete"
                })
            }else{
                return res.status(400).send({
                    status:"success",
                    data:[],
                    message:"Error in deleteMedicationcontroller"
                })
            }

        } catch (error) {
            console.log("Error in deleteMedicationcontroller",error);
            res.status(500).send({
                status:"error",
                message:"Error in server"
            })
        }
    } 
}