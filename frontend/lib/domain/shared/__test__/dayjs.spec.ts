import "../dayjs"
import { DayjsWrapper } from "../dayjs"

describe("sample", () => {
  it("stringから日付生成", () => {
    const actual = DayjsWrapper.valueOf("20200101")
    console.log(actual.debug())
    expect(actual.format()).toBe("2020-01-01")
  })
})