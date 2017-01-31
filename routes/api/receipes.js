var express = require('express');
var router = express.Router();

var Receipe = require('../../models/receipe');

/* GET users listing. */
router.get('/', function(req, res, next) {

  Receipe.find({}, {select: '_id name image', sort: {name: 'asc'}}, function(err, receipes) {
    if (err) throw err;

    res.send(receipes)
  });
});

module.exports = router;
