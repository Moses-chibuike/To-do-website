//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.get("/", (req, res) => {

  res.send("Hello World");
  });



app.listen(3000, function(){
    console.log("server started on port 3000");
  });
