var hotelData = require("../data/hotel-data.json")

module.exports.hotelsGetAll = function(req, res) {
    console.log('GET the hotels');
    console.log(req.query); // access the req.query object

    var offset = 0;
    var count = 5;

    // check if an offset query is present in the URL and that it is greater than 0
    if(req.query && req.query.offset){
        offset = parseInt(req.query.offset, 10); // use parseInt() because query string values gets passed in as strings
    }
    if(req.query && req.query.offset){
        count = parseInt(req.query.count, 10);
    }

// take hotel Data arr from json and return just 5 hotels
    var returnData = hotelData.slice(offset, offset + count);

    res
        .status(200)
        .json(returnData);
};

module.exports.hotelsGetOne = function(req, res) {
    var hotelId = req.params.hotelId;
    var thisHotel = hotelData[hotelId];
    console.log('GET the hotel', hotelId);
    res
        .status(200)
        .json(thisHotel);
};

// controller method for POST
module.exports.hotelsAddOne = function(req, res) {
  console.log("POST new hotel");
  console.log(req.body);
    res
        .status(200)
        .json(req.body) //sends back form data as json
};
