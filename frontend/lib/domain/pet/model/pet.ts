import { Category } from "./category";
import { PetStatus } from "./pet-status";
import { Tag } from "./tag";

export class Pet {
  private constructor(
    readonly id: number,
    readonly name: string,
    readonly category: Category,
    readonly photoUrls: string[],
    readonly tags: Tag[],
    readonly status: PetStatus
  ) {}

  static valueOf({
    id,
    name,
    category,
    photoUrls,
    tags,
    status,
  }: {
    id: number;
    name: string;
    category: Category;
    photoUrls: string[];
    tags: Tag[];
    status: PetStatus;
  }): Pet {
    return new Pet(id, name, category, photoUrls, tags, status);
  }
}
