var mongoose = require("mongoose");
const statesArray = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"];

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// delete mongoose.connection.models['User'];

var UserSchema = new Schema({
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
    password: {
        type: String,
        trim: true,
        required: "Password is Required",
        validate: [
            function (input) {
                return input.length >= 6;
            },
            "Password should be longer."
        ]
    },
    hash: {
        type: String,
        trim: true,
        required: "Password is Required",
        validate: [
            function (input) {
                return input.length >= 6;
            },
            "Password should be longer."
        ]
    },
    phone: {
        type: String,
        trim: true,
        validate: {
            validator: function (v) {
                return /\d{3}-\d{3}-\d{4}/.test(v);
            },
            message: '{VALUE} is not a valid phone number!'
        }
    },
    altEmail: {
        type: String,
        trim: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },
    address: {
        street: String,
        city: String,
        state: {
            type: String,
            uppercase: true,
            required: false,
            enum: statesArray
        },
        zip: {
            type: Number,
            validate: [
                function (input) {
                    return input.length = 5;
                },
                "Zip code should be 5 digits."
            ]
        }
    },
    category: {
        type: String,
        trim: true
    },
    photo: {
        type: String
    },
    title: {
        type: String,
        trim: true
    },
    description: {
        type: String,
        validate: [
            function (input) {
                return input.length <= 250;
            },
            "Description should be 250 characters or less."
        ]
    },
    timeZone: {
        type: String
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
    admin: {
        type: Boolean,
        default: false
    },
    clients: [{
        type: Schema.Types.ObjectId,
        ref: "Client"
    }],
    projects: [{
        type: Schema.Types.ObjectId,
        ref: "Project"
    }]
});

UserSchema.methods.lastUpdatedDate = function () {
    this.dateUpdated = Date.now();
    return this.dateUpdated;
};


let User = mongoose.models.users || mongoose.model("User", UserSchema);

module.exports = User;