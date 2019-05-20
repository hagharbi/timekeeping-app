import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";
import { findAllProjectDetails } from "../actions/projects/findAllProjectActions";
import ResponsiveDrawer from "../components/ResponsiveDrawer/ResponsiveDrawer";
import ProjectTable from "../components/ProjectTable/ProjectTable";
import Grid from '@material-ui/core/Grid';

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
        this.props.findAllProjectDetails(userData)
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
        const { user } = this.props.auth;

        if(!this.props.allProjectDetails) {
            return null

        }
        else {
            const { data } = this.props.allProjectDetails;

            if(!data) {
                return null
            }
            else {
            return (
                <div>
                    <ResponsiveDrawer />
                    <Grid>
                        <ProjectTable projects={{ data }} user ={{ user }}/>
                    </Grid>
                </div >
            )};
        }
    }
}

Projects.propTypes = {
    findAllProjectDetails: PropTypes.func.isRequired,
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    allProjectDetails: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
    allProjectDetails: state.findAllProjects.allProjectDetails,
});

export default connect(
    mapStateToProps,
    { logoutUser, findAllProjectDetails }
)(Projects);