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
    if (id < 1) {
      throw Error(`不正な値です: id ${id}`)
    }
    if (Object.values(PetStatus).includes(status)) {
      throw Error(`不正な値です: status ${status}`)
    }
    return new Pet(id, name, category, photoUrls, tags, status);
  }

  toAvailable() {
    return Pet.valueOf({
      ...this,
      status: PetStatus.available
    })
  }

  toPending() {
    return Pet.valueOf({
      ...this,
      status: PetStatus.pending
    })
  }

  toSold() {
    return Pet.valueOf({
      ...this,
      status: PetStatus.sold
    })
  }
}
