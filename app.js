require('./instantHello'); //require a file
var goodbye = require('./talk/goodbye'); // can access subfolders
var talk = require('./talk'); 
var question = require("./talk/question");

talk.intro(); // can call methods
talk.hello("Dara");

var answer = question.ask("What is the meaning of life?"); 
console.log(answer);

goodbye();