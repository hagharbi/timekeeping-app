module.exports = function(app, passport) {
  app.get("/register", authController.register);

  app.get("/login", authController.login);

  //Using LocalStrategy
  app.post(
    "/register",
    passport.authenticate("local-signup", {
      successRedirect: "/dashboard",

      failureRedirect: "/register"
    })
  );

  // Signin using LocalStrategy
  app.post(
    "/login",
    passport.authenticate("local-login", {
      successRedirect: "/dashboard",

      failureRedirect: "/signin"
    })
  );

  // app.get("/posts", isLoggedIn, authController.posts);
  // app.get("/createpost", isLoggedIn, authController.createpost);
  // app.get("/single-post", isLoggedIn, authController.singlepost);
  // app.get("/myaccount", isLoggedIn, authController.myaccount);
  // app.get("/network", isLoggedIn, authController.network);
  // app.get("/logout", authController.logout);

  // function isLoggedIn(req, res, next) {
  //   if (req.isAuthenticated()) {
  //     return next();
  //   }

  //   res.redirect("/login");
  // }
};
