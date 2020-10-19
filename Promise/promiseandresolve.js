function test()
{
  return new Promise((resolve,reject) =>{

    setTimeout(() =>  {
           const err=true;
      if(!err)
      {
        resolve(" hara: Passed");
      }
      else
      {
        reject(" hara: Failed");
      }
    },2000);

  }

  );
}

test().then( (e) => { console.log(" Then func passed " +e)})
		.catch((e) => { console.log(" Then func Failed " +e)});
