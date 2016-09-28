var fs = require('fs');
var file = fs.readFileSync(process.argv[2]);
var str = file.toString();
var res = str.split("\n");
//console.log(res);
console.log(res.length - 1);
