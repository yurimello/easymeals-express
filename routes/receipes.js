var express = require('express');
var router = express.Router();

var Receipe = require('../models/receipe');
var pageRange = require('../lib/page_range');
var suggestgrid = require('suggestgrid');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var currentPage = req.query.page || 1;

  Receipe.paginate({}, {page: currentPage, limit: 12, select: '_id name image', sort: {bookmarkCount: 'desc'}}, function(err, receipes) {
    if (err) throw err;

    res.render('receipes/index', {
      receipes: receipes.docs,
      page: receipes.page, pages: receipes.pages,
      pageRange: pageRange(receipes.page, receipes.pages),
      userId: req.session.userId
    });
  });
});

router.get('/:receipeId', function(req, res, next) {
  var actionController = suggestgrid.ActionController;

  actionController.postAction({type: "view", user_id: req.session.userId, item_id: req.params.receipeId}, function (error, response) {
    console.log(response);
  });

  Receipe.findById(req.params.receipeId, function(err, receipe) {
    if (err) throw err;

    receipe.related(function(err, relatedReceipes){
      if (err) throw err;

      res.render('receipes/show', {
        receipe: receipe, userId: req.session.userId,
        relatedReceipes: relatedReceipes
      });
    })

  });
});

module.exports = router;
