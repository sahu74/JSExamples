function fun()
{
var a = 4; // 'a' is the local variable, created by the fun()
function innerfun() // the innerfun() is the inner function, or a closure
{
return a;
}
console.log("hara = " +innerfun());
return innerfun;
}
var output = fun();
console.log(output());
