var mymodule = require('./09module.js');

var results = [];
var counter = 0;
for(var i = 2; i < process.argv.length; i ++) {
		mymodule(process.argv[i], i, function(err, index, str) {
			if(err) console.log(err);
			counter++;
			results[index] = str;
			if(counter === 3) {
				display(results);
			}
		});
}

function display(results) {
	results.forEach(function(res) {
		console.log(res);
	});
}
