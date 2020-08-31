


var isFinished =(done) => done.isComplete ;


//console.log(isFinished(false));

var todoArray = [
  {
    title: "Accounts Section",
    isComplete: true,
  },
  {
    title: "Finance Section",
    isComplete: false,
  },
  {
    title: "Works Dept Section",
    isComplete: true,
  },
  {
    title: "Human Resource Section",
    isComplete: true,
  }
];



var myFilter =  todoArray.filter((done) =>
{
  if(done.isComplete)
  {
    return true;
  }

} );
//console.log(Object.keys(myFilter).forEach((item) => console.log(item)));

myFilter.forEach((i) => console.log(i.title));
