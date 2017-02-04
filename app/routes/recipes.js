var express = require('express');
var router = express.Router();

var Recipe = require('../models/recipe');
var pageRange = require('../lib/page_range');
var suggestgrid = require('suggestgrid');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var currentPage = req.query.page || 1;

  Recipe.paginate({}, {page: currentPage, limit: 12, select: '_id name image', sort: {bookmarkCount: 'desc'}}, function(err, recipes) {
    if (err) throw err;

    res.send({
      recipes: recipes.docs,
      pagination: {
        page: recipes.page,
        pages: recipes.pages,
        pageRange: pageRange(recipes.page, recipes.pages)
      }
    });
  });
});

router.get('/:recipeId', function(req, res, next) {
  // var actionController = suggestgrid.ActionController;
  //
  // actionController.postAction({type: "view", user_id: req.session.userId, item_id: req.params.recipeId}, function (error, response) {
  //   console.log(response);
  // });

  Recipe.findById(req.params.recipeId, function(err, recipe) {
    if (err) throw err;

    recipe.related(function(err, relatedRecipes){
      if (err) throw err;

      res.render('recipes/show', {
        recipe: recipe, userId: req.session.userId,
        relatedRecipes: relatedRecipes
      });
    })

  });
});

router.post('/', function(req, res, next){
  recipe = new Recipe(req.body)
  recipe.save(function(err, recipe){
    if(err) {
      res.status(422);
      res.send(err);
    } else {
      res.send(recipe)
    }
  })
})

router.put('/:recipeId', function(req, res, next){

  Recipe.findById(req.params.recipeId, function(err, recipe){
    if(err) res.send(err);

    Object.assign(recipe, req.body).save((err, recipe) => {
      if(err) res.send(err);
      res.json(recipe);
    });
  })
})

module.exports = router;
