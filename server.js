// Dependencies

var express = require("express");
var bodyParser = require("body-parser");
var path = require('path');


//Express config

// Port for listener
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up body-parser npm to interpret data

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Router 

require("./app/routes/apiRoutes")(app);
require("./app/routes/htmlRoutes")(app);

// Listener

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});