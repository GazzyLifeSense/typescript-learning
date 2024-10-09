"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.foo = void 0;
exports.foo = 123;
var name;
name = {
    first: 'John',
    second: 'Doe',
};
function reverse(items) {
    var toreturn = [];
    for (var i = items.length - 1; i >= 0; i--) {
        toreturn.push(items[i]);
    }
    return toreturn;
}
function extend(first, second) {
    var result = {};
    for (var id in first) {
        result[id] = first[id];
    }
    for (var id in second) {
        if (!result.hasOwnProperty(id)) {
            result[id] = second[id];
        }
    }
    return result;
}
var x = extend({ a: 'hello' }, { b: 42 });
// 现在 x 拥有了 a 属性与 b 属性
var a = x.a;
var b = x.b;
var nameNumber1 = { x: 1, y: 1, z: 1 };
function a2(a1) { }
a2(nameNumber1);
$1("");
'1'.endsWith1("1");
