function x() {
    var a = 10;
    function y() {
        var b = 100;
        function z() {
            var c= 1000;
            console.log("a",a++,"b",b++,"c",c++);
        }
        return z;
    }
    return y;
}
var variable = x();
variable()();
variable()();
variable()();

var var_b = x()();
var_b();
var_b();
var_b();

var var_c = x()()();
var_c;
var_c;
var_c;