const path = require("path");
const router = require("express").Router();

router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../views/index.html"));
});

router.get("/login", function(req, res) {
  res.sendFile(path.join(__dirname, "../views/login.html"));
});

router.get("/login2", function(req, res) {
  res.sendFile(path.join(__dirname, "../views/login2.html"));
});

router.get("/mock-dashboard", function(req, res) {
  res.sendFile(path.join(__dirname, "../views/dashboard.html"));
});

router.get("/invoice", function(req, res) {
  res.sendFile(path.join(__dirname, "../views/invoice.html"));
});

// If no other routes are hit, send the React app
router.get("/dashboard", function(req, res) {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

module.exports = router;