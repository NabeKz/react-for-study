import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { form, UserCreateForm } from "./form";
import { UserCreateInteraction } from "@/usecase/user/create/interaction";
import { di } from "@/di_container";
import { validationRegister } from "@/presentation/shared/validator";

const interaction = UserCreateInteraction.crate(di.repository.user);
export const Presentation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserCreateForm>({
    resolver: zodResolver(form),
  });
  const onSubmit = () => handleSubmit(submit);
  const submit = () => console.log("data");

  const validator = {
    emailRaw: validationRegister("email.raw", register, errors),
    emailConfirm: validationRegister("email.confirm", register, errors),
  };

  return {
    onSubmit,
    validator,
  };
};
