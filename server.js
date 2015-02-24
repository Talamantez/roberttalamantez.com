'use strict'

var express = require('express'),
    exphbs  = require('express-handlebars');
var http = require('http');
var app = express();
app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
 
app.get('/', function (req, res) {
	 res.render('home');
});

var server = http.createServer(app);
server.listen(app.get('port'), function(){
	console.log('Server running on ' + app.get('port'));
});
