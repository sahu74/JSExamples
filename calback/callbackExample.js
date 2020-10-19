function greeting(name)
{
console.log(name);
}


function introduction(firstName, lastName, callback) {
  const fullName = `${firstName} ${lastName}`;

  callback(fullName);
}

introduction('haramohan ','Sahu', greeting); // Hello Chris Nwamba, welcome to Scotch!
