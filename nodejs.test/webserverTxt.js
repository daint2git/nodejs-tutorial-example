var http = require("http");

// 200 success, 404 error
http.createServer(function (req, res) {
	res.writeHead(200, {
		"Content-Type": "text/plain"
	});
	res.end("daint2.fsoft.com.vn");
}).listen(9999);