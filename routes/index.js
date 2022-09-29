var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home - Che Kei Cheung' , sectionpicked : 'Home' });
});

router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home - Che Kei Cheung', sectionpicked : 'Home'  });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About - Che Kei Cheung' , sectionpicked : 'About' });
});

router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects - Che Kei Cheung', sectionpicked : 'Projects'  });
});

router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services - Che Kei Cheung', sectionpicked : 'Services'  });
});

router.get('/contact', function(req, res, next) {
  res.render('contactus', { title: 'Contact - Che Kei Cheung', sectionpicked : 'Contact'  });
});

router.post('/contact', function(req, res, next) {
  let name = req.body.name;
  let email = req.body.email;
  let mobile = req.body.mobile;
  let message = req.body.message;

  //check to avoid empty entry
  if (name != "" && email != "" && mobile != "" && message != "" )
  {
    console.log(name+" "+email+" "+mobile+" "+message);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ status : 1 }));
  }
  else
    res.end(JSON.stringify({ status : 0 }));
});

module.exports = router;
