var mongoose = require("mongoose");
const statesArray = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"];

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var ClientSchema = new Schema({
    firstName: {
        type: String,
        trim: true
    },
    lastName: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        trim: true,
        required: "Email is Required",
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },
    altEmail: {
        type: String,
        trim: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },
    phone: {
        type: String,
        trim: true,
    },
    altPhone: {
        type: String,
        trim: true,
    },
    address: {
        street: {
            type: String,
            trim: true,
            default: "",
        },
        city: {
            type: String,
            trim: true,
            default: "",
        },
        state: {
            type: String,
            trim: true,
            uppercase: true,
            default: ""
        },
        zip: {
            type: Number,
            trim: true,
            default: undefined,
        }
    },
    category: {
        type: String,
        trim: true,
    },
    company: {
        type: String,
        required: "Company is Required",
    },
    notes: {
        type: Array, 
        default: [""]
    },
    userCreated: {
        type: Date,
        default: Date.now
    },
    dateUpdated: {
        type: Date
    },
    active: {
        type: Boolean,
        default: true
    },
    user: [
        {
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
    projects: [
        {
        type: Schema.Types.ObjectId,
        ref: "Project"
    }
    ]
});

ClientSchema.methods.lastUpdatedDate = function() {
    this.dateUpdated = Date.now();
    return this.dateUpdated;
};

var Client = mongoose.model("Client", ClientSchema);

module.exports = Client;