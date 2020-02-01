//import required libraries and modules
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//define new schema
var userSchema = new Schema({
    _id: mongoose.Types.ObjectId,
    firstName: String,
    lastName: String,
    severity: Int32,
    reason: String
});

//create new model user and export for specified database
var collectionName = 'usersDatabase';

const User = mongoose.model('userModel', userSchema, collectionName);

module.exports = User;
