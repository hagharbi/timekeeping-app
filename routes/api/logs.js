const express = require("express");
const router = express.Router();
const logsController = require("../../controllers/logs");

// FIND
router.route("/findone")
    .post(logsController.findOneLog);

// POST
router.route("/create")
    .post(logsController.createLog);

router.route("/update")
    .post(logsController.updateLog);

router.route("/remove")
    .post(logsController.removeLog);

module.exports = router;