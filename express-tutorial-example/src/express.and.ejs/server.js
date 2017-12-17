var express = require("express");
var app = express();

var server = require("http").createServer(app);

server.listen(1234);

app.get("/", function (req, res) {
    //res.send("<h1 style=\"color:\"red\"\">hello daint2 11111</h1>");
    res.sendFile(__dirname + "/index.html");
});

app.get("/about", function (req, res) {
    res.send("<h1 style='color: blue'>Get About</h1>");
});

// su dung body-parser de lay value 
app.post("/about", function (req, res) {
    res.send("<h1 style='color: green'>Post About</h1>");
});

// get parameters
app.get("/tinhtong/:so1/:so2", function (req, res) {
    let so1 = parseInt(req.params.so1);
    let so2 = parseInt(req.params.so2);
    let tong = so1 + so2;
    res.send(`<h1 style="color: red">tinhtong: ${tong}</h1>`);
});

// setting EJS
app.set("view engine", "ejs");
app.set("views", "./view");

app.get("/viewengine", function (req, res) {
    res.render("index")
});