/**
 * Created by Janessa Stabler on 4/29/2016.
 */

var express = require('express');
var router = express.Router();
var moment = require('moment');
var _ = require('underscore');
var color = require('cli-color');
var db = require('../../database');
var Goals = db.goals;

router.post('/', function (req, res) {

    console.log('GET HERRR');

    var body = req.body;

    // console.log(body.owner);
    // console.log(body.name);

    var time = moment().format('MMMM Do YYYY, h:mm:ss a');

    Goals.find({

        'bucketlist': body.name

    }, function (err, goals) {

        if (err) {
            console.log('Couldn\'t load any goals at ' + color.red(time) + ' in ' + color.red(body.bucketlist) + ' because of: ' + err);
            res.status(500).json({
                'message': 'Internal server error from finding goals. Please contact support@yourproject.com.'
            });
        }

        if (!goals) {
            console.log('not found em');
            res.status(409).json({
                'message': body.bucketlist + ' has no goals currently created!'
            });
        }

        if (goals) {
            console.log('found em');
            // console.log(goals);
            res.status(201).json({
                getGoals : goals
            });
        }
    });

});

module.exports = router;