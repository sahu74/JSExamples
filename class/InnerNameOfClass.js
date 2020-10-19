class C {
constructor() {
    // Use inner name C to refer to class
    console.log(`constructor: ${C.prop}`);
}
logProp() {
    // Use inner name C to refer to class
    console.log(`logProp: ${C.prop}`);
}
}
C.prop = 'Hi!';

const D = C;
C = null;

// C is not a class, anymore:
//new C().logProp();
    // TypeError: C is not a function

// But inside the class, the identifier C
// still works
new D().logProp();
    // constructor: Hi!
    // logProp: Hi!
