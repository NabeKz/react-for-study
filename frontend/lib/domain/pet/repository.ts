import { Pet } from "./model/pet";
import { PetStatus } from "./model/pet-status";
import { Tag } from "./model/tag";

export interface PetRepository {
  fetch(params: PetStatus | Tag): Promise<Pet>
  create(): Promise<Pet>
  update(pet: Pet): Promise<Pet>
  delete(): Promise<Pet>
}
