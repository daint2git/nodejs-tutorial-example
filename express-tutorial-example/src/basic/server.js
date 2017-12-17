const express = require('express');
const app = express();
let server = app.listen(3333, function() {
  let host = server.address().address;
  let port = server.address().port;
  console.log("Ung dung Node.js dang lang nghe tai dia chi: http://%s:%s", host, port);
});

app.use(express.static('public'));

// Phuong thuc get() phan hoi mot GET Request ve Homepage
app.get('/', function(req, res) {
  console.log("Nhan mot GET Request ve Homepage");
  res.send('Hello GET');
})

// Phuong thuc post() phan hoi mot POST Request ve Homepage
app.post('/', function(req, res) {
  console.log("Nhan mot POST Request ve Homepage");
  res.send('Hello POST');
})

// Phuong thuc delete() phan hoi mot DELETE Request ve /del_user page.
app.delete('/del_user', function(req, res) {
  console.log("Nhan mot DELETE Request ve /del_user");
  res.send('Hello DELETE');
})

// Phuong thuc nay phan hoi mot GET Request ve /list_user page.
app.get('/list_user', function(req, res) {
  console.log("Nhan mot GET Request ve /list_user");
  res.send('Page Listing');
})

// Phuong thuc nay phan hoi mot GET Request ve abcd, abxcd, ab123cd, ...
app.get('/ab*cd', function(req, res) {
  console.log("Nhan mot GET request ve /ab*cd");
  res.send('Page Pattern Match');
})

app.get('/index.html', function(req, res) {
  res.sendFile(__dirname, '/index.html');
})

app.get('/process_get', function(req, res) {
  // Chuan bi output trong dinh dang JSON
  let response = {
    first_name: req.query.first_name,
    last_name: req.query.last_name
  };
  console.log(response);
  res.send(JSON.stringify(response));
})

const bodyParser = require('body-parser');
// Tao mot parser co dang application/x-www-form-urlencoded
let urlencodedParser = bodyParser.urlencoded({
  extended: false
})

app.use(urlencodedParser);
app.post('/process_get', function(req, res) {
  // Chuan bi output trong dinh dang JSON
  let response = {
    first_name: req.body.first_name,
    last_name: req.body.last_name
  };
  console.log(response);
  res.send(JSON.stringify(response));
})

//cokkies
var cookieParser = require('cookie-parser')
app.use(cookieParser())

app.get('/aaa', function(req, res) {
  console.log("Cookies: ", req.cookies)
})