var express = require("express");
var bodyparser = require("simple-bodyparser");
var fs = require("fs");
var request = require("request");
var turtlesLoaded = require("./data/turtles.json");

var app = express();
app.use(bodyparser());

// Add headers
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', null);
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});


var turtles =  {
      message: "success",
      data: [
        {
          name: "Raphael",
          favFood: "Pizza",
          image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ0OyXC-1HK9Mi0QucK7Svt-B7gkBHA4eXUfw39Sd77ggFsHF7p"
        },
        {
          name: "Leonardo",
          favFood: "Pizza",
          image: "http://cdn1.bigcommerce.com/n-ou1isn/ydriczk/products/86454/images/86011/leonardo_TMNT_face_mask_buy_star_masks_at_starstills__65394__25495.1394515286.500.659.jpg?c=2"
        },
        {
          name: "Donatello",
          favFood: "Pizza",
          image: "https://s-media-cache-ak0.pinimg.com/736x/88/6e/7f/886e7f2705900c2bb644ea78fd28adf7.jpg"
        },
        {
          name: "Michelangelo",
          favFood: "Pizza",
          image: "https://s-media-cache-ak0.pinimg.com/736x/35/b8/25/35b82586c7143f417af5037c66cf9879.jpg"
        }
      ]
    };

// look for stored value from the file
if (turtlesLoaded){
  //replace default value
  turtles = turtlesLoaded;
}

// ROUTES

app.get("/turtles", function (req, response) {
    response.send(turtles);
});
app.get("/turtle_images", function (req, response) {
    request.get("http://api.giphy.com/v1/gifs/search", {q:"TMNT+turtle", api_key:"dc6zaTOxFJmzC", limit: 1}, function(error, data){
      response.send(data.body);
    })
});
app.post("/turtles", function (req, response) {
    var postData = req.body.split("&");
    var newTurtle = {};
    for (var i = 0; i < postData.length; i++){
      var property = postData[i].split("=");
      newTurtle[property[0]] = decodeURIComponent(property[1]);
    }
    turtles.data.push(newTurtle);
    writeDataToServer(turtles);
    var responseData = {
        message: "success",
        data: newTurtle
    };
    response.send(responseData);
});

app.listen(3000);
console.log("Server started at http://localhost:3000/");

function writeDataToServer(data){
  fs.writeFile("data/turtles.json", JSON.stringify(data));
}