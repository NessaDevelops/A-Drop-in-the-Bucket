/**
 * Created by Janessa Stabler on 4/28/2016.
 */
var express = require('express');
var router = express.Router();
var moment = require('moment');
var _ = require('underscore');
var color = require('cli-color');
var db = require('../../database');
var Goals = db.goals;

router.post('/', function (req, res) {
    console.log('wtf');

    var body = req.body;
    var time = moment().format('MMMM Do YYYY, h:mm:ss a');

    console.log('Creating a new goal at ' + color.green(time) + ' with the name: ' + color.green(body.name));

    var newGoal = new Goals({
        name: body.name,
        owner: body.owner,
        bucketlist: body.bucketlist,
        location: body.location,
        description: body.description,
        images: 'Placeholder'
    });

    newGoal.save(function (err, savedGoal) {

        if (err) {
            console.log('Problem saving the goal ' + color.yellow(body.name) + ' due to ' + err);
            res.status(500).json({
                'message': 'Database error trying to create goal.  Please contact support@yourproject.com.'
            });
        }

        console.log('Successfully created new goal: ' + color.green(body.name));

        res.status(201).json({
            'message': 'Successfully created new goal',
            'client': _.omit(savedGoal)
        });

    });

});

module.exports = router;