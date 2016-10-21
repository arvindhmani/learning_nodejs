
var bl = require('bl');
var http = require('http');

module.exports = function(url, i, callback) {
  http.get(url, function(response) {
    response.setEncoding('utf8');
    var buffer = "";
    response.pipe(bl(function(err, data) {
      if(err) return callback(err);
      buffer += data;
      callback(null, buffer.toString(), i);
    }));
  });
}
