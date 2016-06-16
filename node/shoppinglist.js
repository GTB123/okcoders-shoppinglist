// Main JS File of our app

var express = require('express');	//Import express module 

var app = express();				// Create our app object that holds our routes 

app.listen(3000, function(err){		//Start listening on port 3000
	console.log('shopplist listening on http://localhost:3000');
});

app.use('/', express.static('./app'));	// Serve our static HTML Files

app.get('/list', function(req,res) {
	res.json(["Cat Food","Dog Food","Monkey Food"]);
});

app.get('/users', function(req,res){
	res.json(["Jon", "Grant", "Tom"])
});

