var mongoose = require("mongoose");
const statesArray = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"];

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var ClientSchema = new Schema({
    firstName: {
        type: String,
        trim: true,
        required: "First Name is Required"
    },
    lastName: {
        type: String,
        trim: true,
        required: "Last Name is Required"
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
        validate: {
            validator: function(v) {
                return /\d{3}-\d{3}-\d{4}/.test(v);
            },
            message: '{VALUE} is not a valid phone number!'
        }
    },
    altPhone: {
        type: String,
        trim: true,
        validate: {
            validator: function(v) {
                return /\d{3}-\d{3}-\d{4}/.test(v);
            },
            message: '{VALUE} is not a valid phone number!'
        }
    },
    address: {
        street: String,
        city: String,
        state: {
            type: String,
            trim: true,
            uppercase: true,
            required: true,
            enum: statesArray
        },
        zip: {
            type: Number,
            trim: true,
            validate: [
                function(input) {
                return input.length = 5;
                },
                "Zip code should be 5 digits."
            ]
        }
    },
    category: {
        type: String,
        trim: true,
    },
    title: {
        type: String
    },
    notes: {
        type: Array, 
        default: undefined
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
    }
    ],
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

let Client = mongoose.models.clients || mongoose.model("clients", ClientSchema);

module.exports = Client;