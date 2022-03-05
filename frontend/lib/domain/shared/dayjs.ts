import dayjs from "dayjs";

type DateFormat = "YYYY-MM-DD" | "YYYY/MM/DD"
type DateUnit = "year" | "month" | "day"

export class DayjsWrapper {
  private constructor(
    readonly d: dayjs.Dayjs
  ) {}

  static valueOf(value: string) {
    const d = dayjs(value)
    return new DayjsWrapper(d)
  }

  format(template: DateFormat = "YYYY-MM-DD"): string {
    return this.d.format(template)
  }

  diff(unit?: DateUnit) : number {
    return this.d.diff(unit)
  }

  add(value: number, unit: DateUnit) {
    const d = this.d.add(value, unit)
  }

  sub(value: number, unit: DateUnit) {
    const d = this.d.subtract(value, unit)
  }

  debug() {
    return this.d.format("YYYY-MM-DD hh:mm:ss")
  }
}
