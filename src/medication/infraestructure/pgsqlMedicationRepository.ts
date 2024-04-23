import { Medication } from "../domain/medication";
import { MedicationRepository } from "../domain/medicationRepository";
import MedicationModel from "./model/medicationModel";

export class PgsqlMedicationRepository implements MedicationRepository {
  async addMedication(
    name: string,
    price: number,
    quantity: number
  ): Promise<Medication | null> {
    try {
      const createdMedication = await MedicationModel.create({
        name,
        price,
        quantity
      });
      return new Medication(
        createdMedication.id,
        createdMedication.name,
        createdMedication.price,
        createdMedication.quantity
      );
    } catch (error) {
      console.error("Error In Psql", error);
      return null;
    }
  }

  async getAllMedication(): Promise<Medication[]> {
    try {
      const medications = await MedicationModel.findAll();
      return medications.map(
        (medications) =>
          new Medication(
          medications.id,
          medications.name,
          medications.price,
          medications.quantity
          )
      );
    } catch (error) {
      console.error("Error in Psql", error);
      return [];
    }
  }

  async deleteMedication(name: string): Promise<Medication | null> {
    try {
        const deleteMedication = await MedicationModel.findOne({where: {name : name}});
        if(deleteMedication){
            await deleteMedication.destroy();
            return new Medication(deleteMedication.id,  deleteMedication.name, deleteMedication.price , deleteMedication.quantity);
        }else{
            return null;
        }
    } catch (error) {
        console.log("Error in mysqlMedicationRepository", error);
        return null;
    }
}


}
