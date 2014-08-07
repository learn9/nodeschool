/**
modularize the last file 5read_dir.js.  
this is the actual dir reading.  
*/

var fs = require('fs');


String.prototype.endsWith = function(suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
};


function readdir(dirname, extFilter, callback) {
	fs.readdir(dirname, function(err, filenames) {
		if (err) {
			//console.err(err);
			callback(err, null);
		} else {
			for (var i=0; i < filenames.length; i++) {
				var filename = filenames[i];
				if (filename.endsWith("." + extFilter)) {
					//console.log(filename);
					callback(null, filename);
				}

			}
		}
	});
}

module.exports = {};
module.exports.readdir = readdir;
