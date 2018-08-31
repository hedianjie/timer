const http = require('http');
const fs = require('fs');
const url = require('url');

http.createServer(function(req, res){
	const path = url.parse(req.url, true);
	console.log(req.method, path)
	res.send();
}).listen(8081);

