var mongoose = require('mongoose');
var Receipe = require('./receipe');
var Schema = mongoose.Schema;

var userSchema = Schema({
    name: String,
    email: String,
    encryptedPassword: String,
    passwordSalt: String,
    receipes: [Receipe.schema]
});

var User = mongoose.model('User', userSchema);

module.exports = User;
