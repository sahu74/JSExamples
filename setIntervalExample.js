var counter=0;

function fun()
{
  console.log(" Hello World");
  counter++;
 if(counter == 5)
 {
   console.log(" Done");
   clearInterval(tid);
 }
}
const tid=setInterval(fun,1000);
