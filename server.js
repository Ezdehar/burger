var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var mysql = require("mysql");

var app = express();
var PORT = process.env.PORT || 8080;

// Serve static content for the app from the "public" directory in the application directory.
app.set('views', path.join(__dirname, 'views'));
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//app.use(router);
// Import routes and give the server access to them.
//var burger = require("/Users/ezdeharjaber/Documents/cwru/burger/db/models/burger.js");

// var connection = require("/Users/ezdeharjaber/Documents/cwru/burger/db/config/connection.js")(app);
//var router = require("/Users/ezdeharjaber/Documents/cwru/burger/db/models/controllers/burgers_controller.js")(app);

//app.use(router);

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});
