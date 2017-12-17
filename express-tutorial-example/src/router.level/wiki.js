// Note: Router functions are Express middleware,
// which means that they must either complete (respond to)
// the request or call the next function in the chain.
// In the case above we complete the request using send(),
// so the next argument is not used (and we choose not to specify it).

// wiki.js - Wiki route module

var express = require('express');
const fs = require('fs');
var router = express.Router();

// Home page route
router.get('/', function(req, res) {
  res.send('Wiki home page');
})

// About page route
router.get('/about', function(req, res) {
  res.send('About this wiki');
})

// Intro page route
router.get('/intro', function(req, res) {
  res.send('Intro this wiki');
})

router.use('/list', function(req, res) {
  let data = fs.readFileSync(__dirname + '/data.txt', 'utf-8');
  console.log(data);
  res.send(data);
})

router.get('/data', function(req, res) {
  //res.send('Wiki home page');
  res.redirect('/list');
})

module.exports = router;