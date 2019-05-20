import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";
import { findAllProjectDetails } from "../actions/projects/findAllProjectActions";
import ResponsiveDrawer from "../components/ResponsiveDrawer/ResponsiveDrawer";
import TextFields2 from "../components/editProjectFields/editProjectFields";

class EditProjects extends Component {
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
    this.props.findAllProjectDetails(userData);
  };

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
    if(!this.props.allProjectDetails) {
      return null
    }
    else {

      const { data } = this.props.allProjectDetails;
      
      return (
        <div >
            <ResponsiveDrawer />
            <div>
              <TextFields2 projects={{ data }}/>
            </div> 
        </div>
        
      );
    }
  }
};


EditProjects.propTypes = {
  findAllProjectDetails: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  allProjectDetails: PropTypes.object.isRequired,
  };

const mapStateToProps = state => ({
  auth: state.auth,
  userDetails: state.findUser.userDetails,
  findAllProjects: state.findAllProjects,
  allProjectDetails: state.findAllProjects.allProjectDetails,
});
  
export default connect(
  mapStateToProps,
  { logoutUser, findAllProjectDetails }
)(EditProjects);