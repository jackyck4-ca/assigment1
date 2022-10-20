var express = require('express');
var router = express.Router();
let mongoose = require("mongoose");
let passport = require("passport");

//user model
let userModel = require("../models/user");
let User = userModel.User; 

/* Home page. */
module.exports.homepage = function(req, res, next) {
    res.render('index', { title: 'Home - Che Kei Cheung' , sectionpicked : 'Home' });
};

/* GET about page. */
module.exports.aboutpage = function(req, res, next) {
  res.render('about', { title: 'About - Che Kei Cheung' , sectionpicked : 'About' });
};

/* GET projects page. */
module.exports.projectpage = function(req, res, next) {
  res.render('projects', { title: 'Projects - Che Kei Cheung', sectionpicked : 'Projects'  });
};

/* GET services page. */
module.exports.servicespage = function(req, res, next) {
  res.render('services', { title: 'Services - Che Kei Cheung', sectionpicked : 'Services'  });
};

/* GET contact page. */
module.exports.contactpage = function(req, res, next) {
  res.render('contactus', { title: 'Contact - Che Kei Cheung', sectionpicked : 'Contact'  });
};

/* Post contact form information */
module.exports.submitcontact = function(req, res, next) {
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
};

/* GET login page. */
module.exports.loginpage = function(req, res, next) {
  res.render('login', { title: 'Login - Che Kei Cheung', sectionpicked : 'Login'  });
};


/* post login submit. */
module.exports.loginsubmit = function(req, res, next) {
  
  res.setHeader('Content-Type', 'application/json');

  passport.authenticate("local", function (err, user, info) {
  
    if (err) {
      res.end(JSON.stringify({ status : 3 })); 
    }
    else {
      
      if (!user) {
        res.end(JSON.stringify({ status : 2 })); 
      }
      else {

        req.login(user, (err) => {
          // server error?
          if (err) {
            res.end(JSON.stringify({ status : 3 }));
          }
          res.end(JSON.stringify({ status : 1 })); 
        });
        
      }
    }
  })(req, res);

};

module.exports.logoutaction = (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
};