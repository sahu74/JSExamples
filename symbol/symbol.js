let firstName = Symbol('first name'),
    lastName = Symbol('last name');

    console.log(firstName); // Symbol(first name)
console.log(lastName); // Symbol(last name)
//---------------Sharing symbols-----------------
let ssn = Symbol.for('ssn');
let citizenID = Symbol.for('ssn');
console.log(ssn === citizenID); // true
//to get the key associated with a symbol, you use the Symbol.keyFor() method -------
console.log(Symbol.keyFor(citizenID)); // 'ssn'
//-------------------
// symbol that does not exist in the global symbol registry, the System.keyFor() method returns undefined.

let systemID = Symbol('sys');
console.log(Symbol.keyFor(systemID)); // undefined

let statuses = {
    OPEN: Symbol('Open'),
    IN_PROGRESS: Symbol('In progress'),
    COMPLETED: Symbol('Completed'),
    HOLD: Symbol('On hold'),
    CANCELED: Symbol('Canceled')
};
// complete a task
console.log(statuses.COMPLETED);

//--Using symbol as the computed property name of an object---------------

let status = Symbol('status');
let task = {
    [status]: statuses.OPEN,
    description: 'Learn ES6 Symbol'
};
console.log(task);
console.log(Object.keys(task)); // ["description"]
console.log(Object.getOwnPropertyNames(task)); // ["description"]
console.log(Object.getOwnPropertySymbols(task)); //[Symbol(status)]
/*
Assuming that you want the [] array is an instance of the Stack class, you can add the Symbol.hasInstance method as follows:
*/

class Stack {
    static [Symbol.hasInstance](obj) {
        return Array.isArray(obj);
    }
}
console.log([] instanceof Stack); // true
//

function Money(amount, currency) {
    this.amount = amount;
    this.currency = currency;
}
Money.prototype[Symbol.toPrimitive] = function(hint) {
    var result;
    switch (hint) {
        case 'string':
            result = this.amount + this.currency;
            break;
        case 'number':
            result = this.amount;
            break;
        case 'default':
            result = this.amount + this.currency;
            break;
    }
    return result;
}

var price = new Money(799, 'USD');

console.log('Price is ' + price); // Price is 799USD
console.log(+price + 1); // 800
console.log(String(price)); // 799USD
