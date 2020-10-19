const request = require(‘request’);
let result;
request('http://www.somepage.com', function (error, response, body) {
    if(error){
        // Handle error.
    }
    else {
        result = body;
    }
});
console.log(result);
