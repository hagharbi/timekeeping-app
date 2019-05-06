var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var MilestoneSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: "Milestone Name is Required"
    },
    category: {
        type: String,
        trim: true,
    },
    status: {
        type: String,
        trim: true,
    },
    priority: {
        type: String,
        trim: true,
    },
    notes: {
        type: Array, 
        default: undefined
    },
    dateCreated: {
        type: Date,
        default: Date.now
    },
    dueDate: {
        type: Date
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
    },
    tasks: [
        {
        type: Schema.Types.ObjectId,
        ref: "Task"
    }
    ]
});

MilestoneSchema.methods.lastUpdatedDate = function() {
    this.lastUpdate = Date.now();
    return this.lastUpdate;
};

MilestoneSchema.methods.lastCompletionDate = function() {
    this.completionDate = Date.now();
    return this.completionDate;
};

var Milestone = mongoose.model("Milestone", MilestoneSchema);

module.exports = Milestone;