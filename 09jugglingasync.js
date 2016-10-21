const http = require('http');
const bl = require('bl');

var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

var flag1 = 0;
var flag2 = 0;
var flag3 = 0;

var arrayOfStrings = [];

http.get(url1, function(response) {
//	console.log(response);
	response.pipe(bl(function(err, data) {
		if(err) return console.error(err);
	}));

	response.on("end", function(data) {
//		console.log(data.toString());
		arrayOfStrings.push(data/*.toString()*/);
		flag1 = 1;
	});
	
});

http.get(url2, function(response) {
        response.pipe(bl(function(err, data) {
                if(err) return console.error(err);
        }));
	
	response.on("end", function(data) {
		arrayOfStrings.push(data/*.toString()*/);
		flag2 = 1;
        });

});

http.get(url3, function(response) {
        response.pipe(bl(function(err, data) {
                if(err) return console.error(err);
        }));

	response.on("end", function(data) {
		arrayOfStrings.push(data/*.toString()*/);
		flag3 = 1;
        });
});

while(flag1 == 1 && flag2 == 1 && flag3 == 1) {
	console.log(arrayOfStrings);
	exit();
}
