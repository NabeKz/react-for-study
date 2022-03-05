import "../dayjs"
import { DayjsWrapper } from "../dayjs"

describe("format", () => {
  it("stringから日付生成", () => {
    const actual = DayjsWrapper.valueOf("20200101")
    console.log(actual.debug())
    expect(actual.format()).toBe("2020-01-01")
  })
})

describe("diff", () => {
  it.todo("")
})

describe("add", () => {
  it.todo("")
})

describe("sub", () => {
  it.todo("")
})