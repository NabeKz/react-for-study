export class Category {
  private constructor(
    readonly id: number,
    readonly name: string
  ) {}

  static valueOf({
    id,
    name,
  }:{
    id: number,
    name: string
  }): Category {
    return new Category(
      id,
      name
    )
  }
}
