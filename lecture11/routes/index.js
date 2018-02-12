var express = require("express");
var router = express.Router();

router
    .route('/json') // 1. define your route
    .get(function(req, res) { // 2. define your method
        console.log('GET json'); // 3. define your function
        res
            .status(200)
            .json({ "jsonData": true });
    }) // chain multiple http methods
    .post(function(req, res) {
        console.log('POST the json route'); // 3. define your function
        res
            .status(200)
            .json({ "jsonData": "POST received" });
    });


module.exports = router;
