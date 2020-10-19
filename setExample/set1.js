let mySet = new Set()

mySet.add(1)           // Set [ 1 ]
mySet.add(5)           // Set [ 1, 5 ]
mySet.add(5)           // Set [ 1, 5 ]
mySet.add('some text') // Set [ 1, 5, 'some text' ]
let o = {a: 1, b: 2}
mySet.add(o)

mySet.add({a: 1, b: 2})   // o is referencing a different object, so this is okay
mySet.add(o)
console.log("entire set output");
console.log(mySet);
console.log("-----------------------");
console.log("iterate over items in set");
// iterate over items in set
// logs the items in the order: 1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}
for (let item of mySet)
  console.log(item)
console.log("-----------------------");
console.log("logs the items in the order using keys:");
// logs the items in the order: 1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}
for (let item of mySet.keys())
  console.log(item)
console.log("-----------------------");// logs the items in the order: 1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}
console.log("logs the items in the order using values:");
for (let item of mySet.values())
  console.log(item)
console.log("-----------------------");
console.log("key and value are the same here");
// logs the items in the order: 1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}
// (key and value are the same here)
for (let [key, value] of mySet.entries())
  console.log(key)
console.log("-----------------------");
