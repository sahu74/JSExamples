//File - url

const http=require('http');
const url=require('url');
const fs= require('fs');

const server = http.createServer( (req,res)=>{
	// localhost::9007/feb.html
	const urlObject= url.parse(req.url,true);
	const fileName= "."+urlObject.pathname; // ./feb.html;
	console.log(fileName);
	fs.readFile(fileName, function(err,data){
		if(err){
			res.writeHead(404,{'Content-Type':'text/html'});
			console.log(fileName);
	  	return res.end(fileName);
	}// end of if block
	res.writeHead(200,{'Content-Type':'text/html'});
	res.write(data);
	res.end();
}); // end of read file block
});// end of createServer


server.listen(9007,() =>{console.log("Server is running .... ");});
