const axios = require("axios");
const router = require("express").Router();
// const key = process.env.REACT_APP_API_KEY;

router.get("/search", (req, res) => {
    // console.log("https://www.googleapis.com/books/v1/volumes", { params: req.query });
    axios
        .get("https://www.googleapis.com/books/v1/volumes?", { params: req.query })
        // .get("https://www.googleapis.com/books/v1/volumes?q=" + req.search + "&key=" + process.env.REACT_APP_API_KEY)
        // .get("https://www.googleapis.com/books/v1/volumes?", { params: req.query }, "&key=", key)
        // .get("https://www.googleapis.com/books/v1/volumes?q=flower")
        .then(({ data: { items } }) => res.json(items))

        .catch(err => res.status(422).json(err));
});

router.get("/books", (req, res) => {
    //return all saved books as json
    db.Book.find({}).then(function (dbBook) {
        res.json(dbBook);
    }).catch(function (err) {
        res.json(err);
    })
});

router.post("/books", (req, res) => {
    //save a new book to the database
    db.Book.create(req.body).then(function (dbBook) {
        res.json(dbBook);
    }).catch(function (err) {
        console.log(err);
    })
});

router.delete("/books/:id", (req, res) => {
    // delete book using Mongo ID
    db.Book.deleteOne({ _id: req.params.id }).then(function (dbBook) {
        res.json(dbBook);
    }).catch(function (err) {
        res.json(err);
    })
});

module.exports = router;

