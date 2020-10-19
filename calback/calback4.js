function greeting(name)
{
console.log(name);
}


function getMoneyBack(money, callback) {
  if (typeof money !== 'number') {
    callback(null, new Error('money is not a number'))
  } else {
    callback(money)
  }
}

getMoneyBack(1200, greeting)
