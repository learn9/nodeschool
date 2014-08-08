/**
─────────────────────────────────────
 HTTP JSON API SERVER
 Exercise 13 of 13

Write an HTTP server that serves JSON data when it receives a GET request to the path '/api/parsetime'. Expect the reque
st to contain a query string with a key 'iso' and an ISO-format time as the value.

For example:

  /api/parsetime?iso=2013-08-10T12:10:15.474Z

The JSON response should contain only 'hour', 'minute' and 'second' properties. For example:

    {
      "hour": 14,
      "minute": 23,
      "second": 15
    }

Add second endpoint for the path '/api/unixtime' which accepts the same query string but returns UNIX epoch time under t
he property 'unixtime'. For example:

    { "unixtime": 1376136615474 }

Your server should listen on the port provided by the first argument to your program.
*/

var http = require('http');
var url = require('url');
var querystring = require('querystring');

var usage = "node <jsfile> <port>";

if (process.argv.length < 3) {
	console.log(usage);
	return;
}

var port = process.argv[2];

var server = http.createServer(function(req, resp) {
	var iso = "";
	var result = {};
	var date;
	var unixtime;

	//console.log(req.url);
	// relevant documentation: http://nodejs.org/api/http.html#http_message_url
	var urlparsed = url.parse(req.url, true);

	if (urlparsed.pathname) {
		// alternatively, we can use regex     if (/^\/api\/parsetime/.test(req.url))
		if (urlparsed.pathname === "/api/parsetime") {
			if (urlparsed.query && urlparsed.query.iso) {
				iso = urlparsed.query.iso;
				// iso should be in the format of 2013-08-10T12:10:15.474Z
				date = new Date(iso);

				result = {
			      	"hour": date.getHours(),
			      	"minute": date.getMinutes(),
			      	"second": date.getSeconds()
			    }

			    resp.writeHead(200, { 'Content-Type': 'application/json' });
			    resp.write(JSON.stringify(result));
			}
		} else if (urlparsed.pathname === "/api/unixtime") {
			if (urlparsed.query && urlparsed.query.iso) {
				iso = urlparsed.query.iso;
				// iso should be in the format of 2013-08-10T12:10:15.474Z
				unixtime = Date.parse(iso);

				result = {
					"unixtime": unixtime
			    }

				resp.writeHead(200, { 'Content-Type': 'application/json' });
			    resp.write(JSON.stringify(result));
			}
		}
	}
	resp.end();
});
server.listen(port);
