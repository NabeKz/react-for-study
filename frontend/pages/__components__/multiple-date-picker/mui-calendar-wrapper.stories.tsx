import { ComponentMeta } from "@storybook/react";
import { useState } from "react";
import { MuiCalendarWrapper } from "./mui-calendar-wrapper";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

export default {
  component: MuiCalendarWrapper,
  parameters: {
    docs: {
      description: {
        component: "aaa",
      },
    },
  },
  decorators: [
    (Story) => (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
          {Story()}
      </LocalizationProvider>
    ),
  ],
} as ComponentMeta<typeof MuiCalendarWrapper>;

export const Mock = () => {
  const [state, setState] = useState({
    from: new Date("2022-04-01"),
    to: new Date("2022-06-01"),
  });
  const callback = (from: Date, to: Date) => setState({ from, to });
  return (
    <MuiCalendarWrapper from={state.from} to={state.to} />
  );
};
