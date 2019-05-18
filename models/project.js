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
        default: [""]
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
    activeLog: {
        type: Boolean,
        default: false
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
    ],
    logs: [
        {
        type: Schema.Types.ObjectId,
        ref: "Log"
    }
    ]
});

ProjectSchema.methods.updateDate = function() {
    this.lastUpdate = Date.now();
    return this.lastUpdate;
};

ProjectSchema.methods.completeDate = function() {
    this.completionDate = Date.now();
    return this.completionDate;
};

var Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;