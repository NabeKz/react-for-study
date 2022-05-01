import {
  ComponentMeta,
  ComponentStoryFn,
} from "@storybook/react";
import { useState } from "react";
import { ReactCalendarWrapper } from "./react-calendar-wrapper";

export default {
  component: ReactCalendarWrapper,
  parameters: {
    docs: {
      description: {
        component: "aaa",
      },
    },
  },
} as ComponentMeta<typeof ReactCalendarWrapper>;

export const Mock: ComponentStoryFn<typeof ReactCalendarWrapper> = () => {
  const [state, setState] = useState({
    from: new Date("2022-04-01"),
    to: new Date("2022-06-01"),
  });
  const callback = (from: Date, to: Date) => setState({ from, to });
  return (
    <ReactCalendarWrapper
      from={state.from}
      to={state.to}
      amount={[1, 2, 3]}
      callback={callback}
    />
  );
};
