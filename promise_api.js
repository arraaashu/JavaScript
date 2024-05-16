const p1 = new Promise(function(resolve,reject){
    setTimeout(()=>resolve("P1 success"),2000);
});

const p2 = new Promise(function(resolve,reject){
    setTimeout(()=>resolve("P2 success"),1000);
});

const p3 = new Promise(function(resolve,reject){
    setTimeout(()=>resolve("P3 success"),5000);
});

const p4 = new Promise(function(resolve,reject){
    setTimeout(()=>reject("P4 fails"),5000);
});

const p5 = new Promise(function(resolve,reject){
    setTimeout(()=>reject("P5 fails"),5000);
});

Promise.all([p1,p2,p3,p4]).then(function(res)
{
    console.log("all",res);
});

Promise.allSettled([p1,p2,p3,p4]).then(function(output)
{
    console.log("allsett",output);
});

Promise.race([p1,p2,p3,p4]).then(function(output)
{
    console.log("race",output);
});

Promise.any([p1,p2,p3,p4]).then(function(output)
{
    console.log("any",output);
});

