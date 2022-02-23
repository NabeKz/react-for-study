import { UseFormRegisterReturn } from "react-hook-form"

export type Props = {
  type: string;
  placeholder: string;
  register: UseFormRegisterReturn;
}

const Select = (props: Props) => {
  return (
    <input {...props} />
  )
}

export default Select