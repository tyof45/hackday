require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const request = require("request");
const app = express();

app.get('/', function(req, res){
   res.send("Hello world!");
});

app.listen(3000);
