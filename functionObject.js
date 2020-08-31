//! console.log((function(){}).constructor === Function);
//! Example 1:
var fun = function  DisplayName()
{
  console.log("Function.NAME = " + DisplayName.name);
}

fun();


console.log(fun.toString())
//! Example 2:
var add = function(x, y) {
  return x + y;
};
var t = add(1, 2);
console.log(add(1, 2)); // 3

//! Example 3:
// x, y is the argument. 'return x + y' is the function body, which is the last in the argument list.
var add = new Function('x', 'y', 'return x + y');
var t = add(10, 20);
console.log(t);


//! Example 4:

function subtract(x, y) {
  return x - y;
}
console.log("========================")
console.log(subtract.length); // 2, expected amount of arguments.
console.log(subtract.toString());
