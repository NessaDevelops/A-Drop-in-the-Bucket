/**
 * Created by Janessa Stabler on 4/29/2016.
 */

var express = require('express');
var router = express.Router();
var moment = require('moment');
var _ = require('underscore');
var color = require('cli-color');
var db = require('../../database');
var StaticGoals = db.staticGoals;

router.post('/', function (req, res) {

    console.log('GET HERRR STATIC GOALZ');

    var body = req.body;

    console.log(body.continent);
    // console.log(body.name);

    var time = moment().format('MMMM Do YYYY, h:mm:ss a');

    StaticGoals.find({

        'continent': body.continent

    }, function (err, staticGoals) {

        if (err) {
            console.log('Couldn\'t load any goals at ' + color.red(time) + ' in ' + color.red(body.continent) + ' because of: ' + err);
            res.status(500).json({
                'message': 'Internal server error from finding goals. Please contact support@yourproject.com.'
            });
        }

        if (!staticGoals) {
            console.log('not found em');
            res.status(409).json({
                'message': body.continent + ' has no goals currently created!'
            });
        }

        if (staticGoals) {
            console.log('found em');
            console.log(staticGoals);
            res.status(201).json({
                getGoals : staticGoals
            });
        }
    });

});

module.exports = router;