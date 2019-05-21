const Client = require("../models/client");
const User = require("../models/user");

//User Id = req.user.id

module.exports = {

    //************* READ *************** */

    //findById for a specific User
    findOneUser: function(req, res) {
        return User.findById(req.body.id)
        .populate({
            path: 'clients',
            populate: { path: 'clients' }
        })
        .populate({
            path: 'projects',
            populate: { path: 'projects' }
        })
        .then(dbUser => res.json(dbUser))
        .catch(err => res.status(422).json(err));
    },

    //findById for a specific Client
    findOneClient: function(req, res) {
        return Client.findById(req.body.id)
        .populate({
            path: 'projects',
            populate: { path: 'projects' }
        })
        .then(dbClient => res.json(dbClient))
        .catch(err => res.status(422).json(err));
    },

/*     //Example for findById for many clients
    findManyClients: function(req, res) {
        console.log(req.body);
        return Client .find({
            '_id': { $in: [
                mongoose.Types.ObjectId('4ed3ede8844f0f351100000c'),
                mongoose.Types.ObjectId('4ed3f117a844e0471100000d'), 
                mongoose.Types.ObjectId('4ed3f18132f50c491100000e')
            ]}
        }, function(err, docs){
            if(err) throw(err);
            res.json(docs )
        });
        
    }, */

    //************* CREATE *************** */

    //create new Client + associate to one User
    createClient: function(req, res) {
        const newClient = new Client({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            company: req.body.company,
            email: req.body.email,
            altEmail: req.body.altEmail,
            phone: req.body.phone,
            altPhone: req.body.altPhone,
            category: req.body.category,
            street: req.body.street,
            city: req.body.city,
            state: req.body.state,
            zip: req.body.zip,
            $push: {notes: req.body.notes},
            $push: {user: req.body.userId}
        });

        newClient
        .save()
        .then(function(dbClient) {

            // User association
            return User.findOneAndUpdate({ _id: req.body.userId }, { $push: {clients: dbClient._id }}, { new: true }).
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
            company: req.body.company,
            street: req.body.street,
            city: req.body.city,
            state: req.body.state,
            zip: req.body.zip,
            $push: {notes: req.body.notes}
        };

        const query = { _id: req.body.id };

        Client.findOneAndUpdate(query, { $set: updatedClient})
        .catch(err => res.status(422).json(err));
    },

    //update to add notes
    addNotes: function(req, res) {
        const query = { _id: req.body.id };

        Client.findOneAndUpdate(query, {$push: {notes: req.body.notes}})
        .catch(err => res.status(422).json(err));
    },

    //update to make Client inactive (soft delete)
    removeClient: function(req, res) {
        const query = { _id: req.body.id };

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
            description: req.body.description,
            timeZone: req.body.timeZone,
            street: req.body.street,
            city: req.body.city,
            state: req.body.state,
            zip: req.body.zip
        };

        const query = { _id: req.body.userId };

        User.findOneAndUpdate(query, { $set: updatedUser})
        .catch(err => res.status(422).json(err));
    },

    //update to make User inactive (soft delete)
    removeUser: function(req, res) {
        const query = { _id: req.body.userId };

        User.findOneAndUpdate(query, { $set: {active: false} })
        .catch(err => res.status(422).json(err));
    },

};
