
var bl = require('bl');
var http = require('http');
var arrStr = [];

module.exports = function(url, index, callback) {
	http.get(url, function(response) {
		response.setEncoding('utf8');
		response.pipe(bl(function(err, data) {
            if(err) return callback(err);
			callback(null, index, data.toString());
       	}));
	});
}

