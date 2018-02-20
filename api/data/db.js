var mongoose = require("mongoose");
var dburl = 'mongodb://'+ process.env.IP +':27017/meanhotel';

mongoose.connect(dburl);

//Tracking connection events
mongoose.connection.on('connected', function(){
    console.log("Mongoose has connected to " + dburl);
});
mongoose.connection.on('disconnected', function(){
    console.log("Mongoose has disconnected");
});
mongoose.connection.on('error', function(err){
    console.log("Mongoose connection error: " + err);
});

process.on('SIGINT',function(){
    mongoose.connection.close(function(){
        console.log("Mongoose disconnected through app termination (SIGINT)");
        process.exit(0);
    });
});
process.on('SIGTERM',function(){
    mongoose.connection.close(function(){
        console.log("Mongoose disconnected through app termination (SIGINT)");
        process.exit(0);
    });
});
process.once('SIGUSR2',function(){ //Close connetion on app restart
    mongoose.connection.close(function(){
        console.log("Mongoose disconnected through app termination (SIGUSR2)");
        process.kill(process.pid, 'SIGUSR2');
    });
});

require("hotel.model.js");