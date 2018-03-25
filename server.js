var express = require('express');
var methodoverride = require('method-override');
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 3000;
var app = express();

// Serve static content 
app.use(express.static("public"));

app.use(bodyParser.urlencoded({
    extended: false
}));

// Set Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// Import routes and server access
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(PORT, function () {
    console.log(`listening on port ${PORT}`);
});