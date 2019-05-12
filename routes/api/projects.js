const express = require("express");
const router = express.Router();
const projectsController = require("../../controllers/projects");

// FIND
router.route("/findone")
    .post(projectsController.findOne)

// POST
router.route("/create")
    .post(projectsController.createProject)

router.route("/update")
    .post(projectsController.updateProject)

router.route("/remove")
    .post(projectsController.removeProject)

module.exports = router;