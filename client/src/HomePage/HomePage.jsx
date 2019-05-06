import React, { Component } from "react";

class HomePage extends Component {
  render() {
    return (
        <div>
            <h4>Welcome To Home Page!</h4>
            <Link to="/register" className="btn btn-link">Register</Link>
            <Link to="/login" className="btn btn-link">Login to your account</Link>
        </div>
    );
  }
}
export default HomePage;