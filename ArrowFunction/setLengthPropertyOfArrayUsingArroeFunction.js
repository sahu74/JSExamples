var print =  (arr)=> {
    arr.forEach( (el, i) => console.log(i, ':', el));
    console.log('length: ', arr.length);
    console.log('*****')
};
var a = [11, 22, 33];
print(a);
a.length = 1;
print(a);
a.length = 5;
print(a);
console.log(a);
