const express = require("express");
const router = express.Router();
const clientsController = require("../../controllers/clients.js");


router.route("/")
    .post(clientsController)

module.exports = router;