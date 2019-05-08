const Project = require("../models/project");
const User = require("../models/user");
const Client = require("../models/client");


module.exports = {

    // ********* READ **********
    //findById for a specific Project
    findByIds: function(req, res) {
        Project
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    //findAll related to one User
    //findAll related to one User + one Client

    // ********* CREATE **********
    //Create new Project + associate to one User and one Client
    createNewProject: function(req, res) {
        const newProject = new Project({
            title: req.body.title,
            category: req.body.category,
            status: req.body.status,
            priority: req.body.priority,
            rate: req.body.rate,
            timeEst: req.body.timeEst
        });
        newProject
        .save()
        .then(function(dbProject) {
            // User association
            User.findOneAndUpdate({ _id: req.user.id }, { projects: dbProject._id }, { new: true });
            //Client association
            Client.findOneAndUpdate({ email: req.body.email }, { projects: dbProject._id }, { new: true });
            return dbProject
        })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }


    // ********* UPDATE **********
    //update project info
    //update upon completion
    //update to make project inactive (soft delete)
};