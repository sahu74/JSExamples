
function student(name) {
  if (!new.target) {
       throw "must use new operator with Person";
   }
    this.name = name;
    console.log(" Name : " +name);
}
class Person {
    constructor(name) {
        this.name = name;
        console.log(new.target.name);
    }
}

class Employee extends Person {
    constructor(name, title) {
        super(name);
        this.title = title;
    }
}
//student(" Haramohan Sahu");
let john = new Person('John Doe'); // Person
let tt= new student("hara");
console.log(tt.name)
let lily = new Employee('Lily Bush', 'Programmer'); // Employee
