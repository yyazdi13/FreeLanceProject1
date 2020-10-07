const db = require('./models');
const express = require('express');
const cors = require('cors');
const path = require('path');
const route = require('./routes/routes');

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

//Routes
app.use('/api', route);

// Heroku setup
if (process.env.NODE_ENV === 'production'){
  app.use(express.static('public/gumdrop/dist/gumdrop'));
}

// // static setup
// app.get("*", function (req, res) {
//   res.sendFile(path.join(__dirname, "public", "gumdrop"));
//    });

db.sequelize.sync({force: false}).then(function(){
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
});

module.exports = app;
