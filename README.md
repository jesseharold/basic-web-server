# basic-web-server

Using Node.js and the express module, you will allow users to get data from an API you've created!

## Before you begin

You will want to make a project directory, a git repo, and run npm init inside your project directory to set it up with Node, see this doc here for more info on npm init

## Details

    Using Express in the server.js file, make two different route handlers:

    * a. One that supports a url route GET /turtles Should return a JSON object that looks like:

    {
      message: "success",
      data: [
        {
          name: "Raphael",
          favFood: "Pizza"
        },
        {
          name: "Leonardo",
          favFood: "Pizza"
        },
        {
          name: "Donatello",
          favFood: "Pizza"
        },
        {
          name: "Michelangelo",
          favFood: "Pizza"
        }
      ]
    }

    * b. One that supports a route POST /turtles with a body of

    {
      name: "NEW TURTLE NAME",
      favFood: "TURTLE FAV FOOD"
    }

    For basic assignment, it should just return same object of the new turtle (see BONUS section for additional steps)

    {
      message: "success",
      data: {
        name: "NEW TURTLE NAME",
        favFood: "TURTLE FAV FOOD"
      }
    }

    * On your HTML side, make an Ajax request to your new API on the GET /turtles route
    a. Show the turtles in a list on page load
    b. In other words, as soon as the page loads, call your server with AJAX to GET your /turtles

    * Add a form at the bottom of the page to create a new turtle calling the POST /turtles route
    a. On click of the form submit button, it should send the new turtle data over as a POST,
    b. Your page should then add the turtle to the list using jQuery
    c. Note: if you refresh the page, it will lose the new turtle data!

## Bonus features
### BONUS 1:

a. Add additional properties to your turtles, like images or videos

b. Let users create turtles that feature these new attributes

### BONUS 2:

a. Store the "turtles" in an array on your server side code, and then update that array each time the POST /turtles route is called

b. If you restart your node server, those turtles will be lost (but see next bonus)

### BONUS 3 (requires BONUS 2):

a. After you get BONUS 2 working, Find a way to save and load turtles to something persistent on your server, try a JSON file with the built-in Node module for the File System

b. Consider saving them to a file in a data directory in your project, like [my project folder]/data/turtles.json

c. Note if you do require('./some-file.json');, Node will automatically load a JSON file and convert it into an object for you (how nice)

### BONUS 4:

a. Use the Giphy API from the backend to find pictures of turtles, try using the built in module http to help you make requests to other APIs from your backend (can't use jQuery AJAX here!)

b. create a new endpoint route as GET /turtle_images which returns back a random search of turtles, see this example query

c. display these on your front end page by using jQuery to do an ajax call to your new API