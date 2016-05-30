/**
 * Created by Janessa Stabler on 4/28/2016.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var staticGoalSchema = new Schema({
    name: { type: String, required: true },
    continent: { type: String, required: true},
    location: { type: String, required: true},
    images: { type: String, required: true},
    feedme: { type: Boolean, required: true},
    viking: { type: Boolean, required: true},
    swimming: { type: Boolean, required: true}

});

staticGoalSchema.pre('save', function (next) {

    var staticGoal = this;
    next();
});

var StaticGoal = mongoose.model('StaticGoal', staticGoalSchema);

module.exports = StaticGoal;