const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./routes");
const passport = require("passport");
const users = require("./routes/api/users");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public")));
// app.use("/black-dashboard-react", express.static(path.join(__dirname, "public")));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
}
// Add routes, both API and view
app.use(routes);

// Database Setup for Prod Env
// DB Config
// const db = require("./config/keys").mongoURI;
// // Connect to MongoDB
// mongoose
//   .connect(
//     db || "mongodb://localhost/timekeeperapp", {
//       useNewUrlParser: true
//     }
//   )
//   .then(() => console.log("MongoDB successfully connected"))
//   .catch(err => console.log(err));

  // Passport middleware
  app.use(passport.initialize());
  // Passport config
  require("./config/passport")(passport);
  // Routes
  app.use("/api/users", users);
  
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/timekeeperapp")
.then(() => console.log("MongoDB successfully connected"))
.catch(err => console.log(err));

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> Server listening on PORT ${PORT}!`);
});