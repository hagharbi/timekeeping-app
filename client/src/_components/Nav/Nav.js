import React, { Component } from "react";
import { Link } from "react-router-dom";
// import "./style.css";

class Nav extends React.Component {
  state = {
    open: false,
    width: window.innerWidth
  };

  updateWidth = () => {
    const newState = { width: window.innerWidth };

    if (this.state.open && newState.width > 991) {
      newState.open = false;
    }

    this.setState(newState);
  };

  toggleNav = () => {
    this.setState({ open: !this.state.open });
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateWidth);
  }

  componentWillUnMount() {
    window.removeEventListener("resize", this.updateWidth);
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-2">
        <Link className="navbar-brand" to="/">
        &#123; sumit &#125;  {window.location.pathname}
                </Link>
        <button
          onClick={this.toggleNav}
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`${this.state.open ? "" : "collapse "}navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                onClick={this.toggleNav}
                className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
                to="/"
              >
             Dashboard &#x1F50D;
              </Link>
            </li>
           
            <li className="nav-item">
            <Link
              onClick={this.toggleNav}
              className={window.location.pathname === "/new" ? "nav-link active" : "nav-link"}
              to="/new"
            >
          NEW
            </Link>
          </li>

            <li className="nav-item">
              <Link
                onClick={this.toggleNav}
                className={window.location.pathname === "/projects" ? "nav-link active" : "nav-link"}
                to="/projects"
              >
            Projects
              </Link>
            </li>

            <li className="nav-item">
            <Link
              onClick={this.toggleNav}
              className={window.location.pathname === "/account" ? "nav-link active" : "nav-link"}
              to="/account"
            >
          Account
            </Link>
          </li>

          <li className="nav-item">
          <Link
            onClick={this.toggleNav}
            className={window.location.pathname === "/logout" ? "nav-link active" : "nav-link"}
            to="/logout"
          >
        Log-Out
          </Link>
        </li>

          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;