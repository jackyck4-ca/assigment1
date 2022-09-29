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
  res.render('about', { title: 'About - Che Kei Cheung' });
});

router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects - Che Kei Cheung' });
});

router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services - Che Kei Cheung' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact - Che Kei Cheung' });
});

router.post('/contact', function(req, res, next) {
  
});

module.exports = router;
