var express = require('express');
var router = express.Router();

var Session = require('../lib/session');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('sessions/new');
})

router.post('/', function(req, res, next) {

  Session.authenticate(req.body.email, req.body.password, function(authentication){
    if(authentication.success){
      req.session.userId = authentication.user._id;
      res.redirect('../receipes/')
    }
    else {
      res.render('sessions/new');
    }
  })
})

router.get('/logout', function(req, res, next) {
  req.session.destroy(function(err) {
    if(err) throw err;

    res.redirect('/sessions');
  })
});

module.exports = router;
