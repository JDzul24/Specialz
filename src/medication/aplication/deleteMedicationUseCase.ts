import { Medication } from "../domain/medication";
import { MedicationRepository } from "../domain/medicationRepository";

export class DeleteMedicationUseCase{
    constructor(readonly medicationRepository:MedicationRepository){}
    async run(name:string):Promise<Medication | null>{
        try {
            const eliminarTarea = await this.medicationRepository.deleteMedication(name);
            return eliminarTarea;
        } catch (error) {  
            console.log("Error en deleteTarea.Caso.Uso", error);
            return null;
        }
    }
}