const express = require('express');
var app = express()

let server = app.listen(3333, function() {
  let host = server.address().address;
  let port = server.address().port;
  console.log("Ung dung Node.js dang lang nghe tai dia chi: http://%s:%s", host, port);
});

app.use(function(req, res, next) {
  console.log('Time:', Date.now())
  next()
})

app.get('/user/:id', function (req, res, next) {
  console.log('ID:', req.params.id)
  next()
}, function (req, res, next) {
  res.send('User Info')
})

// handler for the /user/:id path, which prints the user ID
app.get('/user/:id', function (req, res, next) {
  res.end(req.params.id)
}) 