import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { findUserDetails } from "../../actions/findUserActions";
import MiniDrawer from "../MiniDrawer/MiniDrawer";

class Dashboard extends Component {

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
    console.log('componentdid', this.props.auth.user.id)
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
    const { user } = this.props.auth;
    const { data } = this.props.userDetails;
    console.log(user);
    console.log(data)
    return (
      <div>
        <MiniDrawer />
      </div >
      // <div style={{ height: "75vh" }} className="container valign-wrapper">
      //   <div className="row">
      //     <div className="col s12 center-align">
      //       <h4>
      //         <b>Hey there,</b> {user.firstName} 
      //         <p className="flow-text grey-text text-darken-1">
      //           <span> You made it to SUMIT {""} 👏 </span>
      //         </p>
      //       </h4>
      //       <button
      //         style={{
      //           width: "150px",
      //           borderRadius: "3px",
      //           letterSpacing: "1.5px",
      //           marginTop: "1rem"
      //         }}
      //         onClick={this.onLogoutClick}
      //         className="btn btn-large waves-effect waves-light hoverable blue accent-3"
      //       >
      //         Logout
      //       </button>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

Dashboard.propTypes = {
  findUserDetails: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  userDetails: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  userDetails: state.findUser.userDetails
});

/* const mapDispatchToProps = dispatch => {
  return {
    findUserDetails: findUserDetails // you should send your action like this
  };
}; */

export default connect(
  mapStateToProps,
  { logoutUser, findUserDetails }
)(Dashboard);