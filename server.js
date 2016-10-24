var express = require("express")
var app = express();
var mongo = require("mongodb").MongoClient
var url = process.env.MONGOLAB_URI //'mongodb://localhost:27017/microservice'
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
      "Short URL": req.headers.host + '/' + shortid.generate()
  }
  collection.insert(newURL,function(err,data){
      
        if(err) throw err
        responseData = JSON.stringify(newURL)
        res.end(responseData)
        db.close()
        
        })
         
    })
 
})

app.get('/*', function (req, res){
  var shorty = req.headers.host + req.url
  // res.send(shorty)
  mongo.connect(url,function(err,db){
    if(err) throw (err);
    var collection = db.collection('shortner')
    collection.findOne({"Short URL": shorty}, function(err, doc) {
    if(err) throw (err);
    // Checking if doc is not null
    if(doc != null){
    var data = doc['Original URL']
    res.redirect(data);
    }
    else
      {
      res.send("Record not found");
        }
    })
    
    db.close()
    })
  
 })


app.listen(port, function () {
  console.log('The app listening on port ' + port +  '!');
});