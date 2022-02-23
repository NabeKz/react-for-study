import * as z from "zod";

// zodに渡せる型に変換する型
type toZod<T extends Record<string, any>> = {
  [K in keyof T]-?: z.ZodType<T[K]>;
}

type Hoge = {
  hello: string;
  world: string;
}

const HogeSchema = z.object<toZod<Hoge>>({
  hello: z.string(),
  world: z.string()
})
