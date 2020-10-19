//terminates the generator
function* genFunc1() {
    try {
        console.log('Started');
        yield; // (A)
    } finally {
        console.log('Exiting');
        yield 'Not done, yet!';
    }
}
const genObj1 = genFunc1();
genObj1.next();
genObj1.return('Result');
//genFunc1().return('Result')
