// // function x() {
// //     let a=0;
// //     setTimeout (function x1 () {
// //         console.log(a++);
// //     },1000);
// // }
// // x();
// // x();
// // x();

// function a() {
//     var b = 100;
//     function c() {
//         console.log(b++);
//     }
//     return c();
// }
// var x = a();
// x;
// x;
// x;

function x() {
    var b = 0;
    return function () {
        console.log("hi",b++);
    }
}

var c = x();
c();
c();