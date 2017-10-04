var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', script: "javascripts/my_scripts.js" });
});

router.get('/otherr', function(req, res, next) {
  res.render('index', { title: 'Other' });
});


module.exports = router;
