const Project = require("../models/project");
const User = require("../models/user");
const Client = require("../models/client");

module.exports = {

    // ************ READ **********/

    //findById for a specific Project
    findOne: function(req, res) {
        return Project.findById(req.body.id)
        .populate({
            path: 'logs',
            populate: { path: 'logs' }
        })
        .populate({
            path: 'clients',
            populate: { path: 'clients' }
        })
        .then(dbProject => res.json(dbProject))
        .catch(err => res.status(422).json(err));
    },

    // ************** CREATE **********/

    //Create new Project + associate to one User and one Client
    createProject: function(req, res) {
        const newProject = new Project({
            title: req.body.title,
            category: req.body.category,
            status: req.body.status,
            priority: req.body.priority,
            rate: req.body.rate,
            timeEst: req.body.timeEst,
            user: req.body.userId,
            client: req.body.clientID,
            $push: {notes: req.body.notes}
        });
        console.log(newProject);

        newProject
        .save()
        .then(function(dbProject) {

            console.log(dbProject);
            console.log(req.body.userId);
            
             Client.findOneAndUpdate({ _id: req.body.clientID }, { $push: {projects: dbProject._id }}, { new: true })
       

            // console.log(dbProject._id);

            // // User association
            return User.findByIdAndUpdate(req.body.userId, { $push: {projects: dbProject._id }})
        })
        .then(dbModel => console.log(dbModel))
        .catch(err => res.status(422).json(err));
    },

    // *************** UPDATE ********** /

    updateProject: function(req, res) {
        const updatedProject = {
            title: req.body.title,
            category: req.body.category,
            status: req.body.status,
            priority: req.body.priority,
            rate: req.body.rate,
            timeEst: req.body.timeEst,
            dueDate: req.body.dueDate,
            $push: {notes: req.body.note}
        };
        
        console.log(updatedProject)

        const query = { _id: req.body.id };

        console.log(query)

        Project.findOneAndUpdate(query, { $set: updatedProject})
        .catch(err => res.status(422).json(err));
    },

   //update to add notes (add completion ???)
    updateNotes: function(req, res) {
        const query = { _id: req.body.id };

        console.log(query)

        Project.findOneAndUpdate(query, {$push: {notes: req.body.note}})
        .catch(err => res.status(422).json(err));
    },

    //update to make project inactive (soft delete)
    removeProject: function(req, res) {
        const query = { _id: req.body.id };

        console.log(query)

        Project.findOneAndUpdate(query, { $set: {active: false} })
        .catch(err => res.status(422).json(err));
    }
};