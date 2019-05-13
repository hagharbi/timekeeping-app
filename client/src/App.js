import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
import Landing from "./components/layout/landingPage/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard.jsx";
import Settings from "./pages/Settings";
import Client from "./pages/Clients";
import EditClient from "./pages/EditClient";
import Projects from "./pages/Projects";

// < ----- Check for token to keep user logged in
if (localStorage.jwtToken) {
  // < ----- Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // < ----- Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // < ----- Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // < ----- Check for expired token
  const currentTime = Date.now() / 1000; // < ----- to get in milliseconds
  if (decoded.exp < currentTime) {
    // < ----- Logout user
    store.dispatch(logoutUser());

    // < ----- Redirect to login
    window.location.href = "./login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">

            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute exact path="/settings" component={Settings} />
              <PrivateRoute exact path="/clients" component={Client} />
              <PrivateRoute exact path="/clients/:id" component={EditClient} />
              <PrivateRoute exact path="/projects" component={Projects} />
              <PrivateRoute exact path="/invoices" component={Client} /> *// switch to invoices components when ready 
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;