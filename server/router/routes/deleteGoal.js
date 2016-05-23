/**
 * Created by Janessa Stabler on 5/18/2016.
 */

var express = require('express');
var router = express.Router();
var moment = require('moment');
var _ = require('underscore');
var color = require('cli-color');
var db = require('../../database');
var Goals = db.goals;

router.post('/', function (req, res) {

    console.log('did we even come here');

    var body = req.body;

    console.log(body.username);

    var time = moment().format('MMMM Do YYYY, h:mm:ss a');

    Goals.findOneAndRemove({

        'name': body.name

    }, function (err, goals) {

        if (err) {
            console.log('Couldn\'t load any goals at ' + color.red(time) + ' for ' + color.red(body.username) + ' because of: ' + err);
            res.status(500).json({
                'message': 'Internal server error from finding goals. Please contact support@yourproject.com.'
            });
        }

        if (!goals) {
            console.log('not found em');
            res.status(409).json({
                'message': body.owner + ' has no goals currently created!'
            });
        }

        if (goals) {
            console.log('found em');
            res.status(201).json({
            });
        }
    });

});

module.exports = router;