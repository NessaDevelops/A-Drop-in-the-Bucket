/**
 * Created by Janessa Stabler on 4/24/2016.
 */
var express = require('express');
var router = express.Router();
var moment = require('moment');
var _ = require('underscore');
var color = require('cli-color');
var db = require('../../database');
var Bucketlists = db.bucketlists;

router.post('/', function (req, res) {

    var body = req.body;
    var time = moment().format('MMMM Do YYYY, h:mm:ss a');

    console.log('Creating a new bucketlist at ' + color.green(time) + ' with the name: ' + color.green(body.name));
    console.log("private: " + body.private);
    console.log("mature: " + body.mature);
    console.log(body);

    var mature = true;
    if(body.mature == null) {
        mature = false;
    }

    var private = true;
    if(body.private == null) {
        private = false;
    }

    var newBucketlist = new Bucketlists({
        name: body.name,
        owner: body.owner,
        members: body.members,
        tags: body.tags,
        description: body.description,
        private: private,
        mature: mature

    });

    newBucketlist.save(function (err, savedBucketlist) {

        if (err) {
            console.log('Problem saving the bucketlist ' + color.yellow(body.name) + ' due to ' + err);
            res.status(500).json({
                'message': 'Database error trying to create bucketlist.  Please contact support@yourproject.com.'
            });
        }

        console.log('Successfully created new bucketlist: ' + color.green(body.name));

        res.status(201).json({
            'message': 'Successfully created new bucketlist',
            'client': _.omit(savedBucketlist)
        });

    });

});

module.exports = router;