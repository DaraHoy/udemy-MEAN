var express = require("express");
var router = express.Router();

var ctrlHotels = require("../controllers/hotels.controllers.js");

router
    .route('/hotels')
    .get(ctrlHotels.hotelsGetAll);


//create a path that includes a url Parameter
router
    .route('/hotels/:hotelId')
    .get(ctrlHotels.hotelsGetOne);

module.exports = router;
