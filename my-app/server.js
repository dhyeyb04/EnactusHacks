var firebase = require('firebase-admin');
var serviceAccount = require('./public/serviceKey.json');
var bodyParser = require('body-parser')
var count = 1;
var currentName = null;
const express = require('express')
const app = express()
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

var fs = require('fs');
const port = 3000

app.use(express.static(__dirname + '/public'));

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: 'https://pill-dispenser-5000.firebaseio.com'
});

var db = firebase.database();
var ref = db.ref("pills");
ref.on('value', gotData, errData);

function gotData(data){
	console.log(data.val());
}

function errData(err){
  console.log("Error");
  console.log(err);
}

app.get('/', (request, response) => {
	response.writeHead(200,{'Content-Type': 'text/HTML'});
	fs.readFile('./index.html', null, function(error,data){
		if (error) {
			response.writeHead(404);
			response.write("File not found");
		} else {
			response.write(data);
		}
		response.end();
	});
})

app.get('/dashboard.html', (request, response) => {
	response.writeHead(200,{'Content-Type': 'text/HTML'});
	fs.readFile('./dashboard.html', null, function(error,data){
		if (error) {
			response.writeHead(404);
			response.write("File not found");
		} else {
			response.write(data);
		}
		response.end();
	});
})

app.get('/index.html', (request, response) => {
	response.writeHead(200,{'Content-Type': 'text/HTML'});
	fs.readFile('./index.html', null, function(error,data){
		if (error) {
			response.writeHead(404);
			response.write("File not found");
		} else {
			response.write(data);
		}
		response.end();
	});
})
