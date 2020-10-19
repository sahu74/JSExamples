let greeting = function (a) {
    return function (b) {
        return a + ' ' + b
    }
}

let hello = greeting('Hello')
let morning = greeting('Good morning')

console.log(hello('Austin')); // returns Hello Austin
console.log(hello('Roy')); // returns Hello Roy
console.log(morning('Austin')); // returns Good morning Austin
console.log(morning('Roy')); //returns Good Morning Roy
