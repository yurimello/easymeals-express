var express = require('express');
var router = express.Router();

var Recipe = require('../../models/recipe');

/* GET users listing. */
router.get('/', function(req, res, next) {

  Recipe.find({}, {select: '_id name image', sort: {name: 'asc'}}, function(err, recipes) {
    if (err) throw err;

    res.send(recipes)
  });
});

module.exports = router;
