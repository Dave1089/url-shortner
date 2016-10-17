// var express = require('express');
// var app = express();
var port = process.env.PORT || 8080;
// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

// app.listen(port, function () {
//   console.log('Example app listening on port ' + port);
// });

var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  var os = req.headers["user-agent"].split('(');
  var lang = req.headers["accept-language"].substr(0,req.headers["accept-language"].indexOf(","))
  res.end(JSON.stringify({"OS": os[1].split(')')[0] , "language" :  lang, "ip" : req.headers["x-forwarded-for"]}));
  // res.end(JSON.stringify(req.headers));
  
}).listen(port);