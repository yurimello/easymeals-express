var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/easymeals-express_development');
var fs = require('fs');

var Receipe = require('./models/receipe');

module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
  });

  grunt.task.registerTask('receipes:drop', 'drop receipes', function(){
    var done = this.async();

    Receipe.remove({}, function(){
      done();
    })
  })

  grunt.task.registerTask('receipes:import', 'Import receipes from json file', function(){
    var done = this.async();

    var receipes = JSON.parse(fs.readFileSync('./receipes.json', 'utf8'));

    Receipe.create(receipes, function(err, receipe){
      if (err) throw err;

      done();
    })
    
  });
}
