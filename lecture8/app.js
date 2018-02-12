var express = require("express");
var app = express(); //instantiate express
var path = require("path");



app.set('port', process.env.PORT);

app.get('/', function(req, res) {
    console.log('GET homepage');
    res
        .status(200)
        .sendFile(path.join(__dirname, 'public', 'index.html')); //path allows systems with different filepath syntax to access the same file
});

app.get('/json', function(req, res) {
    console.log('GET json');
    res
        .status(200)
        .json({"jsonObject": true});
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
