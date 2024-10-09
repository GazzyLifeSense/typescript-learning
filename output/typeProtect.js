// 用户自己定义的类型保护！
function isFoo(arg) {
    return arg.foo !== undefined;
}
function doSome(x) {
    if (typeof x === 'string') {
        // 在这个块中，TypeScript 知道 `x` 的类型必须是 `string`
        console.log(x.substr(1)); // Error: 'subtr' 方法并没有存在于 `string` 上
        console.log(x.substr(1)); // ok
    }
    x.substr(1); // Error: 无法保证 `x` 是 `string` 类型
}
var Foo1 = /** @class */ (function () {
    function Foo1() {
        this.foo = 123;
    }
    return Foo1;
}());
var Bar = /** @class */ (function () {
    function Bar() {
        this.bar = 123;
    }
    return Bar;
}());
function doStuff(arg) {
    if (arg instanceof Foo1) {
        console.log(arg.foo); // ok
        console.log(arg.bar); // Error
    }
    else {
        // 这个块中，一定是 'Bar'
        console.log(arg.foo); // Error
        console.log(arg.bar); // ok
    }
}
doStuff(new Foo());
doStuff(new Bar());
function doStuff1(q) {
    if ('x' in q) {
        // q: A
    }
    else {
        // q: B
    }
}
// 用于创建字符串列表映射至 `K: V` 的函数
function strEnum(o) {
    return o.reduce(function (res, key) {
        res[key] = key;
        return res;
    }, Object.create(null));
}
// 创建 K: V
var Direction = strEnum(['North', 'South', 'East', 'West']);
// 简单的使用
var sample;
sample = Direction.North; // Okay
sample = 'North'; // Okay
sample = 'AnythingElse'; // ERROR!
