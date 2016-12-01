var express = require("express");
var app = express();

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
    };

app.get("/turtles", function (req, res) {
    res.send(turtles);
});
app.post("/turtles", function (req, res) {
    console.log(req.body.name);
    for (var key in req){
        //console.log(key);
    }
});
app.listen(3000);
console.log("Server started at http://localhost:3000/");