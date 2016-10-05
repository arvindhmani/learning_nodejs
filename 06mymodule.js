var path = require('path');
var fs = require('fs');

module.exports = function(pathname, extension, callback) {
	fs.readdir(pathname, function(err1, files) {
		if(err1)
			return callback(err1);

		files = files.filter(function(file) {
			return path.extname(file) === '.' + extension;
		});

		callback(null, files);
	});
}
