var express = require('express');
var router = express.Router();

let businesscontactController = require("../controllers/businesscontact");

// middleware to check login 
function reqAuth(req, res, next) 
{
    // check user logged
    if (!req.isAuthenticated()) {
      return res.redirect("/login");
    }
    next();
}

/* GET Business contact listing page. */
router.get('/', reqAuth , businesscontactController.listing);

router.get('/add', reqAuth , businesscontactController.addnew);

router.post('/add', reqAuth , businesscontactController.addnewaction);

router.get('/edit/:id', reqAuth , businesscontactController.editform);

router.post('/edit/:id', reqAuth , businesscontactController.editformaction);

router.get("/delete/:id", reqAuth, businesscontactController.deletepage);

module.exports = router;
