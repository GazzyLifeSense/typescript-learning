type TupleToObject<T extends readonly (string | number | symbol)[]> = { [P in T[number]]: P}

const tuple = ['tesla', 'byd', 'benz']
const o: TupleToObject<typeof tuple> = { tesla: 'tesla', 'byd': 'byd', 'benz': 'benz' }