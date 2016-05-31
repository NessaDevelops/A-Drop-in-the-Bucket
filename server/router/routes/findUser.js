/**
 * Created by Janessa Stabler on 4/29/2016.
 */

var express = require('express');
var router = express.Router();
var moment = require('moment');
var _ = require('underscore');
var color = require('cli-color');
var db = require('../../database');
var Users = db.users;

router.post('/', function (req, res) {

    console.log('GET HERRR');

    var body = req.body;

    console.log(body.username);
    // console.log(body.name);

    var time = moment().format('MMMM Do YYYY, h:mm:ss a');

    Users.find({

        'username': body.username

    }, function (err, users) {

        if (err) {
            console.log('Couldn\'t load any user at ' + color.red(time) + ' by the username ' + color.red(body.username) + ' because of: ' + err);
            res.status(500).json({
                'message': 'Internal server error from finding user. Please contact support@yourproject.com.'
            });
        }

        if (!users) {
            console.log('not found em');
            res.status(409).json({
                'message': body.username + ' is not a user!'
            });
        }

        if (users) {
            console.log('found em');
            console.log(users);
            res.status(201).json({
                getUser : users
            });
        }
    });

});

module.exports = router;