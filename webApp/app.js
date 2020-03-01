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

app.get('/', function(req, res){
   res.send("Hello world!");
});
