/**

Write an HTTP server that serves the same text file for each request it receives.

Your server should listen on the port provided by the first argument to your program.

You will be provided with the location of the file to serve as the second command-line argument. You must use the fs.cre
ateReadStream() method to stream the file contents to the response.

*/

var http = require('http');
var fs = require('fs');

// get arguments
var port = process.argv[2];
var filename = process.argv[3];
var readStream = undefined;

var server = http.createServer(function(req,resp) {
	resp.writeHead(200, { 'content-type': 'text/plain'});

	readStream = fs.createReadStream(filename);
	readStream.on('data', function(chunk) {
		resp.write(chunk);
	});
	readStream.on('end', function() { resp.end(); });

	// alternatively, a good way is to use pipe.
	// fs.createReadStream(filename).pipe(resp);
});
server.listen(port);