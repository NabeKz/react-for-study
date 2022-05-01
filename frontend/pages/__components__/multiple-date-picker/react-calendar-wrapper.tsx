import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
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
  amount: number[];
  callback: (from: Date, to: Date) => void;
};

const formatDay = (date: Date) => {
  const pad = (num: number) => String(num).padStart(2, "0");
  const month = pad(date.getMonth() + 1);
  const day = pad(date.getDate());
  return [String(date.getFullYear()), month, day].join("/");
};

export const ReactCalendarWrapper = ({ from, to, amount, callback }: Props) => {
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
        <input value={formatDay(from)} readOnly onClick={() => onClickInputField()} />
        &nbsp;~&nbsp;
        <input value={formatDay(to)} readOnly onClick={() => onClickInputField()} />
      </div>
      {state.isShow && (
        <>
          <div style={style}>
            <Calendar
              formatDay={(_, date) => String(date.getDate())}
              activeStartDate={state.from}
              value={state.from}
              onChange={onChangeDateFrom}
            />
            <Calendar
              formatDay={(_, date) => String(date.getDate())}
              activeStartDate={state.to}
              value={state.to}
              onChange={onChangeDateTo}
            />
          </div>

          <div>
            <div>
              <select onChange={onChangeAmount} value={String(state.amount)}>
                  <option value={"NaN"} disabled>
                    ---
                  </option>
                {amount.map((i) => (
                  <option key={i} value={String(i)}>
                    {i}ヶ月
                  </option>
                ))}
              </select>
            </div>

            <div>
              <button onClick={onPressCancel}>キャンセル</button>
              <button onClick={() => onPressSubmit(callback)}>
                確定
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

