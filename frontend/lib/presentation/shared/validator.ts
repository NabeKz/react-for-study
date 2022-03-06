import * as z from "zod";

// zodに渡せる型に変換する型
export type toZod<T extends Record<string, any>> = {
  [K in keyof T]-?: z.ZodType<T[K]>;
}
