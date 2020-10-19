function* genFunc() {
    // (A)
    console.log('First');
    yield;
    console.log('Second');
}
const genObj = genFunc();
genObj.next();
// Output: First
genObj.next();
// output: Second
