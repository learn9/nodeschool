/**
Write a program that performs an HTTP GET request to a URL provided to you as the first command-line argument. Collect a
ll data from the server (not just the first "data" event) and then write two lines to the console (stdout).

The first line you write should just be an integer representing the number of characters received from the server and th
e second line should contain the complete String of characters sent by the server.
*/

var http = require('http');
var BufferList = require('bl');
var concat = require('concat-stream');

var usage = "node 8http_buffer.js <url to fetch>";

if (process.argv.length < 3) {
	console.log(usage);
	return;
}

var url = process.argv[2];

http.get(url, function(res) {
	var bl = BufferList();

	res.on('data', function(chunk) {
		bl.append(chunk);

		//console.log(String(chunk));
	});

	res.on('error', function(e) {
		console.log("error: " + e.message);
	});

	res.on('end', function() {
		console.log(bl.length);
		console.log(bl.toString());
	});
});
