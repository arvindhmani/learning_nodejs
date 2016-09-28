var fs = require('fs');

function read() {
	fs.readFile(process.argv[2], function afterRead(err, file) {
		var str = file.toString();
		var res = str.split("\n");
		console.log(res.length - 1);
	 });
}

read();
