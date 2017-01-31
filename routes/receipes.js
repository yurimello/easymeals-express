var express = require('express');
var router = express.Router();

var Receipe = require('../models/receipe');
var pageRange = require('../lib/page_range');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var currentPage = req.query.page || 1;

  Receipe.paginate({}, {page: currentPage, limit: 12, select: '_id name image', sort: {name: 'asc'}}, function(err, receipes) {
    if (err) throw err;

    res.render('receipes/index', {
      receipes: receipes.docs,
      page: receipes.page, pages: receipes.pages,
      pageRange: pageRange(receipes.page, receipes.pages)
    });
  });
});

router.get('/:receipeId', function(req, res, next) {
  Receipe.findById(req.params.receipeId, function(err, receipe) {
    if (err) throw err;

    res.render('receipes/show', {receipe: receipe});
  });
});

module.exports = router;
