function x(){
    let count = 0;
    document.getElementById("button").addEventListener("click",function(){
        document.getElementById("demo").innerHTML=count++;
    })
}
x();