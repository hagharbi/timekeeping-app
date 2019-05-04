import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link 
                    to="/" 
                    className="navbar-brand" 
                    >
                    SUMIT
                </Link>
            </nav>
      </div>
    );
  }
}
export default Navbar;