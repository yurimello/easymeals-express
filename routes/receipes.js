var express = require('express');
var router = express.Router();

var receipesController = require('../controllers/receipes_controller');

/* GET users listing. */
router.get('/', function(req, res, next) {
  receipesController.index(req, res, next, null);
});

router.get('/:receipeId', function(req, res, next) {
  receipesController.show(req, res, next, null);
});

module.exports = router;
