/**
 * Created by Janessa Stabler on 5/11/2016.
 */

var express = require('express');
var router = express.Router();
var moment = require('moment');
var _ = require('underscore');
var color = require('cli-color');
var db = require('../../database');
var Memories = db.memories;

router.post('/', function (req, res) {
    console.log('wtf');

    var body = req.body;
    var time = moment().format('MMMM Do YYYY, h:mm:ss a');
    var now = new Date();

    console.log('Creating a new memory at ' + color.green(time) + ' with the name: ' + color.green(body.name));

    console.log('image: '+body.image);
    
    var newMemory = new Memories({
        name: body.name,
        completeDate: now,
        owner: body.owner,
        members: body.members,
        bucketlist: body.bucketlist,
        location: body.location,
        description: body.description,
        images: body.image
    });

    newMemory.save(function (err, savedMemory) {

        if (err) {
            console.log('Problem saving the goal ' + color.yellow(body.name) + ' due to ' + err);
            res.status(500).json({
                'message': 'Database error trying to create memory.  Please contact support@yourproject.com.'
            });
        }

        console.log('Successfully created new memory: ' + color.green(body.name));

        res.status(201).json({
            'message': 'Successfully created new memory',
            'client': _.omit(savedMemory)
        });

    });

});

module.exports = router;