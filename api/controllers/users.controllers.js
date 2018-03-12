var mongoose = require("mongoose");
var User = mongoose.model('User');
var bcrypt = require("bcrypt-nodejs");
var jwt = require("jsonwebtoken");

module.exports.register = function(req, res) {
    console.log("registering user");

    //get form data for db creation
    var username = req.body.username;
    var password = req.body.password;
    var name = req.body.name || null;

    //mongo creates new user with data
    User.create({
        username: username,
        password: bcrypt.hashSync(password, bcrypt.genSaltSync(10)),
        name: name
    }, function(err, user) {
        //mongo returns a response object if the create was valid
        if (err) {
            console.log(err);
            res.status(400).json(err);
        }
        else {
            console.log('user created', user);
            res.status(201).json(user);
        }
    });
};

module.exports.login = function(req, res) {
    console.log("Logging in user")
    //login requires only username/password
    var username = req.body.username;
    var password = req.body.password;

    //beacuse the model for username is set to unique we can safely use findOne()
    User.findOne({
        username: username
    }).exec(function(err, user) {
        if (err) {
            console.log(err);
            res.status(400).json(err);
        }
        else {
            if (bcrypt.compareSync(password, user.password)) {
                console.log('User found', user);
                var token = jwt.sign({ username: user.username }, 's3cr3t', { expiresIn: 3600 });
                res.status(201).json({ success: true, token: token });
            }
            else {
                res.status(401).json('Unauthorized');
            }
        }
    });
};

module.exports.authenticate = function(req, res, next) {
    var headerExists = req.headers.authorization;
    if (headerExists) {
        var token = req.headers.authorization.split(" ")[1] // --> authorization beaer xxx
        jwt.verify(token, 's3cr3t', function(error, decoded) {
            if (error) {
                console.log(error);
                res.status(401).json('Unauthorized')
            }
            else {
                //Add properties to the request
                req.user = decoded.username;
                next();
            }
        });
    }
    else {
        res.status(403).json('No token provided');
    }
}
