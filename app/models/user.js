var mongoose = require('mongoose');
var Recipe = require('./recipe');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');


var suggestgrid = require('../lib/suggestgrid');

var userSchema = Schema({
    name: String,
    email: {type: String, required: true},
    encryptedPassword: String,
    passwordSalt: String,
    recipes: [Recipe.schema]
});

userSchema.virtual('password').set(function(value){
  this._password = value;
  this.passwordSalt = bcrypt.genSaltSync(12);
  this.encryptedPassword = bcrypt.hashSync(this._password, this.passwordSalt);
});

userSchema.methods.bookmark = function(recipeId, callback) {
  user = this;
  Recipe.findById(recipeId, function(err, recipe){
    if(err) return callback(false, user, recipe)

    recipe.userIds.push(user._id);
    recipe.recipeId = recipe._id;
    bookmarkCount = recipe.bookmarkCount || 0
    recipe.bookmarkCount = parseInt(bookmarkCount) + 1;

    recipe.save(function(err, recipe){
      if(err) throw err;
      user.recipes.push(recipe);
      user.save(function(err, user){
        if(err) throw err;

        callback(true, user, recipe);
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
