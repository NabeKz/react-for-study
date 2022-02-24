export class Tag {
  private constructor(
    readonly id: number,
    readonly name: string,
  ){}

  static valueOf({
    id,
    name
  }: {
    id: number,
    name: string
  }): Tag {
    return new Tag(
      id,
      name
    )
  }
}
