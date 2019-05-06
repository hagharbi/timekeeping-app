const express = require("express");
const router = express.Router();
const projectsController = require("../../controllers/index.js");


router.route("/api/projects/:id")
    .post(projectsController.createNewProject)

module.exports = router;