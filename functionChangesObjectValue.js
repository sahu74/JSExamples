
//! object are something like call by reference, But it is not true for primitive types

function changeMe(obj)
{
  console.log("function : Original Value: ");
  console.log(obj);
  obj.make='Toyota';
  console.log("Function changed the object:")
}


var mycar = {make: 'Honda', model: 'Accord', year: 1998};
changeMe(mycar);
mycar.model=' nextGen';
console.log(mycar);
