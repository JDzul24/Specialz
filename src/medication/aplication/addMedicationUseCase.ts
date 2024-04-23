import { Medication } from "../domain/medication";
import { MedicationRepository } from "../domain/medicationRepository";

export class AddMedicationUseCase{
    constructor( readonly medicationRepository: MedicationRepository){}
    async run ( name: string, price : number , quantity: number): Promise<Medication | null>{
        try{
            const createMedication = await this.medicationRepository.addMedication(name,price , quantity);
            return createMedication;
        } catch(error){
            console.error('Error in AddMedicationCase', error);
            return null
        }
        
    }
}