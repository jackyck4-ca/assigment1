var express = require('express');
var router = express.Router();

let indexController = require("../controllers/index");

/* GET home page. */
router.get('/', indexController.homepage);

/* GET home page. */
router.get('/home', indexController.homepage);

/* GET about page. */
router.get('/about', indexController.aboutpage);

/* GET projects page. */
router.get('/projects', indexController.projectpage);

/* GET services page. */
router.get('/services', indexController.servicespage);

/* GET contact page. */
router.get('/contact', indexController.contactpage);

/* Post contact form information */
router.post('/contact', indexController.submitcontact);

/* GET login page. */
router.get('/login', indexController.loginpage);

/* Post login action. */
router.post('/login', indexController.loginsubmit);

module.exports = router;
