/**
Create a program that prints a list of files in a given directory, filtered by the extension of the files. You will be p
rovided a directory name as the first argument to your program (e.g. '/path/to/dir/') and a file extension to filter by
as the second argument.

For example, if you get 'txt' as the second argument then you will need to filter the list to only files that end with .
txt.

The list of files should be printed to the console, one file per line. You must use asynchronous I/O.
*/
var fs = require('fs');
var dirname = process.argv[2];
var extFilter = process.argv[3];

var usage = "node 5read_dir.js <dirname> <file_extension_to_filter_on> "
	+ "\n eg. node 5read_dir.js c:/temp/test/ txt"

String.prototype.endsWith = function(suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
};

fs.readdir(dirname, function(err, filenames) {
	if (err) {
		console.err(err);
	} else {
		for (var i=0; i < filenames.length; i++) {
			var filename = filenames[i];
			if (filename.endsWith("." + extFilter)) {
				console.log(filename);
			}

		}
	}
});