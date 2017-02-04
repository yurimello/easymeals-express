var express = require('express');
var router = express.Router();

var Session = require('../models/session');
var User = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('sessions/new');
})

router.post('/', function(req, res, next) {

  Session.authenticate(req.body.email, req.body.password, function(authentication){
    if(authentication.success){
      res.send(authentication);
    }
    else {
      res.setHeader('WWW-Authenticate', 'Basic realm="need login"');
      res.status(401);
      res.send(authentication);
    }
  })

})

router.get('/:sessionId', function(req, res, next){
  Session.findById(req.params.sessionId, function(err, session){
    if(err){
      res.status(403);
      res.send(err);
    } else {
      User.findById(session.userId, function(err, user){
        res.send({
          user: {email: user.email, name: user.name},
          session: session
        })
      })
    }
  })
})

router.delete('/:sessionId', function(req, res, next) {
  Session.remove({_id: req.params.sessionId}, function(err){
    if(err){
      res.status(403);
      res.send(err);
    } else {
      res.send({message: 'successful logout'})
    }
  })
});

module.exports = router;
