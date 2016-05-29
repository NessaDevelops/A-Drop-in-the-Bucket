/**
 * Created by Janessa Stabler on 5/25/2016.
 */

var express = require('express');
var router = express.Router();
var moment = require('moment');
var _ = require('underscore');
var color = require('cli-color');
var db = require('../../database');
var Achievements = db.achievements;

router.post('/', function (req, res) {

    // console.log('GET HERRR');

    var body = req.body;
    console.log('body: '+body.owner);

    var time = moment().format('MMMM Do YYYY, h:mm:ss a');

    Achievements.find({

        'owner': body.owner

    }, function (err, achievements) {

        if (err) {
            console.log('Couldn\'t load any memories at ' + color.red(time) + ' for ' + color.red(body.username) + ' because of: ' + err);
            res.status(500).json({
                'message': 'Internal server error from finding achievements. Please contact support@yourproject.com.'
            });
        }

        if (!achievements) {
            // console.log('not found em');
            res.status(409).json({
                'message': body.username + ' has no achievements currently created!'
            });
        }

        if (achievements) {
            // console.log('found em');
            console.log(achievements);
            res.status(201).json({
                getAchievements : achievements
            });
        }
    });

});

module.exports = router;