var Receipe = require('../models/receipe');
var pageRange = require('../lib/page_range');

const ReceipesController = {
  index: function(req, res, next, isApi) {
    var currentPage = req.query.page || 1;

    Receipe.paginate({}, {page: currentPage, limit: 12, select: '_id name image', sort: {name: 'asc'}}, function(err, receipes) {
      if (err) throw err;

      if(isApi){
        res.send(receipes);
      }
      else {
        res.render('receipes/index', {
          receipes: receipes.docs,
          page: receipes.page, pages: receipes.pages,
          pageRange: pageRange(receipes.page, receipes.pages)
        });
      }
    });
  }
}

module.exports = ReceipesController;
