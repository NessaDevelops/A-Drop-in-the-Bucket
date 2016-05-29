/**
 * Created by Janessa Stabler on 4/28/2016.
 */
var express = require('express');
var router = express.Router();
var moment = require('moment');
var _ = require('underscore');
var color = require('cli-color');
var db = require('../../database');
var Achievements = db.achievements;

router.post('/', function (req, res) {

    var body = req.body;
    var time = moment().format('MMMM Do YYYY, h:mm:ss a');

    console.log('HELLOHELLO: '+body);

    console.log('Creating a new achievement at ' + color.green(time) + ' with the name: ' + color.green(body.name));

    // console.log('we here: '+body);

    var achievements = {};

    achievements = [
        {
            name: 'Global Trotter',
            description: 'Visit 5 Continents',
            points: 100,
            owner: body.username,
            goalsCompleted: 0,
            goalsNeeded: 5,
            complete: false
        },
        {
            name: 'Global Trotter Elitist',
            description: 'Visit all 7 Continents',
            points: 200,
            owner: body.username,
            goalsCompleted: 0,
            goalsNeeded: 7,
            complete: false
        },
        {
            name: 'Feeder',
            description: 'Eat food in 5 different locations',
            points: 50,
            owner: body.username,
            goalsCompleted: 0,
            goalsNeeded: 5,
            complete: false
        },
        {
            name: 'Viking',
            description: 'Hike 5 different mountains',
            points: 100,
            owner: body.username,
            goalsCompleted: 0,
            goalsNeeded: 5,
            complete: false
        },
        {
            name: 'Just Keep Swimming',
            description: 'Visit 5 different pools of water',
            points: 100,
            owner: body.username,
            goalsCompleted: 0,
            goalsNeeded: 5,
            complete: false
        }
    ];

    for (var i = 0; i < achievements.length; i++) {

        var newAchievement = new Achievements({
            name: achievements[i].name,
            description: achievements[i].description,
            points: achievements[i].points,
            owner: achievements[i].owner,
            goalsCompleted: achievements[i].goalsCompleted,
            goalsNeeded: achievements[i].goalsNeeded,
            complete: achievements[i].complete
        });

        // console.log("static goal: "+newStaticGoal);

        newAchievement.save(function (err, savedAchievement) {
            console.log("saved achievement: " + savedAchievement);

            if (err) {
                console.log('Problem saving the achievement ' + color.yellow(savedAchievement.name) + ' due to ' + err);
                res.status(500).json({
                    'message': 'Database error trying to create achievement.  Please contact support@yourproject.com.'
                });
            }

            console.log('Successfully created new achievement: ' + color.green(savedAchievement.name));
        });
    }

    res.status(201).json({
        'message': 'Successfully created new achievement',
        'client': _.omit(achievements)
    });

});

module.exports = router;