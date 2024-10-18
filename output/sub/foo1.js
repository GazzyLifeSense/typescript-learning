"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Foo = /** @class */ (function () {
    function Foo() {
    }
    return Foo;
}());
var someVar = Foo;
var someOtherVar = 123;
var Utility;
(function (Utility) {
    function log(msg) {
        console.log(msg);
    }
    Utility.log = log;
    function error(msg) {
        console.log(msg);
    }
    Utility.error = error;
})(Utility || (Utility = {}));
// usage
Utility.log('Call me');
Utility.error('maybe');
var iTakeSomethingAndPassItAnErr = function (x) {
    /* 做一些其他的 */
};
iTakeSomethingAndPassItAnErr(function () { return null; }); // ok
iTakeSomethingAndPassItAnErr(function (err) { return null; }); // ok
iTakeSomethingAndPassItAnErr(function (err, data) { return null; }); // ok
// Error: 参数类型 `(err: any, data: any, more: any) => null` 不能赋值给参数类型 `(err: Error, data: any) => void`
iTakeSomethingAndPassItAnErr(function (err, data, more) { return null; });
var Status;
(function (Status) {
    Status[Status["Ready"] = 0] = "Ready";
    Status[Status["Waiting"] = 1] = "Waiting";
})(Status || (Status = {}));
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
var status = Status.Ready;
var color = Color.Red;
console.log(status, color);
var arr1 = { a: 1, '1': 2, length: 3 };
console.log(arr1, arr1[1]);
var Foo1 = /** @class */ (function () {
    function Foo1() {
    }
    return Foo1;
}());
_foo.foo = 1;
// 与之前做法相同
var bar;
console.log(_foo.foo);
