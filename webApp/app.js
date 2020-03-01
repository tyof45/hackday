require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const request = require("request");
const app = express();

// The port used for Express server
const PORT = 3000;

// Starts server
app.listen(process.env.PORT || PORT, function() {
  console.log('Bot is listening on port ' + PORT);
});

// Add middlewares
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Routes
app.post('/', (req, res) => {
  var data = { form:
                { token: process.env.SLACK_AUTH_TOKEN,
                  channel: "#general",
                  text: "Hi! :wave: \n I'm your new bot."
                }
             };
  request.post('https://slack.com/api/chat.postMessage', data, function (error, response, body) {
    // Sends welcome message
    res.json();
  });
});

app.get('/', function(req, res){
   res.send("Hello world!");
});
