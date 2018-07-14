 var http = require('http');
 var url = 'http://localhost:8000';
 http.get(url, function(response) {
   response.on('data', function(d) {
     console.log(d.toString());
   });
 });