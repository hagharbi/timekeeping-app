const express = require("express");
const router = express.Router();
const clientsController = require("../../controllers/clients.js");

//***** GET ***** */

router.route("/finduser")
    .post(clientsController.findOneUser)

router.route("/findclient")
    .get(clientsController.findOneClient)

//**** POST ***** */

router.route("/create")
    .post(clientsController.createClient)

router.route("/updateclient")
    .post(clientsController.updateClient)

router.route("/updateuser")
    .post(clientsController.updateUser)

router.route("/updatenotes")
    .post(clientsController.addNotes)

router.route("/removeclient")
    .post(clientsController.removeClient)

router.route("/removeuser")
    .post(clientsController.removeUser)

module.exports = router;