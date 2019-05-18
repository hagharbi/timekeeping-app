const express = require("express");
const router = express.Router();
const projectsController = require("../../controllers/projects");

// FIND
router.route("/findone")
    .post(projectsController.findOne);

router.route("/findbyuser")
    .post(projectsController.findByUser);

// POST
router.route("/create")
    .post(projectsController.createProject);

router.route("/update")
    .post(projectsController.updateProject);

router.route("/updatedropdowns")
    .post(projectsController.updateDropdowns);

router.route("/updatenotes")
    .post(projectsController.updateNotes);

router.route("/remove")
    .post(projectsController.removeProject);

module.exports = router;