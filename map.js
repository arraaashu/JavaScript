radius = [3,1,2,5];

console.log(radius.map((i)=>(i*i)));

const users = [
    {firstname: 'hi',lastname: 'hello', age:26},
    {firstname: 'hi1',lastname: 'hello1', age:36},
    {firstname: 'hi2',lastname: 'hello2', age:46},
    {firstname: 'hi3',lastname: 'hello3', age:27}
];

const output = users.reduce(function(acc,curr)
{
    if(curr.age>30)
        {
            acc = acc+curr.firstname;
        }
        return acc;
},[]);

console.log(output);