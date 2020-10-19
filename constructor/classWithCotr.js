class Person {

  constructor(name) {
    this.name = name;
  }

  introduce() {
    console.log(`Hello, my name is ${this.name}`);
  }

}

const otto = new Person('Otto');

otto.introduce();
console.log(Person.constructor.prototype);
console.log(Person.constructor)
/*
Hello, my name is Otto
[Function]
[Function: Function]
*/
