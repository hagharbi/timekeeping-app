const express = require("express");
const router = express.Router();
const tasksController = require("../../controllers/tasks.js");


router.route("/")
    .post(tasksController)

module.exports = router;