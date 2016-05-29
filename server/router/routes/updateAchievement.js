/**
 * Created by Janessa Stabler on 5/13/2016.
 */

var express = require('express');
var router = express.Router();
var moment = require('moment');
var _ = require('underscore');
var color = require('cli-color');
var db = require('../../database');
var Achievements = db.achievements;

router.post('/', function (req, res) {

    console.log('did we even come here: editgoal');

    var body = req.body;

    console.log(body);
    console.log(body.name);
    console.log(body.goalsCompleted);

    var time = moment().format('MMMM Do YYYY, h:mm:ss a');

    Achievements.find({

        'name': body.name,
        'owner': body.owner

    }, function (err, achievements) {

        if (err) {
            console.log('Couldn\'t load any achievements at ' + color.red(time) + ' for ' + color.red(body.name) + ' because of: ' + err);
            res.status(500).json({
                'message': 'Internal server error from finding achievement. Please contact support@yourproject.com.'
            });
        }

        if (!achievements) {
            console.log('not found em');
            res.status(409).json({
                'message': 'No achievements with that name!'
            });
        }

        if (achievements) {
            console.log(achievements);
            Achievements.update({'name':body.name}, {
                'goalsCompleted':body.goalsCompleted,
                'complete':body.complete
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