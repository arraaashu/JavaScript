setTimeout(function () {
    console.log("hi");
},1000);

function x(y)
{
    console.log("x");
    y();
}

x(function() {
    console.log("y");
})