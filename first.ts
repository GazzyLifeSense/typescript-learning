type First<T extends any[]> = T extends [] ? never : T[0]

type first = First<[]>
let a:first
console.log(a)