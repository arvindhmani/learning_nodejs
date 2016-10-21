var mymodule = require('./09module.js');
//var arrStr = [];

//console.log(process.argv[2], process.argv[3], process.argv[4]);

for(var i = 2; i < process.argv.length; i ++) {
	(function(i) {
		mymodule(process.argv[i], function(err, str, array) {
			if(err) console.log(err);

			if(array.length == 2) {
				display(array);
			}
		});
	})(i);

/*	mymodule(process.argv[i], function(err, str, array) {
	if(err) console.log(err);
*/
/*array.forEach(function(string) {
	console.log(string);
});*/
//	str+="...";
//	arrStr.push(str);	
	//console.log("in callback", str);

/*	if(array.length == 2) {
//		console.log("in if");
		display(array);
	}
});*/
}

function display(arrStr) {
arrStr.forEach(function(res) {
		console.log(res);
});
}

