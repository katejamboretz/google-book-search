// Require packages & set PORT & initialize Express

var express = require("express");
var path = require("path");
var mongoose = require("mongoose");
var cheerio = require("cheerio")
var axios = require("axios");
var PORT = process.env.PORT || 3001;
var app = express();


// Require models

db = require("./models");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to MongoDB

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/googlebooks";

mongoose.connect(MONGODB_URI, { urlNewUrlParser: true });

// Define API routes here

app.get("/api/books", (req, res) => {
  //return all saved books as json
  db.Book.find({}).then(function (dbBook) {
    res.json(dbBook);
  }).catch(function (err) {
    res.json(err);
  })
});

app.post("/api/books", (req, res) => {
  //save a new book to the database
  db.Book.create(req.body).then(function (dbBook) {
    res.json(dbBook);
  }).catch(function (err) {
    console.log(err);
  })
});

app.delete("/api/books/:id", (req, res) => {
  // delete book using Mongo ID
  db.Book.deleteOne({ _id: req.params.id }).then(function (dbBook) {
    res.json(dbBook);
  }).catch(function (err) {
    res.json(err);
  })
});

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
