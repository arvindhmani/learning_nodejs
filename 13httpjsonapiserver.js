var http = require('http')
var url = require('url')

var server = http.createServer(function(req, res) {
	//console.log(req)
	

	if(req.method == "GET") {
		res.writeHead(200, { 'Content-Type': 'application/json'})
		if(req.url.toString().startsWith("/api/parsetime")) {
			var parsedUrl = url.parse(req.url, true)
			var date = new Date(new Date(parsedUrl.query.iso).toISOString())
			var json = JSON.stringify({hour: date.getHours(), minute: date.getMinutes(), second: date.getSeconds()})
			res.end(json)
		}

		else if(req.url.toString().startsWith("/api/unixtime")) {
			var parsedUrl = url.parse(req.url, true)
			var unixTime = Date.parse(parsedUrl.query.iso)
			var json = JSON.stringify({unixtime: unixTime})
			res.end(json)
		}

	} else {
		res.writeHead(404)
		res.end()
	}
})

server.listen(Number(process.argv[2]))