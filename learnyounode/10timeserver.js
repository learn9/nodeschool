/**
Write a TCP time server!

Your server should listen to TCP connections on the port provided by the first argument to your program. For each connec
tion you must write the current date & 24 hour time in the format:

    "YYYY-MM-DD hh:mm"

followed by a newline character. Month, day, hour and minute must be zero-filled to 2 integers. For example:

    "2013-07-06 17:42"
 */

var port = process.argv[2];

var net = require('net');

var server = net.createServer(function(socket) {
	var date = new Date();
	socket.write(getDateString(date));
	socket.end("\n");
});
server.listen(port);


/**
 * get date string in this format:
 * "YYYY-MM-DD hh:mm"
 */
function getDateString(date) {
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	month = prependIfLessThan10(month);
	var day = date.getDate();
	day = prependIfLessThan10(day);
	var hours = date.getHours();
	hours = prependIfLessThan10(hours);
	var minutes = date.getMinutes();
	minutes = prependIfLessThan10(minutes);

	return year+"-"+month+"-"+day+" "+hours+":"+minutes;
}

/**
 * prepend a "0" in front so that the number is always 2 digit.
 */
function prependIfLessThan10(value) {
	return (value < 10) ? "0"+value : String(value);
}