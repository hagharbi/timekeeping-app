const Client = require("../models/client");
const User = require("../models/user");

//User Id = req.user.id

module.exports = {

    //************* READ *************** */

    //findById for a specific User
    findOneUser: function(req, res) {
        console.log(req.body);
        return User.findById(req.body.id)
        .then(dbUser => res.json(dbUser))
        
    },

    //findById for a specific Client
    findOneClient: function(req, res) {
        console.log(req.body);
        return Client.findById(req.body.id)
        .then(dbClient => res.json(dbClient))
        
    },

    //************* CREATE *************** */

    //create new Client + associate to one User
    createClient: function(req, res) {
        const newClient = new Client({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            altEmail: req.body.altEmail,
            phone: req.body.phone,
            altPhone: req.body.altPhone,
            category: req.body.category,
            title: req.body.title,
            address: {
                street: req.body.street,
                city: req.body.city,
                state: req.body.state,
                zip: req.body.zip
            },
            $push: {notes: req.body.note},
            $push: {user: req.body.id}
        });
        console.log(newClient);

        newClient
        .save()
        .then(function(dbClient) {

            // User association
            return User.findOneAndUpdate({ _id: req.body.id }, { $push: {clients: dbClient._id }}, { new: true }).
            populate({
                path: 'clients',
                populate: { path: 'clients' }
            });
            
        })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    //************* UPDATE CLIENT *************** */

    updateClient: function(req, res) {
        const updatedClient = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            altEmail: req.body.altEmail,
            phone: req.body.phone,
            altPhone: req.body.altPhone,
            category: req.body.category,
            title: req.body.title,
            address: {
                street: req.body.street,
                city: req.body.city,
                state: req.body.state,
                zip: req.body.zip
            },
            $push: {notes: req.body.note}
        };
        
        console.log(updatedClient)

        const query = { _id: req.body.id };

        console.log(query)

        Client.findOneAndUpdate(query, { $set: updatedClient})
        .catch(err => res.status(422).json(err));
    },

    //update to add notes
    addNotes: function(req, res) {
        const query = { _id: req.body.id };

        console.log(query)

        Client.findOneAndUpdate(query, {$push: {notes: req.body.note}})
        .catch(err => res.status(422).json(err));
    },

    //update to make Client inactive (soft delete)
    removeClient: function(req, res) {
        const query = { _id: req.body.id };

        console.log(query)

        Client.findOneAndUpdate(query, { $set: {active: false} })
        .catch(err => res.status(422).json(err));
    },

    //************* UPDATE USER *************** */

    updateUser: function(req, res) {
        const updatedUser = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            altEmail: req.body.altEmail,
            phone: req.body.phone,
            altPhone: req.body.altPhone,
            category: req.body.category,
            photo: req.body.photo,
            title: req.body.title,
            desciption: req.body.desciption,
            timeZone: req.body.timeZone,
            address: {
                street: req.body.street,
                city: req.body.city,
                state: req.body.state,
                zip: req.body.zip
            }
        };
        
        console.log(updatedUser)

        const query = { _id: req.body.id };

        console.log(query)

        User.findOneAndUpdate(query, { $set: updatedUser})
        .catch(err => res.status(422).json(err));
    },

    //update to make User inactive (soft delete)
    removeUser: function(req, res) {
        const query = { _id: req.body.id };

        console.log(query)

        User.findOneAndUpdate(query, { $set: {active: false} })
        .catch(err => res.status(422).json(err));
    },

};