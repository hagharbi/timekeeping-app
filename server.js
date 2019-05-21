const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const passport = require("passport");
const users = require("./routes/api/users");
const projects = require("./routes/api/projects");
const logs = require("./routes/api/logs");
const clients = require("./routes/api/clients");
const app = express();

const PORT = process.env.PORT || 4000;

// Define middleware here
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// API Routes
app.use("/api/users", users);
app.use("/api/projects", projects);
app.use("/api/clients", clients);
app.use("/api/logs", logs);

// Database Setup for Prod Env
// DB Config
const db = process.env.mongoURI;

// // Connect to MongoDB
mongoose
  .connect(
    db || "mongodb://localhost/timekeeperapp", {
      useNewUrlParser: true
    }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));


// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);

// // Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/timekeeperapp")
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> Server listening on PORT ${PORT}!`);
});