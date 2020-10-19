var promise = new Promise((resolve, rejecte) => {
  //rejecte(" Haramohan resected");
resolve(" Haramohan resolved");

});

promise.then( ( msg) => {console.log(" hara 1 " + msg)},
 (msger) => { console.log(" hara 2 " + msger) }
);
