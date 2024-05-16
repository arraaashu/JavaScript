const p1 = new Promise(function(resolve,reject)
{
    resolve("P1 success");
});

const p2 = new Promise(function(resolve,reject)
{
    reject("P2 failed");
});

async function fx(){
    const answer = await p1;
    console.log(answer);
}

p2.then(res=>console.log(res));

fx();