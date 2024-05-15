function CreateOrder(cart)
{
    return new Promise(function(resolve,reject)
    {
    if(cart.size == 0)
        {
            const err = new Error("no cart items present");
            reject(err);
        }
    const orderId = 77;
    if(orderId)
        {
            resolve(orderId);
        }
}).then(function(orderId)
{
    return new Promise(function(resolve,reject) {
        if(!orderId)
            reject("not found");
        else
            resolve(orderId*2000);
});
});
}

const cart = ["iphone", "mac", "ipad"];
CreateOrder(cart)
    .then(function(totalCost) {
        console.log("Total cost:", totalCost);
    })
    .catch(function(error) {
        console.error("Error:", error);
    });
