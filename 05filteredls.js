var fs = require('fs');
var path = require('path');
var extn = '.' + process.argv[3];

fs.readdir(process.argv[2], function(err, list) {
	list.forEach(function(filename) {
		if(path.extname(filename) == extn) {
			console.log(filename);
		}
	});
});

