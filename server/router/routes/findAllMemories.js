/**
 * Created by Janessa Stabler on 5/25/2016.
 */

var express = require('express');
var router = express.Router();
var moment = require('moment');
var _ = require('underscore');
var color = require('cli-color');
var db = require('../../database');
var Memories = db.memories;

router.post('/', function (req, res) {

    // console.log('GET HERRR');

    var body = req.body;
    console.log('body: '+body);

    var time = moment().format('MMMM Do YYYY, h:mm:ss a');

    Memories.find({

        'owner': body.username

    }, function (err, memories) {

        if (err) {
            console.log('Couldn\'t load any memories at ' + color.red(time) + ' in ' + color.red(body.bucketlist) + ' because of: ' + err);
            res.status(500).json({
                'message': 'Internal server error from finding memories. Please contact support@yourproject.com.'
            });
        }

        if (!memories) {
            console.log('not found em');
            res.status(409).json({
                'message': body.bucketlist + ' has no memories currently created!'
            });
        }

        if (memories) {
            console.log('found em');
            console.log(memories);
            res.status(201).json({
                getMemories : memories
            });
        }
    });

});

module.exports = router;