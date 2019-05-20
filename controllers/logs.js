const Log = require("../models/log");
const Project = require("../models/project");

//User Id = req.user.id

module.exports = {

    //*********** READ ************* */

    //findById for a specific Log
    findOneLog: function(req, res) {
        console.log(req.body.id);

        return Log.findById(req.body.id)
        .then(function(dbLog) {
            res.json(dbLog)
        })
        .catch(function(err) {
            // If an error occurs, send it back to the client
            res.json(err);
        });
        
    },

    ///*********** CREATE ********** */

    //create new Log + associate to one Project
    createLog: function(req, res) {
        const newLog = new Log({
            title: req.body.title,
        });

        newLog
        .save()
        .then(function(dbLog) {

            // Project association
            return Project.findOneAndUpdate({ _id: req.body.id }, { $push: {logs: dbLog._id}, $set: { activeLog: true}}, { new: true }).
            populate({
                path: 'logs',
                populate: { path: 'logs' }
            })
            
        })
        .catch(err => res.status(422).json(err));
    },

    //************** UPDATE ************ */

    updateLog: function(req, res) {
        const query = { _id: req.body.id };

        Log.findOneAndUpdate(query, { $set: {counting: false} }, { new: true })
        .then(function(dbLog) {
            return Project.findOneAndUpdate({ _id: req.body.projectId }, { $set: {activeLog: false}}, { new: true })
        })
        .catch(err => res.status(422).json(err));
    },

    //update to add notes (add completion ???)
    updateNotes: function(req, res) {
        const query = { _id: req.body.id };

        Log.findOneAndUpdate(query, {$push: {notes: req.body.note}})
        .catch(err => res.status(422).json(err));
    },

    //update to soft delete
    removeLog: function(req, res) {
        const query = { _id: req.body.id };

        Log.findOneAndUpdate(query, { $set: {active: false} })
        .catch(err => res.status(422).json(err));
    }
};