var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/easymeals-express_development');
var fs = require('fs');

var Receipe = require('./models/receipe');
var User = require('./models/user');

module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
  });

  grunt.task.registerTask('receipes:drop', 'drop receipes', function(){
    var done = this.async();

    Receipe.remove({}, function(){
      User.find({}, function(err, users){
        users.forEach(function(user){
          user.receipes = [];
          user.save(function(err, u){
            done();
          })
        })
      })
    })
  })

  grunt.task.registerTask('receipes:import', 'Import receipes from json file', function(){
    var done = this.async();

    var receipes = JSON.parse(fs.readFileSync('./receipes.json', 'utf8'));

    Receipe.create(receipes, function(err, receipe){
      console.log(err)
      if (err) throw err;

      done();
    })

  });

  grunt.task.registerTask('receipes:suggest', 'Export receipes for suggestgrid', function(){
    var done = this.async();
    Receipe.saveSuggestItems(function(error, response){
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
