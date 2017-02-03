var express = require('express');
var router = express.Router();

var User = require('../models/user');
var suggestgrid = require('suggestgrid');

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find({}, function(err, users) {
  if (err) throw err;

  // object of all the users
  res.send(users);
  });

});

router.post('/', function(req, res, next){
  user = new User(req.body);
  user.save(function(err, user){
    if(err){
      res.status(422);
      res.send(err);
    } else {
      res.send(user);
    }
  })
});

router.put('/:userId/bookmarks/:recipeId', function(req, res, next){
  // var actionController = suggestgrid.ActionController;
  //
  // actionController.postAction({type: "bookmark", user_id: req.params.userId, item_id: req.params.recipeId}, function (error, response) {
  //   console.log("SUGGESTGRID: " + response);
  // });

  User.findById(req.params.userId, function(err, user){

    if(err) {
      res.status(404)
      res.send({error: {message: 'Not found user'}})
    } else {
      user.bookmark(req.params.recipeId, function(success, user, recipe){
        if(success){
          res.send({
            success: success, recipe: recipe, user: user
          })
        }
        else {
          res.status(404)
          res.send({error: {message: 'Not found recipe'}})
        }
      })
    }
  })
})

router.get('/:userId', function(req, res, next){
  User.findById(req.params.userId, function(err, user){
    if(err) throw err;
    recipes = user.recipes.map(function(recipe){
      return recipe.name;
    })
    res.send(recipes);
  })
})

module.exports = router;
