function order(cart)
{
    if(cart.size == 0)
        {
            const err = new Error("no cart items present");
            return err;
        }
    const orderId = 77;
    if(orderId)
        {
            return orderId;
        }
}
function payment(orderId)
{
    return orderId*2000+1;
}
function CreateOrder(cart)
{
    return new Promise(function(resolve,reject)
    {
        const orderId = order(cart);
        if(!orderId)
           reject("error");
        else
        resolve(orderId); 
    
}).then(function(orderId)
{
    return new Promise(function(resolve,reject) {
        if(!orderId)
            reject("not found");
        else
            resolve(payment(orderId));
});
})
.catch(function(error)
{
    console.log("error");
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
