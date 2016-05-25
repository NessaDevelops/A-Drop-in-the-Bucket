/**
 * Created by Janessa Stabler on 5/18/2016.
 */

var express = require('express');
var router = express.Router();
var moment = require('moment');
var _ = require('underscore');
var color = require('cli-color');
var db = require('../../database');
var Memories = db.memories;

router.post('/', function (req, res) {

    console.log('did we even come here: editmemory');

    var body = req.body;

    console.log(body);
    console.log(body.oldName);

    var time = moment().format('MMMM Do YYYY, h:mm:ss a');

    Memories.find({

        'name': body.oldName

    }, function (err, memories) {

        if (err) {
            console.log('Couldn\'t load any memories at ' + color.red(time) + ' for ' + color.red(body.username) + ' because of: ' + err);
            res.status(500).json({
                'message': 'Internal server error from finding memories. Please contact support@yourproject.com.'
            });
        }

        if (!memories) {
            console.log('not found em');
            res.status(409).json({
                'message': body.owner + ' has no memories currently created!'
            });
        }

        if (memories) {
            console.log(memories);
            Memories.update({'name':body.oldName}, {
                'name':body.name,
                'members':body.members,
                'description':body.description,
                'location':body.location
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