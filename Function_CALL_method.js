/*
The call() method calls a function with a given this value and arguments provided individually.
*/

function Product(n, p) {
  console.log(" Product Starts \n");
  this.name = n;
  this.price = p;
  console.log(`Name = ${this.name}  and price = ${this.price}  from ${Product.name}`);
  console.log(" Product ends \n");
}

function Food(name, price) {
  console.log(" function Food Starts \n");
  Product.call(this, name, price);
  this.category = 'food Category';
  console.log(" function Food Ends \n");
}
var foodObj = new Food('cheese', 5);
console.log(foodObj);
//! pring object attributes.
console.log(foodObj.category);
