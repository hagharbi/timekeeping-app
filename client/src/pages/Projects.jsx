import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";
import { findUserDetails } from "../actions/findUserActions";
import ResponsiveDrawer from "../components/ResponsiveDrawer/ResponsiveDrawer";
import ProjectTable from "../components/ProjectTable/ProjectTable";
import Grid from '@material-ui/core/Grid';
// import Divider from '@material-ui/core/Divider';  <--- defined but never used,  again! Leave commented out until it is needed

class Projects extends Component {

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
        // console.log(data)
        return (
            <div>
                <ResponsiveDrawer />
                <Grid>
                    <ProjectTable projects={{ data }} />
                </Grid>
            </div >
        );
    }
}

Projects.propTypes = {
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
)(Projects);