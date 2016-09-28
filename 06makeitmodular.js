var mymodule = require('./06mymodule');
var path = process.argv[2];
var extn = process.argv[3];

var filesFiltered = mymodule(path, extn);
console.log(filesFiltered);