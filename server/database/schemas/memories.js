/**
 * Created by Janessa Stabler on 5/11/2016.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var memorySchema = new Schema({
    name: { type: String, required: true },
    completeDate: { type: Date, required: true },
    owner: { type: String, required: true },
    members: { type: String, required: false },
    bucketlist: { type: String, required: true},
    location: { type: String, required: false},
    description: { type: String, required: true},
    images: { type: String, required: false}

});

memorySchema.pre('save', function (next) {

    var memory = this;
    next();
});

var Memory = mongoose.model('Memory', memorySchema);

module.exports = Memory;