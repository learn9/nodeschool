/**

This problem is the same as the previous problem (HTTP COLLECT) in that you need to use http.get(). However, this time y
ou will be provided with three URLs as the first three command-line arguments.

You must collect the complete content provided to you by each of the URLs and print it to the console (stdout). You don'
t need to print out the length, just the data as a String; one line per URL. The catch is that you must print them out i
n the same order as the URLs are provided to you as command-line arguments.

*/

var http = require('http');
var BufferList = require('bl');

var numUrls = process.argv.length - 2; // number of urls in the arguments
var count = 0;
var url = "";
var resultAr = []; // the array that contains the result of each request.

for (var i=2; i<process.argv.length; i++) {
	url = process.argv[i];
	dowork(i, url);
}

/**
 * created a new function to have new scope so we can store some variables.
 * there might be more elegant way to do this.
 * @param idx - index of the url on the result array.
 */
function dowork(idx, url) {
	var idxResult = idx;
	
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
			resultAr[idxResult] = bl.toString();

			count++;
			// we only print all the result when data from all the requests come back.  
			if (count == numUrls) {

				for (var j=2; j<process.argv.length; j++) {
					console.log(resultAr[j]);
				}
			}
			
		});
	});
}