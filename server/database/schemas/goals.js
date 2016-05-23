/**
 * Created by Janessa Stabler on 4/28/2016.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var goalSchema = new Schema({
    name: { type: String, required: true },
    owner: { type: String, required: true },
    bucketlist: { type: String, required: true},
    location: { type: String, required: false},
    description: { type: String, required: true},
    images: { type: String, required: false}

});

goalSchema.pre('save', function (next) {

    var goal = this;
    next();
});

var Goal = mongoose.model('Goal', goalSchema);

module.exports = Goal;