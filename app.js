var express = require('express');
var app = express();

app.get('/', function(req,res){
	res.send('Portfolio site under construction.');
});

app.listen(process.env.port || '8000');