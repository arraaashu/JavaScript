function k() {
    function x() {
        let a= 1;
    function z() {
        console.log(a++);
    }
    console.log('insi');
    return z;
}
return x;
}
let variable = k();
variable()();
variable()();
variable()();
variable()();