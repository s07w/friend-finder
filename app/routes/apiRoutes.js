// Load data

var friends = require("../data/friends");

// Routing

module.exports = function (app) {
    //API GET requests

    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    // API POST requests

    app.post("/api/friends", function (req, res) {
        var bestMatch = {
            name: "",
            photo: "",
            friendDiff: Infinity
        };

        // parses result of survey POST
        var userData = req.body;
        var userScores = userData.scores;

        //calculates difference between user's scores and scores of each user in db

        var totalDiff;

        // loop through all scores for each friend
        for (var i = 0; i < friends.length; i++) {
            var currentFriend = friends[i];
            totalDiff = 0;

            console.log(currentFriend.name);

            // loops through all scores for each friend
            for (var j = 0; j < currentFriend.scores.length; j++) {
                var currentFriendScore = currentFriend.scores[j];
                var currentUserScore = userScores[j];

                //calculate difference between scores and sum them into totalDiff
                totalDiff += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
            }

            // if the sum of the difference is less than difference from current "best match"
            if (totalDiff <= bestMatch.friendDiff) {
                //reset bestMatch to new friend
                bestMatch.name = currentFriend.name;
                bestMatch.photo = currentFriend.photo;
                bestMatch.friendDiff = totalDiff;
            }
        }

        // Save user data to db
        friends.push(userData);

        // return JSON with user's bestMatch. used by HTML 
        res.json(bestMatch);
    });
};