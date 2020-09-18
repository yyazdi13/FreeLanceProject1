const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/all', (req,res)=>{
    db.Email.findAll({}).then(function(results){
      res.json(results);
    });
});

module.exports = router;