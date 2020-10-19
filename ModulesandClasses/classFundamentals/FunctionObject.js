
var obj = {}; // same as "new Object()"
var arrObj = []; // same as "new Array()"
var strObj = new String("byebye"); // not typically used
var numObj = new Number(50); // not typically used
var boolObj = new Boolean(true); // not typically used
var funcObj = new Function(); // not typically used
var funcObj2 = function() {
    console.log("I can have properties too.");
};
obj.prop = "a";
arrObj.prop = "b";
strObj.prop = "c";
numObj.prop = "d";
boolObj.prop = "e";
funcObj.prop = "f";
funcObj2.prop = "g";
console.log([obj.prop, arrObj.prop, strObj.prop, numObj.prop, boolObj.prop, funcObj.prop, funcObj2.prop]); // outputs ["a", "b", "c", "d", "e", "f", "g"]
