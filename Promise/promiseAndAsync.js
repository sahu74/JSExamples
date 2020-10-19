function myTest(name){

  return new Promise(  (resolve) => {
    setTimeout( () => { resolve(name); },200);


  } // end of promise function
     ); // end of promise
}



async function test(){
   var y = await myTest(" haramohan welcome ");
   //var y = await "haramohan welcome";
   console.log(y);
}

console.log(1);
test();
console.log(2);
