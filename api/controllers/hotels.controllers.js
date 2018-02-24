var mongoose = require("mongoose");
var Hotel = mongoose.model('Hotel');

var runGeoQuery = function(req, res) {
  //build geo spatial query, need to extract values from string to create Geo Json point
  var lng = parseFloat(req.query.lng);
  var lat = parseFloat(req.query.lat);

  if (isNaN(lng) || isNaN(lat)) {
    res
      .status(400)
      .json({
        "message" : "If supplied in querystring, lng and lat must both be numbers"
      });
    return;
  }


  //A geoJson point
  var point = {
    type: "Point",
    coordinates: [lng, lat]
  };
  //   var geoOptions = {
  //       spherical: true,
  //       maxDistance: 2000, //in meters = 2km
  //       num: 5
  //   };

  Hotel
    .aggregate([{
      "$geoNear": {
        "near": point,
        "distanceField": "distance",
        "spherical": true,
        "maxDistance": 2000, //in meters = 2km
        "num": 5
      }
    }], function(err, results, stats) {
      if (err) {
        console.log(err);
        res
          .status(500)
          .json(err);
      }
      console.log("Geo results: ", results);
      console.log("Geo stats: ", stats);
      res
        .status(200)
        .json(results);
    });
};

module.exports.hotelsGetAll = function(req, res) {
  var offset = 0;
  var count = 5;
  var maxCount = 10;

  if (req.query && req.query.lat && req.query.lng) {
    runGeoQuery(req, res);
    return;
  }

  if (req.query && req.query.offset) {
    offset = parseInt(req.query.offset, 10);
  }

  if (req.query && req.query.count) {
    count = parseInt(req.query.count, 10);
  }

  if (isNaN(offset) || isNaN(count)) {
    res
      .status(400)
      .json({ "message": "If supplied the query string count and offset should be numbers" })
    return;
  }

  if (count > maxCount) {
    res
      .status(400)
      .json({
        "message": "Count limit of " + maxCount + " exceeded"
      })
    return;
  }

  Hotel
    .find()
    .skip(offset)
    .limit(count)
    .exec(function(err, hotels) {
      if (err) {
        console.log("Error finding hotel");
        res
          .status(500)
          .json(err);
      }
      else {
        console.log("Found hotels", hotels.length);
        res
          .json(hotels);
      }
    })
};

module.exports.hotelsGetOne = function(req, res) {
  var hotelId = req.params.hotelId;
  console.log('GET hotelId', req.params.hotelId);

  Hotel
    .findById(hotelId)
    .exec(function(err, doc) {
      var response = {
        status: 200,
        message: doc
      };

      if (err) {
        console.log("Error finding hotel");
        response.status = 500;
        response.message = err;
      }
      else if (!doc) {
        response.status = 404;
        response.message = "Hotel ID not found";
      }
      res
        .status(response.status)
        .json(response.message);
    });
};

module.exports.hotelsAddOne = function(req, res) {
  var db = dbconn.get();
  var collection = db.collection('hotels');
  var newHotel;

  console.log("POST new hotel");

  if (req.body && req.body.name && req.body.stars) {
    newHotel = req.body;
    newHotel.stars = parseInt(req.body.stars, 10);
    collection.insertOne(newHotel, function(err, response) {
      if (err) {
        console.log("err in AddOne");
        return
      }
      console.log(response);
      console.log(response.ops);
      res
        .status(201)
        .json(response.ops);
    });
  }
  else {
    console.log("Data missing from body");
    res
      .status(400)
      .json({ message: "Required Data missing from body" })
  }
};
