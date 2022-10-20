var express = require('express');
var router = express.Router();
let mongoose = require("mongoose");
let passport = require("passport");

//user model
let userModel = require("../models/user");
let bcontactModel = require("../models/businesscontact");
let User = userModel.User; 


/* Listing page. */
module.exports.listing = function(req, res, next) {

    bcontactModel.find().sort({name:1}).then( ( contactlist ) => {

        
            
        res.render('contact/list', { 
            title: 'Business contact - Che Kei Cheung' , 
            contactlist : contactlist,
            sectionpicked : 'bcontact',
            logged : req.user ? 1 : 0
        });
    });
        
};

/* Update / insert form page. */
module.exports.addnew = function(req, res, next) {

    res.render('contact/entry', { 
        title: 'Business contact - Che Kei Cheung' , 
        sectionpicked : 'bcontact',
        logged : req.user ? 1 : 0
    });
};

module.exports.addnewaction = function(req, res, next) {

    let contactitem = bcontactModel({
        name : req.body.name,
        contact_number : req.body.contact,
        email : req.body.email,
    })

    bcontactModel.create(contactitem , (err , contact) => {

        if (err)
        {
            res.end(err)
        }
        else
        {
            res.redirect("/businesscontact");
        }
    });
};

module.exports.editform = function(req, res, next) {
    
    let id = req.params.id;
    let contactitem = bcontactModel.findOne({ _id: id }).then( ( item) => {
        
        console.log(item)
        res.render('contact/entryedit.ejs', { 
            title: 'Business contact - Che Kei Cheung' , 
            sectionpicked : 'bcontact',
            item : item,
            logged : req.user ? 1 : 0
        });
        
    });

    
};

module.exports.editformaction = function(req, res, next) {

    let id = req.params.id;
    let contactitem = bcontactModel({
        _id: id,
        name : req.body.name,
        contact_number : req.body.contact,
        email : req.body.email,
    })

    bcontactModel.updateOne( { _id: id }, contactitem , (err , contact) => {

        if (err)
        {
            res.end(err)
        }
        else
        {
            res.redirect("/businesscontact");
        }
    });
};

module.exports.deletepage = function(req, res, next) {
    let id = req.params.id;
    bcontactModel.remove({ _id: id }, (err) => {
        
        res.redirect("/businesscontact");
        
    });
};
