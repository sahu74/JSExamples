'use strict'
function A() {}
var a = new A();
class B extends A {}
var b = new B();
console.log('====='); // =====
console.log(B.__proto__ === A); // true
console.log(B.prototype.__proto__ === A.prototype); // true
console.log(b.__proto__ === B.prototype); // true
console.log(a.__proto__ === A.prototype); // true
console.log(A.__proto__ === Function.__proto__); // true
console.log(Object.__proto__ === Function.__proto__); // true
console.log(Object.prototype === Function.__proto__.__proto__); // true
console.log(Object.prototype.__proto__ === null); // true

console.log(A.prototype.constructor.prototype==A.prototype);//A {}
console.log(A.prototype.constructor);//[Function: A]
console.log(a.constructor === A); // true
