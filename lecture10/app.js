/*
What is middleware?
Create a logging function
When & how to use middleware
*/

var express = require("express");
var app = express();
var path = require("path");

app.set('port', process.env.PORT);

// middleware is essentially a function that sits inbetween req/res, which flows through the middleware

// Our logging function
//.use annonymouse function takes 3 parameters 'req, res, next'
app.use(function(req, res, next) {
    console.log(req.method, req.url);
    next();
});

//.use can also take in a path as a parameter, this code will log anytime a req needs a css file
app.use('/css', function(req, res, next) {
    console.log(req.method, req.url);
    next();
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/json', function(req, res) {
    console.log('GET json');
    res
        .status(200)
        .json({ "jsonObject": true });
});

app.get('/file', function(req, res) {
    console.log('GET file');
    res
        .status(200)
        .sendFile(path.join(__dirname, 'app.js'));
});

var server = app.listen(app.get('port'), function() {
    var port = server.address().port;
    console.log("Magic happens on port:" + port);
});
