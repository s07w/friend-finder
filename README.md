# Big Lebowski Friend Finder

[Link to Heroku app](https://protected-basin-89653.herokuapp.com/)

This full stack app uses Express to create a live site that takes survey input, calculates the user's answers with those of other users, and finds a best match based on the user's answers. 

## How the app works

### Home Page
The user is first taken to the home page, where they can:
* View the API Friends list, which lists the friends as JSON objects
* View the repo for the project
* Start the survey
* The user is then prompted to enter a name and photo. Then, they can start answering questions.

![GIF of home page demo](https://raw.githubusercontent.com/s07w/friend-finder/master/demo.gif)

### Survey page
* If the user has not answered all 10 questions, the survey will prompt them to do so.
* After answering all questions, the best match is displayed in a pop up window for the user.
* They then have the option to review their answers, or click 'Home' in the footer to return home.

![GIF of home page demo](https://raw.githubusercontent.com/s07w/friend-finder/master/demo2.gif)

## Challenges

Getting all of the dispirate elements of this project to coordinate was even more difficult than the Bamazon app beforehand. But, this is the world of full stack development! I especially ran into problems figuring out where the module.exports would be placed. This took a mixture of logic, common sense, and trial and error. I was ultimately very pleased with the results. 

## Technologies used

Javascript, HTML, Bootstrap, js.Node, npm dependencies - js.Express, path, body-Parser middleware, Heroku (for deployment), and Terminal

