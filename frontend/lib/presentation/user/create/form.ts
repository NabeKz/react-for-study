import { toZod } from "@/presentation/shared/validator";
import * as z from "zod";

export type UserCreateForm = {
  example: string,
  exampleRequired: string,
}

export const form = z.object<toZod<UserCreateForm>>({
  example: z.string(),
  exampleRequired: z.string().nonempty(),
})
