var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Tiny = new Schema({
  shortUrl: String,
  longUrl: String
});

mongoose.model('Tiny', Tiny);
mongoose.connect('mongodb://localhost/tiny');
