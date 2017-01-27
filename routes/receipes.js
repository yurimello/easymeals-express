var express = require('express');
var router = express.Router();

var receipesController = require('../controllers/receipes_controller');

/* GET users listing. */
router.get('/', function(req, res, next) {
  receipesController.index(req, res, next, null);
});

router.get('/:receipeId', function(req, res, next) {
  Receipe.findById(req.params.receipeId, function(err, receipe) {
  if (err) throw err;

  // object of all the users
  res.send(receipe);
  });

});

module.exports = router;
