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

router.put('/:userId/bookmarks/:receipeId', function(req, res, next){
  var actionController = suggestgrid.ActionController;

  actionController.postAction({type: "bookmark", user_id: req.params.userId, item_id: req.params.receipeId}, function (error, response) {
    console.log(response);
  });

  User.findById(req.params.userId, function(err, user){

    if(err) {
      res.status(404)
      res.send({error: {message: 'Not found user'}})
    } else {
      user.bookmark(req.params.receipeId, function(success, user, receipe){
        if(success){
          res.send({
            success: success, receipe: receipe, user: user
          })
        }
        else {
          res.status(404)
          res.send({error: {message: 'Not found receipe'}})
        }
      })
    }
  })
})

router.get('/:userId', function(req, res, next){
  User.findById(req.params.userId, function(err, user){
    if(err) throw err;
    receipes = user.receipes.map(function(receipe){
      return receipe.name;
    })
    res.send(receipes);
  })
})

module.exports = router;
