var mymodule = require('./module.js');

var results = [];
var counter = 0;
for(var i = 2; i < process.argv.length; i++) {
    mymodule(process.argv[i], i-2, function(err, str, index) {
      if(err) console.log(err);
      results[index] = str;
      counter++;
      if(counter == 3) {
        display(results);
      }
    });
}
function display(results) {
  results.forEach(function(res) {
    console.log(res);
  })
}