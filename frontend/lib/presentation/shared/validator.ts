import { Path, UseFormRegister } from "react-hook-form";
import * as z from "zod";

// zodに渡せる型に変換する型
export type toZod<T extends Record<string, any>> = {
  [K in keyof T]-?: z.ZodType<T[K]>;
};

export const validationRegister = <T>(
  path: Path<T>,
  register: UseFormRegister<T>
) => {
  return {
    register: { ...register(path) },
  };
};
