
/*
Benefits of Promises
Improves Code Readability
Better handling of asynchronous operations
Better flow of control definition in asynchronous logic
Better Error Handling

It has 4 state:
fulfilled: Action related to the promise succeeded
rejected: Action related to the promise failed
pending: Promise is still pending i.e not fulfilled or rejected yet
settled: Promise has fulfilled or rejected
Parameters

Promise constructor takes only one argument,a callback function.
Callback function takes two arguments, resolve and reject
Perform operations inside the callback function and if everything went well then call resolve.
If desired operations do not go well then call reject.
Example
*/


var promise = new Promise(function (resolve,reject){

var x ="1"
const y = "12";
if( x == y){
resolve();
}
else {
  reject();
}
});

promise.then(() => {console.log("resoleved sahu ")})
.catch(() => {console.log("Rejected : sahu ")});
