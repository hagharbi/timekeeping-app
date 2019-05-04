const path = require("path");
const router = require("express").Router();

router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/login", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/login.html"));
});

router.get("/signup", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/register.html"));
});

// If no other routes are hit, send the React app
router.get("/dashboard", function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;