var fs = require("fs");

var onFileLoad = function(err, file) { // named function
    console.log("Got the file");
};

console.log("Going to get file");
fs.readFile('readFileSync.js', onFileLoad);
console.log("App continues..");
