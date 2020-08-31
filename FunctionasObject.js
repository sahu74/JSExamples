var funcObj = new Function();
funcObj.ename="Haramohan";
funcObj.eid=11;
funcObj.fun=(a) => {
  if (a == 1)
  {
    console.log(a);
  }else if (a==2){
    console.log(a);
  }
  else {
    console.log(a);
  }
}
funcObj.fun(1);
console.log(funcObj );
