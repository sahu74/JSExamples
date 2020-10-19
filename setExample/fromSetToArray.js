let mySet = new Set()

mySet.add(1)           // Set [ 1 ]
mySet.add(5)           // Set [ 1, 5 ]
mySet.add(5)           // Set [ 1, 5 ]
mySet.add('some text') // Set [ 1, 5, 'some text' ]
let o = {a: 1, b: 2}
mySet.add(o)

mySet.add({a: 1, b: 2})   // o is referencing a different object, so this is okay


// convert Set object to an Array object, with Array.from
let myArr = Array.from(mySet) // [1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}]

console.log(myArr);


/*
// the following will also work if run in an HTML document
mySet.add(document.body)
mySet.has(document.querySelector('body')) // true
*/
// converting between Set and Array
var  mySet2 = new Set([1, 2, 3, 4])
console.log(mySet2.size);                    // 4
console.log([...mySet2]  );                  // [1, 2, 3, 4]
