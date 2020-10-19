function show(money,e)
{
  if(money !=null){
console.log(" How Much money :" + money);
}
else {
  console.log("Error printed : ");
    console.log(e);
}
}

function getMoneyBack(money, callback) {
  console.log("call 1");
  if (typeof money !== 'number') {
    console.log("call 2");
    callback(null, new Error('money is not a number'))
  } else {console.log(" calll 3 ");
    callback(money)
  }
}

const money = getMoneyBack(1200.9,show)
//console.log(money);
