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
  console.log("Request: \n" + req);
  const fromUser = req.body.fromUser;
  const toUser = req.body.toUser;
  const amt = req.body.amt;
  
  if(req.body.type === "url_verification"){
    const data = {
      "challenge": req.body.challenge
    }
    request.post('https://slack.com/api/chat.postMessage', data, function (error, response, body) {
      // Sends welcome message
      res.json();
    });
  }

  const mkDataForm = (txt) => {
    return { form:
                  { token: process.env.SLACK_AUTH_TOKEN,
                    channel: "#teamblazor",
                    text: txt
                  }
           };
  };  
  const data = mkDataForm("Hi! from the Node server!");
  request.post('https://slack.com/api/chat.postMessage', data, function (error, response, body) {
    // Sends welcome message
    res.json();
  });
});
