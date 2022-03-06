import { toZod } from "@/presentation/shared/validator";
import * as z from "zod";

export type UserCreateForm = {
  email: {
    raw: string;
    confirm: string;
  };
};

export const form = z.object<toZod<UserCreateForm>>({
  email: z
    .object({
      raw: z.string(),
      confirm: z.string().nonempty(),
    })
    .refine(
      (value) => value.raw === value.confirm,
      (_) => ({ message: "メールアドレス一致しません" })
    ),
});
