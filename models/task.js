var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: "Task Name is Required"
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
    completionDate: {
        type: Date
    },
    active: {
        type: Boolean,
        default: true
    }
});

TaskSchema.methods.lastUpdatedDate = function() {
    this.lastUpdate = Date.now();
    return this.lastUpdate;
};

TaskSchema.methods.lastCompletionDate = function() {
    this.completionDate = Date.now();
    return this.completionDate;
};


var Task = mongoose.model("Task", TaskSchema);

module.exports = Task;