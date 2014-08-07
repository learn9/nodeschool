// try filesystem
// count number of '\n' in the file and print to console.

var fs = require('fs');

var filename = "";

if (process.argv.length < 3) {
	console.log("usage: node 3fs.js <full path filename>");
	return;
}

filename = process.argv[2];
//console.log('filename=' + filename);

// return a buffer object
var fileBuffer = fs.readFileSync(filename);

var sContent = fileBuffer.toString();
//console.log(sContent);

// count how mnay \n there is by splitting using '\n'
var splitted = sContent.split('\n');

console.log(splitted.length - 1);