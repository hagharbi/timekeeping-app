const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./routes");
// const passport = require("passport");
// const users = require("./routes/api/users");
const app = express();
const cors = require('cors');
const jwt = require('./config/jwt');
const errorHandler = require('./config/error-handler');
const PORT = process.env.PORT || 4000;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
// app.use(express.static("public"));
// app.use(express.static(path.join(__dirname, "public")));
// app.use("/black-dashboard-react", express.static(path.join(__dirname, "public")));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
}
// Add routes, both API and view
app.use(routes);

// Database Setup for Prod Env
// DB Config
const db = require("./config/db").mongoURI;
// Connect to MongoDB
mongoose
  .connect(
    db || "mongodb://localhost/timekeeperapp", {
      useNewUrlParser: true
    }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// use JWT auth to secure the api
app.use(jwt());

// api routes
app.use('/users', require('./users/users.controller'));

// global error handler
app.use(errorHandler);

  // // Passport middleware
  // app.use(passport.initialize());
  // // Passport config
  // require("./config/passport")(passport);
  // // Routes
  // app.use("/api/users", users);
  
// Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/timekeeperapp")
// .then(() => console.log("MongoDB successfully connected"))
// .catch(err => console.log(err));

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> Server listening on PORT ${PORT}!`);
});