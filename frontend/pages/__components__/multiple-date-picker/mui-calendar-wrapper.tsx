import { CalendarPicker } from "@mui/x-date-pickers";
import { format } from "date-fns";
import { useReactCalendar } from "./hook/useReactCalendar";

const style = {
  // width: "300px",
  // border: "1px solid #f0f0f0",
  // borderRadius: "2px",
  display: "flex",
};

type Props = {
  from: Date;
  to: Date;
  onChange?: (date: Date) => void;
};

const formatDay = (date: Date) => format(date, "yyyy/MM/dd");

export const MuiCalendarWrapper = ({ from, to }: Props) => {
  const {
    state,
    onClickInputField,
    onChangeDateFrom,
    onChangeDateTo,
    onChangeAmount,
    onPressCancel,
    onPressSubmit,
  } = useReactCalendar({ from, to });

  return (
    <div>
      <div>
        <input value={formatDay(from)} />
        &nbsp;~&nbsp;
        <input value={formatDay(to)} />
      </div>

      <div style={style}>
        <CalendarPicker date={state.from} onChange={onChangeDateFrom} />
        <CalendarPicker 
        date={state.to}
        onChange={onChangeDateTo}
        renderDay={(day) => (
          <div role={"cell"}>
            <button className="MuiButtonBase-root MuiPickersDay-root Mui-selected MuiPickersDay-dayWithMargin css-aiowg3-MuiButtonBase-root-MuiPickersDay-root"
            >{String(day.getDate())}</button>
          </div>
          )
        }
        />
      </div>
      <div></div>
    </div>
  );
};
