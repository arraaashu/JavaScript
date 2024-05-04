// function x() {
//     for(let i=1;i<6;i++)
//     setTimeout(function () {
//         console.log(i);
//     },1000);
// }
// x();

function y() {
    for(var i = 1;i<=5;i++)
        {
            function closure(i)
            {
                setTimeout(function() {
                    console.log(i);
                },1000);
            }
            closure(i);
        }
}
y();