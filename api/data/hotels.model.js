var mongoose = require("mongoose");

var reviewSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 0,
        max: 15,
        required: true
    },
    review: {
        type: String,
        required: true
    },
    createdOn: {
        type: Date,
        default: Date.now
    }
});

var roomSchema = new mongoose.Schema({
    type: String,
    number: Number,
    photos: [String],
    price: Number
});

var hotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    stars: {
        type: Number,
        min: 0,
        max: 15,
        default: 0
    },
    services: [String],
    description: String,
    photos: [String],
    currency: String,
    reviews: [reviewSchema],
    rooms: [roomSchema],
    location: {
        address: String,
        //Always store coordinates in longitute (E/W), latitude order (N/S).
        coordinates: {
            type: Number,
            index: '2dsphere'
        }
    }
});

mongoose.model('Hotel', hotelSchema);
