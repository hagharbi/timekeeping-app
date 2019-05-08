const express = require("express");
const router = express.Router();
const projectsController = require("../../controllers/projects.js");

router.route("/createprojects")
    .post(projectsController.createNewProject)

router.route("/find/:id")
    .post(projectsController.findByIds)

module.exports = router;