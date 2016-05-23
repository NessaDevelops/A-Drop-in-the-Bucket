/**
 * Created by Janessa Stabler on 5/18/2016.
 */

var express = require('express');
var router = express.Router();
var moment = require('moment');
var _ = require('underscore');
var color = require('cli-color');
var db = require('../../database');
var Users = db.users;

router.post('/', function (req, res) {

    console.log('did we even come here: edituser');

    var body = req.body;

    console.log(body);
    console.log(body.username);
    console.log(body.gender);
    console.log(body.dob);

    var time = moment().format('MMMM Do YYYY, h:mm:ss a');
    var now = new Date();
    var gender = body.gender;
    var dob = body.dob;

    Users.find({

        'username': body.username

    }, function (err, users) {

        if (err) {
            console.log('Couldn\'t load any users at ' + color.red(time) + ' for ' + color.red(body.username) + ' because of: ' + err);
            res.status(500).json({
                'message': 'Internal server error from finding users. Please contact support@yourproject.com.'
            });
        }

        if (!users) {
            console.log('not found em');
            res.status(409).json({
                'message': body.owner + ' has no users currently created!'
            });
        }

        if (users) {
            console.log(users);
            Users.update({'name':body.username}, {
                'firstName':body.firstName,
                'lastName':body.lastName,
                'email':body.email,
                'password':body.password,
                'gender':gender,
                'dob':dob,
                'lastLoggedIn':now
            }, function (err, data) {
                if(err) {
                } else if (!data) {
                } else {
                    return res.send(200, data);
                }
            });

            console.log('found em');
        }
    });
});

module.exports = router;