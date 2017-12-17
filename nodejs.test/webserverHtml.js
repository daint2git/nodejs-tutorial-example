var http = require("http");
var fs = require("fs");

// 200 success, 404 error
http.createServer(function (req, res) {
    res.writeHead(200, {
        "Content-Type": "text/html"
    });
    let data = fs.readFileSync(__dirname + "/index.html", "UTF-8");
    data = data.replace("{quẩy}", "lên");
    res.end(data);
}).listen(9999);