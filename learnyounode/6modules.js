/**
modularize the last file 5read_dir.js.  
*/

var readdir = require('./6readdir_module');

var dirname = process.argv[2];
var extFilter = process.argv[3];


var usage = "node 6modules.js <dirname> <file_extension_to_filter_on> "
	+ "\n eg. node 6modules.js c:/temp/test/ txt";

readdir.readdir(dirname, extFilter, onReaddir);

function onReaddir(err, filename) {
	if (err) {
		console.err(err);
	} else {
		console.log(filename);
	}
}
