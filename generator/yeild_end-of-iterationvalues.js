function* genFuncWithReturn() {
    yield 'a';
    yield 'b';
    return 'The result';
}
function* logReturned(genObj) {
    const result = yield* genObj;
    console.log(result); // (A)
}
[...logReturned(genFuncWithReturn())]
