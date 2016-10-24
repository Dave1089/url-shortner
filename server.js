var express = require("express")
var app = express();
var mongo = require("mongodb").MongoClient
var url = 'mongodb://localhost:27017/microservice'
var shortid = require('shortid');
var port = process.env.PORT || 8080;
// var port = 8080;
app.use(express.static(__dirname + '/public'))

var responseData = ''
app.get('/new/*', function (req, res){
  var param = req.params[0]
  
  mongo.connect(url,function(err,db){
    if(err) throw err;
  var collection = db.collection('shortner')
  var newURL = {
      "Original URL": param,
      "Short URL": "http://short.y/" + shortid.generate()
  }
  collection.insert(newURL,function(err,data){
      
        if(err) throw err
        responseData = JSON.stringify(newURL)
        db.close()
        res.send(responseData)
        })
    })
    //  responseData = JSON.stringify({"Original URL": param,"Short URL": "http://short.y/" + shortid.generate() })
    

})

app.listen(port, function () {
  console.log('The app listening on port ' + port +  '!');
});