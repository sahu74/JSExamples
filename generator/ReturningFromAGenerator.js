function* genFuncWithReturn() {
    yield 'a';
    yield 'b';
    return 'result';
}
const genObjWithReturn = genFuncWithReturn();
console.log(genObjWithReturn.next());
console.log(genObjWithReturn.next());
console.log(genObjWithReturn.next());
const  t = genObjWithReturn.next();
console.log(t);

for (const x of genFuncWithReturn()) {
    console.log(x);
}
