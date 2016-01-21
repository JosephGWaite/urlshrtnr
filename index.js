// Joseph Waite 
// An attempt at a simple URL shortener

var express = require('express')
var bodyParser = require('body-parser')
var urlParser = bodyParser.urlencoded({ extended: false })
var fs = require('fs')
var app = express()
var http = require('http')

var count = 0 //global var for url things
var globalArray = []

app.use(express.static(__dirname));
app.use(urlParser);

var indexHTML = fs.readFileSync('index.html');

app.get('/shrt/:url', function(req,res) {
	//res.send('Call a url. \nwe do a database lookup, and redirect')
	
}) 

app.get('/', function(req,res){
	//paste a link to shorten it
	//or a post 
	res.send(indexHTML);
})

app.post('/', urlParser, function(req, res){
	var usrURL = req.body.inputURL;
	globalArray[count] = usrURL; 
	res.send("waite.io/shrt/" + count);
	count++;
})

app.param('url', function(req,res, next, value){
	console.log('value', value);
	res.redirect(globalArray[value]);
	next(); 
})

app.listen(3000) 
console.log('listening on port 3000');
	
function urlEncode(url){
	return "3"
}