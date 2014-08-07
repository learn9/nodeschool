/**
Write a program that performs an HTTP GET request to a URL provided to you as the first command-line argument. Write the
 String contents of each "data" event from the response to a new line on the console (stdout).
*/

var http = require('http');

var usage = "node 7httpclient.js <url to fetch>";

if (process.argv.length < 3) {
	console.log(usage);
	return;
}

var url = process.argv[2];

http.get(url, function(res) {
	res.on('data', function(chunk) {
		console.log(String(chunk));
	});
}).on('error', function(e) {
	console.log("error: " + e.message);
});
