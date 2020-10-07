var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("meli");
});

router.get('/registro', function(req, res, next) {
  res.render("registro");
});

router.get('/ingreso', function(req, res, next) {
  res.render("ingreso");
});


module.exports = router;
