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
    if (id < 1) {
      throw Error(`idは1以上の数値を指定してください, id: ${id}`)
    }
    return new Tag(
      id,
      name
    )
  }
}
