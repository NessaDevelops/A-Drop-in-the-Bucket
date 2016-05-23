/**
 * Created by Janessa Stabler on 4/24/2016.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bucketlistSchema = new Schema({
    name: { type: String, required: true },
    owner: { type: String, required: true },
    members: { type: String, required: false},
    tags: { type: String, required: false},
    description: { type: String, required: true},
    private: { type: Boolean, required: true},
    mature: { type: Boolean, required: true}

});

bucketlistSchema.pre('save', function (next) {

    var bucketlist = this;
    next();
});

var Bucketlist = mongoose.model('Bucketlist', bucketlistSchema);

module.exports = Bucketlist;