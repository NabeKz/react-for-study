import { Pet } from "./model/pet";

export class PetList {
  private constructor(private items: Pet[]) {}

  static valueOf({items}:{items: Pet[]}) {
    return new PetList(items)
  }

  toArray() {
    return [...this.items]
  }
}
