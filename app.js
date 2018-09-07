var express = require('express');
var path = require('path');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// require and connect mongodb
require('./db'); // files with same directory level

var mongoose = require('mongoose');
var Tiny = mongoose.model('Tiny');

app.get('/', function(req, res){
  // get index page
  res.render('index');
})

app.post('/', function(req, res){
  // create tinyurl and persistent storage
  var uid = getUid(5);
  var shortUrl = "http://localhost:3000/" + uid;
  new Tiny({
    longUrl: req.body.longUrl,
    shortUrl: shortUrl
  }).save(function(){
    res.send(shortUrl);
  });
  res.send(uid);
})

app.get('/:uid', function(req, res){
  // redirect tinyurl
  res.redirect('https://google.com');
})

var getUid = function(length) {
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
