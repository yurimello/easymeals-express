var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/easymeals-express_development');
var fs = require('fs');

var Recipe = require('./models/recipe');
var User = require('./models/user');

module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
  });

  grunt.task.registerTask('recipes:drop', 'drop recipes', function(){
    var done = this.async();

    Recipe.remove({}, function(){
      User.find({}, function(err, users){
        users.forEach(function(user){
          user.recipes = [];
          user.save(function(err, u){
            done();
          })
        })
      })
    })
  })

  grunt.task.registerTask('recipes:import', 'Import recipes from json file', function(){
    var done = this.async();

    var recipes = JSON.parse(fs.readFileSync('./recipes.json', 'utf8'));

    Recipe.create(recipes, function(err, recipe){
      console.log(err)
      if (err) throw err;

      done();
    })

  });

  grunt.task.registerTask('recipes:suggest', 'Export recipes for suggestgrid', function(){
    var done = this.async();
    Recipe.saveSuggestItems(function(error, response){
      console.log(error)
      console.log(response);
      done();
    })
  })

  grunt.task.registerTask('users:suggest', 'Export users for suggestgrid', function(){
    var done = this.async();
    User.saveSuggestItems(function(error, response){
      console.log(error)
      console.log(response);
      done();
    })
  })
}
