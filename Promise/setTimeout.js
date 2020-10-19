function myFun() {

  return new Promise((res,rej) =>{
  setTimeout( ()=>{

  const err=true;
    if(err){
	res("Resolved, It is accepted");
    }else{
    rej(" NOT Resolved ,It is rejected");
    }
  },2000);
  });
}

 myFun().then((e)=>{console.log(e);}).catch((e)=>{console.log(e);}); 
