var fs = require('fs');
var path = require('path');

module.exports = function(dir, extn, callback) {
	fs.readdir(dir, function(err, files) {
		if(err) return callback(err);
		else {
			files = files.filter(function(filename) {
				return path.extname(filename) === '.' + extn;
			});
		}

		callback(null, files);
	});	
}

