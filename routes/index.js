var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home - Che Kei Cheung' });
});

router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home - Che Kei Cheung' });
});

router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About - Che Kei Cheung' });
});

router.get('/products', function(req, res, next) {
  res.render('index', { title: 'Products - Che Kei Cheung' });
});

router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services - Che Kei Cheung' });
});

router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact - Che Kei Cheung' });
});

module.exports = router;
