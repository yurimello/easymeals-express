var express = require('express');
var router = express.Router();

var User = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
})

router.post('/', function(req, res, next) {
  u = new User({
    email: req.params.email,
    password: req.params.password
  });

  u.save(function(err, user){
    if(err) throw err

    res.send(user);
  })

})
