var express = require('express');
var router = express.Router();

var User = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find({}, function(err, users) {
  if (err) throw err;

  // object of all the users
  res.send(users);
  });

});

router.get('/:userId/bookmarks/:receipeId', function(req, res, next){
  User.findById(req.params.userId, function(err, user){
    user.bookmark(req.params.receipeId, function(success, user, receipe){
      if(success){
        res.send({
          success: success, receipe: receipe, user: user
        })
      }
    })
  })
})

module.exports = router;
