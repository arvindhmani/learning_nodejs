var mymodule = require('./06mymodule');
var path = process.argv[2];
var extn = process.argv[3];

var filesFiltered = mymodule(path, extn, displayFiles);

function displayFiles(err, filesFiltered) {
	if(err) 
		console.log(err);
	else
		console.log(filesFiltered.join("\r\n"));

}
