import { ChangeEvent, useState } from "react";
import { Interaction } from "../usecase/interaction";

type Props = {
  from: Date;
  to: Date;
};

const interaction = new Interaction();

export const useReactCalendar = ({ from, to }: Props) => {
  const [state, setState] = useState(interaction.initialize(from, to));

  const onClickInputField = () => {
    const dto = interaction.updateIsShow(state, !state.isShow)
    setState({ ...dto });
  };

  const onChangeDateFrom = (from: Date | null) => {
    const dto = interaction.updateDateFrom(state, from);
    setState({ ...dto });
  };

  const onChangeDateTo = (from: Date | null) => {
    const dto = interaction.updateDateTo(state, from);
    setState({ ...dto });
  };

  const onChangeAmount = ({ target }: ChangeEvent<HTMLSelectElement>) => {
    const amount = parseInt(target.value);
    if (isNaN(amount) == false) {
      const dto = interaction.updateAmount(state, amount);
      setState({ ...dto });
    }
  };

  const onPressCancel = () => {
    const dto = interaction.initialize(from, to);
    setState({ ...dto });
  };

  const onPressSubmit = (callback: (from: Date, to: Date) => void) => {
    callback(state.from, state.to)
    const dto = interaction.updateIsShow(state, false);
    setState({ ...dto });
  };

  return {
    state,
    onClickInputField,
    onChangeDateFrom,
    onChangeDateTo,
    onChangeAmount,
    onPressCancel,
    onPressSubmit,
  };
};
