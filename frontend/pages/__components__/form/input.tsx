import { UseFormRegisterReturn } from "react-hook-form";

type Props = {
  defaultValue?: string;
  type?: string;
  placeholder?: string;
  register?: UseFormRegisterReturn;
};

export const InputProps = ({
  defaultValue,
  type,
  placeholder,
  register,
}: {
  defaultValue?: string;
  type?: string;
  placeholder?: string;
  register?: UseFormRegisterReturn;
}): Props => {
  return {
    defaultValue: defaultValue || "",
    type: type || "",
    placeholder: placeholder || "",
    register,
  };
};

const Input = (props: Props) => {
  const { register, ...other } = props;
  const attrs = { ...other, ...register };
  return <input {...attrs} />;
};

export default Input;
