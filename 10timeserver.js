var net = require('net');
var data = "";
var server = net.createServer(function(socket){
	var date = new Date();
	data = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes();
	socket.write(data + "\n");
	socket.end();
});
server.listen(process.argv[2]); 