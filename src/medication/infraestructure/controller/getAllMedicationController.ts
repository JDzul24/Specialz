import { Request, Response } from "express";
import { GetAllMedicationUseCase } from "../../aplication/getAllMedicationUseCase";

export class GetAllMedicationController {
  constructor(readonly getAllMedicationUseCase: GetAllMedicationUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const medications = await this.getAllMedicationUseCase.run();

      if (medications)
        return res.status(200).send({
          status: "success",
          data: medications.map((medications) => ({
            name: medications.name,
            price: medications.price,
            quantity: medications.quantity
      
          })),
          message: "Medicamentos obtenidos",
        });
      else
        res.status(400).send({
          status: "error",
          messages: "Error in getAllMedicationsController",
        });
    } catch (error) {
      console.error("Error en el controlador", error);
      res.status(500).send({
        status: "error",
        message: "Error en el servidor",
      });
    }
  }
}
