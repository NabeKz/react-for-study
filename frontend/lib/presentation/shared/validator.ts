import { FieldError, Path, UseFormRegister } from "react-hook-form";
import * as z from "zod";

// zodに渡せる型に変換する型
export type toZod<T extends Record<string, any>> = {
  [K in keyof T]-?: z.ZodType<T[K]>;
};

export const validationRegister = <T>(
  path: Path<T>,
  register: UseFormRegister<T>,
  errors: {[x: string]: any}
) => {
  return {
    register: { ...register(path) },
    errors: errors[path]?.message || ""
  };
};
