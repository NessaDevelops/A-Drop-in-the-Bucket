/**
 * Created by Janessa Stabler on 5/13/2016.
 */

var express = require('express');
var router = express.Router();
var moment = require('moment');
var _ = require('underscore');
var color = require('cli-color');
var db = require('../../database');
var Bucketlists = db.bucketlists;

router.post('/', function (req, res) {

    console.log('did we even come here');

    var body = req.body;

    console.log(body);

    var time = moment().format('MMMM Do YYYY, h:mm:ss a');

    Bucketlists.find({

        'name': body.oldName

    }, function (err, bucketlists) {

        if (err) {
            console.log('Couldn\'t load any bucketlists at ' + color.red(time) + ' for ' + color.red(body.username) + ' because of: ' + err);
            res.status(500).json({
                'message': 'Internal server error from finding bucketlists. Please contact support@yourproject.com.'
            });
        }

        if (!bucketlists) {
            console.log('not found em');
            res.status(409).json({
                'message': body.owner + ' has no bucketlists currently created!'
            });
        }

        if (bucketlists) {
            console.log(bucketlists);
            Bucketlists.update({'name':body.oldName}, {
                'name':body.name,
                'members':body.members,
                'tags':body.tags,
                'description':body.description,
                'private':body.private,
                'mature':body.mature
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