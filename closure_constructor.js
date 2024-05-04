function x() {
    var a =10;
    this.increment = function() {
        console.log(a++);
    }
    this.decrement = function() {
        console.log(--a);
    }
}
var call = new x();
call.increment();
call.increment();
call.decrement();