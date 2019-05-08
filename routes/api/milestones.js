const express = require("express");
const router = express.Router();
const milestonesController = require("../../controllers/milestones.js");


router.route("/")
    .post(milestonesController)

module.exports = router;