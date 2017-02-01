var mongoose = require('mongoose');
var Receipe = require('./receipe');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');


var suggestgrid = require('../lib/suggestgrid');

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

userSchema.methods.bookmark = function(receipeId, callback) {
  user = this;
  Receipe.findById(receipeId, function(err, receipe){
    if(err) throw err;

    receipe.userIds.push(user._id);
    receipe.receipeId = receipe._id;
    receipe.bookmarkCount = parseInt(receipe.bookmarkCount) + 1;

    receipe.save(function(err, receipe){
      if(err) throw err;
      user.receipes.push(receipe);
      user.save(function(err, user){
        if(err) throw err;

        callback(true, user, receipe);
      })
    })
  })
}

userSchema.methods.forSuggest = function(){
  return {id: this._id, email: this.email};
}

userSchema.statics.saveSuggestItems = function(callback){
  this.find({}, function(err, users){
    users = users.map(function(user){
      return user.forSuggest();
    })

    var metadataController = suggestgrid.MetadataController;
    metadataController.postBulkUsers(users, function(error, response) {
      callback(error, response);
    });
  })
}

var User = mongoose.model('User', userSchema);


module.exports = User;
