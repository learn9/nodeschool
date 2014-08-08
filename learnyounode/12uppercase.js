/**
http uppercase server

Write an HTTP server that receives only POST requests and converts incoming POST body characters to upper-case and retur
ns it to the client.

Your server should listen on the port provided by the first argument to your program.
*/

var http = require('http');

var usage = "node <jsfile> <port>";

if (process.argv.length < 3) {
	console.log(usage);
	return;
}

var port = process.argv[2];

/** get name of object */
// Object.prototype.getName = function() { 
//    var funcNameRegex = /function (.{1,})\(/;
//    var results = (funcNameRegex).exec((this).constructor.toString());
//    return (results && results.length > 1) ? results[1] : "";
// };

var server = http.createServer(function(req,resp) {
	// only respond to post
	if (req.method === "POST") {

		resp.writeHead(200, { 'content-type': 'text/plain'});

		req.on('data', function(chunk) {
			resp.write(upper(chunk));
		});
		req.on('end', function() { resp.end() });

	}
});
server.listen(port);

/** convert string to upper case */
function upper(chunk) {
	var str = chunk.toString();
	return str.toUpperCase();
}