var express = require("express")
var app = express();
var shortid = require('shortid');
var port = process.env.PORT || 8080;
app.use(express.static(__dirname + '/public'))
// app.get('/:path', function (req, res) {
//   var param = req.params.path
//   if(isNaN(param)){
//     var check = Date.parse(param);
//     if(isNaN(check)){
//       natural = null
//       unix = null 
//     }
//     else{
//     unix = new Date(param).getTime()/1000
//     natural = param
//     }
//   }
//   else {
//     unix = Number(param)
//     var change = new Date(param*1000)
//     var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
//     var y = change.getFullYear();
//     var m = months[change.getMonth()]
//     var d = change.getDate()
//     natural = m + " " + d + "," + " " + y
//   }
//   var data = JSON.stringify({"unix" : unix , "natural" : natural})
//   res.send(data);
// });

app.listen(port, function () {
  console.log('The app listening on port 8080!');
});