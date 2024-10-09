export const foo = 123

interface Name {
  first: string;
  second: string;
}

let name: Name;
name = {
  first: 'John',
  second: 'Doe',
};

function reverse<T>(items: T[]): T[] {
  const toreturn: T[] = [];
  for (let i = items.length - 1; i >= 0; i--) {
    toreturn.push(items[i]);
  }
  return toreturn;
}

interface Array<T> {
  reverse(): T[];
}

function extend<T extends object, U extends object>(first: T, second: U): T & U {
  const result = <T & U>{};
  for (let id in first) {
    (<T>result)[id] = first[id];
  }
  for (let id in second) {
    if (!result.hasOwnProperty(id)) {
      (<U>result)[id] = second[id];
    }
  }

  return result;
}

const x = extend({ a: 'hello' }, { b: 42 });

// 现在 x 拥有了 a 属性与 b 属性
const a = x.a;
const b = x.b;

type nn = {x: number, y: number};
let nameNumber1 = {x: 1, y: 1, z: 1};
function a2(a1:nn){}
a2(nameNumber1)

$1("")
'1'.endsWith1("1")