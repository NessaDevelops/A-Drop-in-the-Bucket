/**
 * Created by Janessa Stabler on 4/22/2016.
 */
var express = require('express');
var router = express.Router();
var moment = require('moment');
var _ = require('underscore');
var color = require('cli-color');
var db = require('../../database');
var Users = db.users;
var passwordHash = require('password-hash');

router.post('/', function (req, res) {

    var body = req.body;

    var time = moment().format('MMMM Do YYYY, h:mm:ss a');

    Users.findOne({

        'email': body.email

    }, function (err, user) {

        if (err) {
            console.log('Couldn\'t create new user at ' + color.red(time) + ' by ' + color.red(body.email) + ' because of: ' + err);
            res.status(500).json({
                'message': 'Internal server error from signing up new user. Please contact support@yourproject.com.'
            });
        }

        if (!user) {
            res.status(409).json({
                'message': body.email + ' is not an email currently registered!'
            });
        }

        if (user) {
            if(passwordHash.verify(body.password, user.password)) {
                res.status(201).json({
                    getUser : user,
                    'message': 'Logged in! Username: ' + user.username + ' Password: '  + user.password + ' Email: ' + user.email

                });
            } else {
                res.status(409).json({
                    'message': body.password + ' is not the correct password!'
                });
            }
        }
    });

});

module.exports = router;