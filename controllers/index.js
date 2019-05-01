const db = require("../models");

//User
module.exports = {
    // findOne
    findById: function(req, res) {
        db.Book
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    //create User (this code will be with Passport??)
    //update login details (this code will be with Passport??)
    //update general info
    //update to make User inactive
    //update to make User admin

};

//Client
    //findAll related to one User
    //findById for a specific Client
    //create new Client + associate to one User
    //update info
    //update to add notes
    //update to make Client inactive (soft delete)

//Project
    //findAll related to one User
    //findAll related to one User + one Client
    //findById for a specific Project
    //create new Project + associate to one User and one Client
    //update project info
    //update upon completion
    //update to make project inactive (soft delete)


//Milestone
    //findAll related to one Project
    //find
    
    
//Task