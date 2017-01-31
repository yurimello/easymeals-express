var mongoose = require('mongoose');
var Receipe = require('./receipe');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');


var userSchema = Schema({
    name: String,
    email: String,
    encryptedPassword: String,
    passwordSalt: String,
    receipes: [Receipe.schema]
});

userSchema.virtual('password').set(function(value){
  this._password = value;
  this.passwordSalt = bcrypt.genSaltSync(12);
  this.encryptedPassword = bcrypt.hashSync(this._password, this.passwordSalt);
});

var User = mongoose.model('User', userSchema);


module.exports = User;
