

function getMoneyBack(money) {
  return new Promise((resolve, reject) => {
    if (typeof money !== 'number') {
      reject(new Error('money is not a number'))
    } else {
      resolve(money)
    }
  })
}


getMoneyBack(1200).then((money) => {
  console.log(money)
});


 function myTest(name){

   return new Promise(  (resolve,reject) => {
	   setTimeout( () => { 
	   
	   
	   resolve(name); },200);


   } // end of promise function
      ); // end of promise
 }
 
 
 
 
 function resolveAfter2Seconds(x) {
  return new Promise( (resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}



setTimeout( Fun, 200);