import { Path, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { form, UserCreateForm } from "./form";
import { UserCreateInteraction } from "@/usecase/user/create/interaction";
import { di } from "@/di_container";

const interaction = UserCreateInteraction.crate(di.repository.user);
export const Presentation = () => {
  const { register, handleSubmit, formState } = useForm<UserCreateForm>({
    resolver: zodResolver(form),
  });
  const onSubmit = () => handleSubmit(submit);
  const submit = () => console.log("data");
  const fn = (key: Path<UserCreateForm>) => ({
    ...register(key)
  })

  const validator = {
    example: register("example"),
    exampleRequired: fn("exampleRequired"),
  };

  return {
    onSubmit,
    validator,
    errors: formState.errors,
  };
};
