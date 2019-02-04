// Dependencies

var path = require("path");

// Routing

module.exports = function(app) {
    //HTML GET requests

    app.get("/survey", function (req, res){
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });

    //if no matching route found, default to home page
    app.get("*", function (req, res){
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });
};
