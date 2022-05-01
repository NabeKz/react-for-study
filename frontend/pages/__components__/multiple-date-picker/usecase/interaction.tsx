import { Dto } from "./dto"

export class Interaction {
  initialize(from: Date, to: Date): Dto {
    return {
      isShow: false,
      amount: NaN,
      from: new Date(from),
      to: new Date(to),
    }
  }

  updateDateFrom(dto: Dto, from: Date | null): Dto {
    if (from !== null) {
      return {...dto, from}
    }
    return dto
  };

  updateDateTo(dto: Dto, to: Date | null): Dto {
    if (to !== null) {
      return {...dto, to}
    }
    return dto
  };

  updateAmount(dto: Dto, amount: number): Dto {
    if (amount > 0) {
      const month = dto.from.getMonth() + amount
      const to = new Date().setMonth(month)
      return {...dto, amount, to: new Date(to)}
    }
    return dto
  };

  updateIsShow(dto: Dto, isShow: boolean): Dto {
    return {...dto, isShow }
  };
}