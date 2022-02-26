import { Pet } from "./model/pet";

export interface PetRepository {
  fetch(): Promise<Pet>
}
