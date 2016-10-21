const http = require('http');
const concatStream = require('concat-stream');
const url = process.argv[2];

var getReq = http.get(url, function(response) {
	response.pipe(concatStream(function(data) {

		console.log(data.length);
		console.log(data.toString());
	}));
});
