const path = require("path");
const router = require("express").Router();

router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../views/assets/index.html"));
});

router.get("/login", function(req, res) {
  res.sendFile(path.join(__dirname, "../views/assets/html/login.html"));
});

router.get("/login2", function(req, res) {
  res.sendFile(path.join(__dirname, "../views/assets/html/login2.html"));
});

router.get("/mock-dashboard", function(req, res) {
  res.sendFile(path.join(__dirname, "../views/assets/html/dashboard.html"));
});

router.get("/invoice", function(req, res) {
  res.sendFile(path.join(__dirname, "../views/assets/html/invoice.html"));
});

// If no other routes are hit, send the React app
router.get("/dashboard", function(req, res) {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

module.exports = router;