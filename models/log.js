var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var LogSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: "A Title is Required"
    },
    category: {
        type: String,
        trim: true,
    },
    status: {
        type: String,
        trim: true,
    },
    notes: {
        type: Array, 
        default: undefined
    },
    timeStart: {
        type: String,
        trim: true,
    },
    timeEnd: {
        type: String,
        trim: true,
    },
    times: {
        type: Array, 
        default: undefined
    },
    dateCreated: {
        type: Date,
        default: Date.now
    },
    lastUpdate: {
        type: Date
    },
    timeWorked: {
        type: Number
    },
    completionDate: {
        type: Date
    },
    active: {
        type: Boolean,
        default: true
    },
    counting: {
        type: Boolean,
        default: true
    }},
    {
        timestamps: true
    });

LogSchema.methods.updateDate = function() {
    this.lastUpdate = Date.now();
    return this.lastUpdate;
};

LogSchema.methods.completeDate = function() {
    this.completionDate = Date.now();
    return this.completionDate;
};


var Log = mongoose.model("Log", LogSchema);

module.exports = Log;