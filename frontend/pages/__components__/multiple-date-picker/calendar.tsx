import dateFnsGenerateConfig from "rc-picker/lib/generate/dateFns";
import generateCalendar from 'antd/lib/calendar/generateCalendar';
// import 'antd/es/calendar/style';

const Calendar = generateCalendar<Date>(dateFnsGenerateConfig);

export default Calendar