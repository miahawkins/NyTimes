//Require dependencies
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

// Initialize Express for debugging & body parsing
var app = express();
app.use(bodyParser.urlencoded({
  extended: false
}));

// Serve Static Content
app.use(express.static(process.cwd() + "/public"));

//Connect to Mongoose
mongoose.connect("mongodb://localhost/nytreact");

var db = mongoose.connection;

// Show any Mongoose errors
db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// Import the Article model
var Article = require("./models/Article.js");

// Import Routes
var router = require("./router/router.js");
app.use("/", router);

// Launch App
var port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log("Running on port: " + port);
});
