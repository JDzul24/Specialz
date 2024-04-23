import { Medication } from "./medication";

export interface MedicationRepository{
    addMedication(name: string, price:number , quantity:number): Promise<Medication | null>; 
    getAllMedication():Promise <Medication[] | null>;
    deleteMedication(name: string): Promise<Medication | null>;
    
}