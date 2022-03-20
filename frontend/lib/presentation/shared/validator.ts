import {
  Path,
  FieldError,
  FieldErrors,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";
import * as z from "zod";

// zodに渡せる型に変換する型
export type toZod<T extends Record<string, any>> = {
  [K in keyof T]-?: z.ZodType<T[K]>;
};

// 2階層まで, それ以上ネストする入力フォームはUX的にないと仮定した
type ValidateError<T> = Partial<{
  [x: string]: T extends FieldError ? FieldError : {
    [x: string]: FieldError
  }
}>

export const validationRegister = <T extends FieldValues>(
  path: Path<T>,
  register: UseFormRegister<T>,
  errors: ValidateError<T>
) => {
  const e = path
    .split(".")
    .reduce((result: { [x: string]: FieldErrors }, key) => {
      if (result[key]?.message) {
        return result[key];
      }
      return { ...errors[key] };
    }, {});
  return {
    register: { ...register(path) },
    errors: e.message || "",
  };
};

const parseError = (error: any[], result: any, keys: string[] = []) => {
  Object.entries(error).forEach(([_, obj]) => {
    const key = obj[0];
    const { message, ref, type, ...other } = obj[1];
    if (message) {
      Object.assign(result, { [key]: { message } });
    }
    if (other != null) {
      keys.push(key);
      const r = Object.entries(other);
      parseError(r, result[key], keys);
    }
  });
};

export const parseValidateError = <T>(error: ValidateError<T>) => {
  const result: { [x: string]: any }[] = [];
  Object.entries(error).forEach(([key, value]) => {
    if (!value) return;
    const { message, ref, type, ...other } = value;
    const messages = { [key]: { message } };
    if (other != null) {
      const r = Object.entries(other);
      parseError(r, messages[key]);
    }
    result.push(messages);
  });
  const prettied = JSON.stringify(result, null, 4);
  alert(prettied);
};
