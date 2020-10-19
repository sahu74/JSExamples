const promiseA = new Promise( (rejectionFunc,resolutionFunc) => {
    rejectionFunc("DONE");
});
// At this point, "promiseA" is already settled.
promiseA.then( (str) => console.log("rejectionFunc : asynchronous logging has val:", str) ).catch(
  (str) => console.log("resolutionFunc: asynchronous logging has val:", str)
);
console.log("immediate logging");
