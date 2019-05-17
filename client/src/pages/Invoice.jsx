import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";
import { findUserDetails } from "../actions/findUserActions";
import InvoiceFields from "../components/invoiceForm/InvoiceForm.jsx"
// import Invoices from "../components/invoiceForm/index";
import ResponsiveDrawer from "../components/ResponsiveDrawer/ResponsiveDrawer";
import Grid from '@material-ui/core/Grid';

class Invoice extends Component {

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
    //console.log('componentdid', this.props.auth.user.id)
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
      <div >
        <ResponsiveDrawer />
        <Grid>
          <InvoiceFields clients={{ data }} />
        </Grid>
      </div>

    );
  }
}

Invoice.propTypes = {
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
)(Invoice);