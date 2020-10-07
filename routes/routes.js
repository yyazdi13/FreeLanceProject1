const express = require('express');
const router = express.Router();
const db = require('../models');

// get all emails
router.get('/all', (req,res)=>{
    db.Email.findAll({}).then(function(results){
      res.json(results);
    }).catch(err =>{
        res.status(500).json('error ' + err);
    })
});

// create a message
router.post('/post', (req,res)=>{
    db.Email.create({
        email: req.body.email,
        message: req.body.message
    }).then(function(results){
        res.json("successfully created message: " + results);
    }).catch(err => {
        res.status(500).json('error creating message: ' + err);
    })
})

// get all flavors
router.get('/flavors', (req,res)=>{
    db.Flavor.findAll({}).then(function(results){
      res.json(results);
    }).catch(err =>{
        res.status(500).json('error ' + err);
    })
});

router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public", "gumdrop", "dist", "gumdrop", "index.html"));
});

module.exports = router;