var mongoose = require("mongoose");

// delete mongoose.connection.models['User'];
// delete mongoose.connection.models['users'];

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

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
        function(input) {
        return input.length >= 6;
        },
        "Password should be longer."
    ]
    },
    phone: {
        type: String,
        trim: true,
    },
    altEmail: {
        type: String,
        trim: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },
    altPhone: {
        type: String,
        trim: true,
    },
    street: String,
    city: String,
    state: {
        type: String,
        uppercase: true,
        required: false,
        default: ""
    },
    zip: {
        type: Number,
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
            function(input) {
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
    clients: [
        {
        type: Schema.Types.ObjectId,
        ref: "Client"
    }
    ],
    projects: [
        {
        type: Schema.Types.ObjectId,
        ref: "Project"
    }
    ]
});

UserSchema.methods.lastUpdatedDate = function() {
    this.dateUpdated = Date.now();
    return this.dateUpdated;
};


var User = mongoose.models.users || mongoose.model("users", UserSchema)

module.exports = User;