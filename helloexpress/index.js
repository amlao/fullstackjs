var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Hello World');
});

var server = app.listen(3000, function() {
  console.log('Server is listening on port ' + server.address().port);
});
