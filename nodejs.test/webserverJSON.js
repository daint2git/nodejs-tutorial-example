var http = require("http");
var fs = require("fs");

http.createServer(function (req, res) {
    res.writeHead(200, {
        "Content-Type": "application/json"
    });

    let obj = {
        name: "nguyen tran dai",
        age: 1993
    };

    res.end(JSON.stringify(obj));
}).listen(7777);