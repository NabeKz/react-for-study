import dateFnsGenerateConfig from "rc-picker/lib/generate/dateFns";
// import 'antd/es/date-picker/style/index';
import generatePicker from "antd/lib/date-picker/generatePicker";

export const DatePicker = generatePicker<Date>(dateFnsGenerateConfig);
