import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import { object, number, string, InferType } from 'yup';

const schema = object({
  name: string().defined(),
  age: number().optional(),
});
export type Inputs = InferType<typeof schema>

export const Presentation = () => {
  const { register, handleSubmit, formState } = useForm<Inputs>({
    resolver: yupResolver(schema)
  })
  const onSubmit = () => handleSubmit(submit)
  const submit = (data: Inputs) => console.log(data)
  
  return {
    onSubmit,
    register,
    errors: formState.errors
  }
}