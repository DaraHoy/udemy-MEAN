/*
Seperation of concerns
Instantiating ther router
Applying the router to a subset of routes
testing routes using Postman
*/

var express = require("express");
var app = express();
var path = require("path");
// require the routes folder
var routes = require("./routes");

app.set('port', process.env.PORT);

app.use(function(req, res, next) {
    console.log(req.method, req.url);
    next();
});

app.use(express.static(path.join(__dirname, 'public')));

// reminder: you can specify a path for a certain set of routes
app.use('/api', routes);

var server = app.listen(app.get('port'), function() {
    var port = server.address().port;
    console.log("Magic happens on port:" + port);
});
