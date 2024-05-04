/*obj = [1,2,3,4,5,6];
obj.forEach((item, index, arr) => {
    console.log(item+" "+index+" "+arr[index]);
});
console.log(obj.length);*/  
a = 'a';
b = 'b';
s = new Set([1,2,3,4]);
s.add(a);
s.add(b);
s.delete(1);
s.forEach((item) => {
    console.log(item);
})
console.log(s.length);