const express = require('express');
var app = express();

let server = app.listen(3333, function() {
  let host = server.address().address;
  let port = server.address().port;
  console.log("Ung dung Node.js dang lang nghe tai dia chi: http://%s:%s", host, port);
});

var wiki = require('./wiki.js');
app.use('/', wiki);