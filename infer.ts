type InferArr<T> = T extends [infer F, ...infer Rest] ?  Rest : never

const arr: InferArr<[1]> = [1]