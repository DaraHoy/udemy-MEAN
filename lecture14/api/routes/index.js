var express = require("express");
var router = express.Router();

var ctrlHotels = require("../controllers/hotels.controllers.js");

router
    .route('/hotels')
    .get(ctrlHotels.hotelsGetAll);

router
    .route('/hotels/:hotelId')
    .get(ctrlHotels.hotelsGetOne);

router //create new route for post request
    .route('/hotels/new')
    .post(ctrlHotels.hotelsAddOne);

module.exports = router;
