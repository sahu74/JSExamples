const url = require('url');
const reqUrl = 'http://localhost:9005/user?country=India&city=Bhubaneswara';
const urlObject=url.parse(reqUrl,true);
console.log(urlObject.host);//localhost:9005
console.log(urlObject.pathname);// /user

console.log(urlObject.search);// ?country=India&city=Bhubaneswara
console.log(urlObject.query); //  {country:'India', city:'Bhubaneswara'}
console.log(urlObject.query.country);
console.log(urlObject.query.city);
console.log("End----------------");
/* OUTPUT
localhost:9005
/user
?country=India&city=Bhubaneswara
[Object: null prototype] { country: 'India', city: 'Bhubaneswara' }
India
Bhubaneswara
End----------------
[Finished in 2.668s]
*/
