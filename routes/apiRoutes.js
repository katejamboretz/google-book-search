const axios = require("axios");
const router = require("express").Router();
const key = process.env.REACT_APP_API_KEY;

router.get("/search", (req, res) => {
    axios
        //        .get("https://www.googleapis.com/books/v1/volumes?q=", { params: req.query }, "&key=", key)
        .get("https://www.googleapis.com/books/v1/volumes?q=flower&key=", key)
        .then(({ data: { results } }) => console.log(res.json(results)))
        .catch(err => res.status(422).json(err));
});

module.exports = router;

