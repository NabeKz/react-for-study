import dayjs from "dayjs";

type dateFormat = "YYYY-MM-DD" | "YYYY/MM/DD"

export class DayjsWrapper {
  private constructor(
    readonly d: dayjs.Dayjs
  ) {}

  static valueOf(value: string) {
    const d = dayjs(value)
    return new DayjsWrapper(d)
  }

  format(template: dateFormat = "YYYY-MM-DD"): string {
    return this.d.format(template)
  }

  debug() {
    return this.d.format("YYYY-MM-DD hh:mm:ss")
  }
}
