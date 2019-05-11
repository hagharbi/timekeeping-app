const express = require("express");
const router = express.Router();
const projectsController = require("../../controllers/projects");

// GET
router.route("/findone")
    .get(projectsController.findOne)

// POST
router.route("/create")
    .post(projectsController.createProject)

router.route("/update")
    .post(projectsController.updateProject)

router.route("/remove")
    .post(projectsController.removeProject)

module.exports = router;