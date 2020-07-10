const db = require('./models');
const express = require('express');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("./public"));

//Routes go here

db.sequelize.sync().then(function(){
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });