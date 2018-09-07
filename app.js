var express = require('express');
var app = express();

// require and connect mongodb
require('./db'); // files with same directory level

app.get('/', function(req, res){
  // create tinyurl
  res.send(uid(5));
})

app.get('/:uid', function(req, res){
  // redirect tinyurl
  res.redirect('https://google.com');
})

var uid = function(length) {
  var str = '';
  var src = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < length; i++) {
    str += src.charAt(myRandom(0, src.length - 1));
  }
  return str;
}

var myRandom = function(start, end){
  return Math.floor(Math.random() * (end - start + 1)) + start;
  // The Math.floor() function returns the largest integer less than or equal to a given number.
}

app.listen(3000, function(){
  console.log('Listening on port 3000');
})
