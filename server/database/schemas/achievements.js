/**
 * Created by Janessa Stabler on 4/24/2016.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var achievementSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true},
    points: { type: Number, required: true},
    owner: { type: String, required: true},
    goalsCompleted: { type: Number, required: true},
    goalsNeeded: { type: Number, required: true},
    complete: { type: Boolean, required: true}

});

achievementSchema.pre('save', function (next) {

    var achievement = this;
    next();
});

var Achievement = mongoose.model('Achievement', achievementSchema);

module.exports = Achievement;