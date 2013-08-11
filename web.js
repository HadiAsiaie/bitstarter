var express = require('express');
var fs=require('fs');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var res=fs.readFileSync('index.html');
  res=res.toString('utf8');
  response.send(res);
});
app.use(express.static(__dirname + '/statics'));

 
var port = process.env.PORT || 5000;
port=8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});