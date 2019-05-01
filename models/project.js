var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var ProjectSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: "Project Name is Required"
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
    rate: {
        type: Number
    },
    timeEst: {
        type: Number
    },
    timeWorked: {
        type: Number
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
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    client: {
        type: Schema.Types.ObjectId,
        ref: "Client"
    },
    milestones: [
        {
        type: Schema.Types.ObjectId,
        ref: "Milestone"
    }
    ]
});

ProjectSchema.methods.lastUpdatedDate = function() {
    this.lastUpdate = Date.now();
    return this.lastUpdate;
};

ProjectSchema.methods.completionDate = function() {
    this.completionDate = Date.now();
    return this.completionDate;
};

var Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;