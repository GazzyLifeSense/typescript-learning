var Foo = /** @class */ (function () {
    function Foo() {
    }
    return Foo;
}());
var someVar = Foo;
var someOtherVar = 123;
var a = bar;
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
