//import necessary libraries and modules
var express = require('express');
var validator = require('validator');
const bodyParser = require('body-parser');

const app = express();
//create port
var port = 3000;

//import schemas
var User = require("./models/userSchema");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//import mongoose and connect to IMLab cloud server
var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://dbhavsa2:Dhyey-2000@cluster0-qpxd6.azure.mongodb.net/test?retryWrites=true&w=majority', {useMongoClient: true, useNewUrlParser: true });
//check for successful connection or throw an error
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("DB connection alive");
});
//define express router
var router = express.Router();
//base function for all routes
router.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    console.log('Something is happening');
    next();
});


router.route('/dashboard').get(function(req,res){
  //finds all games in database and sends it
  User.find({},function(err, user){
    if(err){
      res.send(err);
    } else {
      res.send(patients);
    }
  })
});


app.use('/api', router);

//start server
app.listen(port, function(){
    console.log("app listening on port "+ port +"...");
});
