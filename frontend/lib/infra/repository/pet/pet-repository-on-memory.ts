import { Category } from "@/domain/pet/model/category";
import { Pet } from "@/domain/pet/model/pet";
import { PetStatus } from "@/domain/pet/model/pet-status";
import { Tag } from "@/domain/pet/model/tag";
import { PetRepository } from "@/domain/pet/repository";

export class PetRepositoryOnMemory implements PetRepository {
  async fetch(params: number | Tag | PetStatus): Promise<Pet> {
    if (typeof params === "number") {
      return Pet.valueOf({
        id: 0,
        name: "fetch-by-id",
        category: Category.valueOf({ id: 0, name: "category-1" }),
        photoUrls: [],
        tags: [Tag.valueOf({ id: 0, name: "tag-1" })],
        status: PetStatus.available,
      });
    }

    if (params instanceof Tag) {
      return Pet.valueOf({
        id: 0,
        name: "fetch-by-tag",
        category: Category.valueOf({ id: 0, name: "category-2" }),
        photoUrls: [],
        tags: [Tag.valueOf({ id: 0, name: "tag-1" })],
        status: PetStatus.available,
      });
    }

    return Pet.valueOf({
      id: 0,
      name: "fetch-by-status",
      category: Category.valueOf({ id: 0, name: "category-3" }),
      photoUrls: [],
      tags: [Tag.valueOf({ id: 0, name: "tag-1" })],
      status: params,
    });
  }

  create(): Promise<Pet> {
    throw new Error("Method not implemented.");
  }
  update(pet: Pet): Promise<Pet> {
    throw new Error("Method not implemented.");
  }
  delete(): Promise<Pet> {
    throw new Error("Method not implemented.");
  }
}
