const db = require("../models");

//User
module.exports = {
    // findOne
    findById: function(req, res) {
        db.User
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
    //create User (this code will be with Passport??)
    //update login details (this code will be with Passport??)
    //update general info
    //update to make User inactive
    //update to make User admin

};