class Foo {}
interface Bar {}
type Bas = {};

const someVar = Foo;
const someOtherVar = 123;

namespace Utility {
  export function log(msg) {
    console.log(msg);
  }
  export function error(msg) {
    console.log(msg);
  }
}

// usage
Utility.log('Call me');
Utility.error('maybe');

const iTakeSomethingAndPassItAnErr = (x: (err: Error, data: any) => void) => {
  /* 做一些其他的 */
};

iTakeSomethingAndPassItAnErr(() => null); // ok
iTakeSomethingAndPassItAnErr(err => null); // ok
iTakeSomethingAndPassItAnErr((err, data) => null); // ok

// Error: 参数类型 `(err: any, data: any, more: any) => null` 不能赋值给参数类型 `(err: Error, data: any) => void`
iTakeSomethingAndPassItAnErr((err, data, more) => null);

enum Status {
  Ready,
  Waiting
}
enum Color {
  Red,
  Blue,
  Green
}

export {}
let status = Status.Ready;
let color = Color.Red;
console.log(status, color)

interface ArrStr {
  [key: string]: string | number; // 必须包括所用成员类型
  [index: number]: string; // 字符串索引类型的子级

  // example
  length: number;
}

const arr1 = { a: 1, '1': 2, length: 3}
console.log(arr1, arr1[1])