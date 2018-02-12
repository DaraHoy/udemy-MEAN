/*
Defining static folders
Build basic HTML page
Deliver CSS, images & JavaScript
*/

var express = require("express");
var app = express();
var path = require("path");

app.use(express.static(path.join(__dirname, 'public'))); // express.static takes a dir name for static files, .use is an express method / middleware

app.set('port', process.env.PORT);

//no loner need root path, because .use is serving static files 'index.html'

/* deleted
app.get('/', function(req, res) {
    console.log('GET homepage');
    res
        .status(200)
        .sendFile(path.join(__dirname, 'public', 'index.html'));
});
*/

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
