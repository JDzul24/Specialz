import { Medication } from "../domain/medication";
import { MedicationRepository } from "../domain/medicationRepository";

export class GetAllMedicationUseCase {
  constructor(readonly medicationRepository: MedicationRepository) {}

  async run(): Promise<Medication[] | null> {
    try {
      const medications = await this.medicationRepository.getAllMedication();
      return medications;
    } catch (error) {
      console.error("Error en GetUsersUseCase", error);
      return [];
    }
  }
}