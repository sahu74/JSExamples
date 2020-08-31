//! console.log((function(){}).constructor === Function);

var fun = function  DisplayName()
{
  console.log("Function.NAME = " + DisplayName.name);
}

fun();
