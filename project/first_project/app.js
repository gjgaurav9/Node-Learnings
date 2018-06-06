// var express = require('express');
// var mongodb = require('mongodb').MongoClient;

// var app = express();
// var port = 4000;

// var commonRouter = express.Router();

// app.get('',function(req,res){
//   res.send("api is working with nodemon");
// })

// app.listen(port, function(){
//   console.log("running on port "+port);
// })



var express = require('express');
var mongodb = require('mongodb').MongoClient;

var app = express();

var port = process.env.PORT||3000; 
var commanRouter = express.Router();

commonRouter.route('/getMovies').get(function(req,res){
    	var url ='mongodb://localhost:27017';
    	mongodb.connect(url, (err, db) => {  
			  if (err) {
			    return console.log(err);
			  } 
			  var dbo = db.db('videos')
			  dbo.collection('movies').find({}).toArray(
            	function(err,data){
					if(err)
					   
					   res.status(500).send(err);
					else{
						res.setHeader('Access-Control-Allow-Origin','*')
		    		res.setHeader('Access-Control-Allow-Headers','Origin,X-Requested-With,Content-Type,Accept')
            res.json(data);
          }
		})
		})
		
});


app.use('/api', commonRouter);

app.get('/',function(req,res){
	res.send("Working")
});
app.use(express.static(__dirname + '/public'));

app.listen(port, function(){
	console.log("running");
});