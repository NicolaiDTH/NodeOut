var router = require("./router.js");

// Problem: we need a simple way to look at a user's badge count and JAvaScript point from a web browser

// Solution: Use node.js to perform the profile look ups and server our template via HTTP

// Create a web server

var http = require('http');
http.createServer(function(request, response) {
 router.home(request, response);
 router.user(request, response);
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');