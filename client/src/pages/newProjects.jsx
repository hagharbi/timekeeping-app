import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";
import { findUserDetails } from "../actions/findUserActions";
import ResponsiveDrawer from "../components/ResponsiveDrawer/ResponsiveDrawer";
import NewProjectFields from "../components/newProjectFields/newProjectFields";

class NewProjects extends Component {
constructor() {
    super();
    this.state = {
      errors: {}
    };
  };

  componentDidMount() {
    const userData = {
      id: this.props.auth.user.id
    };
    this.props.findUserDetails(userData);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  };

  onLogoutClick = e => {
      e.preventDefault();
      this.props.logoutUser();
    };

  render() {

    if(!this.props.userDetails) {
      return null
    }
    else {

      const { data } = this.props.userDetails;

      return (
        <div >
            <ResponsiveDrawer />
            <div>
              <NewProjectFields projects={{ data }}/>
            </div> 
        </div>
        
      );
    }
  }
};


NewProjects.propTypes = {
  findUserDetails: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  userDetails: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  userDetails: state.findUser.userDetails
});

export default connect(
mapStateToProps,
{ logoutUser, findUserDetails }
)(NewProjects);