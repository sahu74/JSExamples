function fun(a)
{
function innerfun(b){
  console.log(" b val ",b);
return a*b;
}
return innerfun;
}
var output = fun(4);
console.log(output(6));
