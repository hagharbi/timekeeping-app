import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { withStyles } from '@material-ui/core/styles';
import { updateClientDetails } from "../../actions/updateClientActions";
import { removeClientDetails } from "../../actions/removeClientActions";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        marginTop: ".5rem",
        width: 300,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 300,
    },

});

class TextFields1 extends React.Component {

    constructor() {
        super();
        this.state = {
            errors: {}
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.archiveClient = this.archiveClient.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const clientData = {
            id: this.state.client._id,
            firstName: this.state.client.firstName,
            lastName: this.state.client.lastName,
            email: this.state.client.email,
            phone: this.state.client.phone,
            altEmail: this.state.client.altEmail,
            altPhone: this.state.client.altPhone,
            category: this.state.client.category,
            company: this.state.client.company,
            notes: this.state.client.notes,
            street: this.state.client.street,
            city: this.state.client.city,
            state: this.state.client.state,
            zip: this.state.client.zip,
        };
        this.props.updateClientDetails(clientData);
        window.location.href = '/clients';

    };

    archiveClient(event) {
        event.preventDefault();
        const clientData = {
            id: this.state.client._id
        };
        this.props.removeClientDetails(clientData);
        window.location.href = '/clients';
    };

    beginningState(objectFound, event) {
        this.setState({ client: objectFound });
    };

    handleChange = e => {
        this.setState({
            client: Object.assign(
                {},
                this.state.client,
                { [e.target.id]: e.target.value }
            ),
        });
    };

    render() {
        const { classes } = this.props;
        const { data } = this.props.clients;

        if (!data) {
            return null
        }

        else {
            var a = document.createElement('a');
            a.href = window.location.href;

            var path;
            ['pathname'].forEach(function (k) {
                path = a[k]
                return path
            });

            const id = path.replace("/clients/", "");

            var elementPos = data.clients.map(function (x) { return x._id; }).indexOf(id);
            var objectFound = data.clients[elementPos];

            if (!this.state.client) {
                this.beginningState(objectFound);
                return null
            }
            else {

                return (
                    <Grid container spacing={24}>
                        <Grid item xs={2} sm={4} md={3} lg={2}>
                            <Paper className={classes.paper}></Paper>
                        </Grid>
                        <Grid item xs={10} sm={8} md={9} lg={10}>
                            {/* <Paper className={classes.root}> */}
                            <Grid
                                justify="space-between"
                                container
                                spacing={24}
                            >
                                <Grid item>
                                    <h4><strong>Client Details</strong></h4>
                                </Grid>
                                <Grid item style={{ margin: '3rem 6rem 0 auto' }}>
                                    <Link to="/clients" style={{ color: "#037F8C" }}>
                                        < KeyboardBackspaceIcon style={{ paddingTop: "13px", color: "gray" }} /> Back to All Clients
                                </Link>
                                </Grid>
                            </Grid>
                            <form className={classes.container} onSubmit={this.handleSubmit} noValidate autoComplete="off">

                                <Grid item xs={12}>
                                    <h6>Basic Info</h6>
                                </Grid>
                                <Grid item xs={12} sm={6} md={4} lg={3}>
                                    <TextField
                                        required
                                        id="company"
                                        label="Company"
                                        value={this.state.client.company}
                                        className={classes.textField}
                                        onChange={this.handleChange}
                                        InputProps={{ disableUnderline: true, }}
                                        margin="normal"
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6} md={4} lg={3}>
                                    <TextField
                                        required
                                        id="email"
                                        label="Email"
                                        value={this.state.client.email}
                                        className={classes.textField}
                                        onChange={this.handleChange}
                                        InputProps={{ disableUnderline: true, }}
                                        margin="normal"
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6} md={4} lg={3}>
                                    <TextField
                                        id="phone"
                                        label="Phone"
                                        value={this.state.client.phone}
                                        placeholder="xxx-xxx-xxxx"
                                        className={classes.textField}
                                        onChange={this.handleChange}
                                        InputProps={{ disableUnderline: true, }}
                                        margin="normal"
                                    />
                                </Grid>

                                <Grid item xs={12} style={{ "marginTop": "1.2rem" }}>
                                    <h6>POC Info</h6>
                                </Grid>

                                <Grid item xs={12} sm={6} md={4} lg={3}>
                                    <TextField
                                        id="firstName"
                                        label="First Name"
                                        className={classes.textField}
                                        value={this.state.client.firstName}
                                        onChange={this.handleChange}
                                        InputProps={{ disableUnderline: true, }}
                                        margin="normal"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} md={4} lg={3}>
                                    <TextField
                                        id="lastName"
                                        label="Last Name"
                                        className={classes.textField}
                                        value={this.state.client.lastName}
                                        onChange={this.handleChange}
                                        InputProps={{ disableUnderline: true, }}
                                        margin="normal"
                                    />
                                </Grid>

                                <Grid item xs={12} style={{ "marginTop": "1.2rem" }}>
                                    <h6>Address</h6>
                                </Grid>

                                <Grid item xs={12} sm={6} md={4} lg={3}>
                                    <TextField
                                        id="street"
                                        label="Street Address"
                                        value={this.state.client.street}
                                        className={classes.textField}
                                        onChange={this.handleChange}
                                        InputProps={{ disableUnderline: true, }}
                                        margin="normal"
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6} md={4} lg={3}>
                                    <TextField
                                        id="city"
                                        label="City"
                                        value={this.state.client.city}
                                        className={classes.textField}
                                        onChange={this.handleChange}
                                        InputProps={{ disableUnderline: true, }}
                                        margin="normal"
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6} md={3} lg={3}>
                                    <TextField
                                        id="state"
                                        label="State"
                                        value={this.state.client.state}
                                        className={classes.textField}
                                        onChange={this.handleChange}
                                        InputProps={{ disableUnderline: true, }}
                                        margin="normal"
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6} md={2} lg={3}>
                                    <TextField
                                        id="zip"
                                        label="Zip Code"
                                        value={this.state.client.zip}
                                        className={classes.textField}
                                        onChange={this.handleChange}
                                        InputProps={{ disableUnderline: true, }}
                                        margin="normal"
                                    />
                                </Grid>

                                <Grid item xs={12} style={{ "marginTop": "1.2rem" }}>
                                    <h6>Additional Info</h6>
                                </Grid>

                                <Grid item xs={12} sm={6} md={4} lg={3}>
                                    <TextField
                                        id="altEmail"
                                        label="Alt Email"
                                        value={this.state.client.altEmail}
                                        className={classes.textField}
                                        onChange={this.handleChange}
                                        InputProps={{ disableUnderline: true, }}
                                        margin="normal"
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6} md={4} lg={3}>
                                    <TextField
                                        id="altPhone"
                                        label="Alt Phone"
                                        value={this.state.client.altPhone}
                                        placeholder="xxx-xxx-xxxx"
                                        className={classes.textField}
                                        onChange={this.handleChange}
                                        InputProps={{ disableUnderline: true, }}
                                        margin="normal"
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6} md={4} lg={3}>
                                    <TextField
                                        id="category"
                                        label="Category"
                                        value={this.state.client.category}
                                        className={classes.textField}
                                        onChange={this.handleChange}
                                        InputProps={{ disableUnderline: true, }}
                                        margin="normal"
                                    />
                                </Grid>
                                {/* 
                                <Grid item xs={12}>
                                    <TextField
                                        id="notes"
                                        label="Notes"
                                        multiline
                                        rows="8"
                                        value={this.state.client.notes}
                                        onChange={this.handleChange}
                                        className={classes.textField}
                                        margin="dense"
                                    />
                                </Grid> */}

                                <Grid item xs={6} sm={9} style={{ "marginTop": "3rem", "marginLeft": 8 }}>

                                    <Button variant="contained" type="submit" size="large" color="primary" className={classes.margin} onClick={this.handleSubmit}>SAVE</Button>

                                    <Button variant="outlined" type="submit" size="large" color="primary" className={classes.margin} style={{ "marginLeft": 15 }} onClick={this.archiveClient}>ARCHIVE</Button>

                                </Grid>

                            </form>
                            {/* </Paper> */}
                        </Grid>
                    </Grid>
                )
            }
        }
    }
}

TextFields1.propTypes = {
    classes: PropTypes.object.isRequired,
    updateClientDetails: PropTypes.func.isRequired,
    removeClientDetails: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    userDetails: state.findUser.userDetails
});


export default connect(
    mapStateToProps,
    { updateClientDetails, removeClientDetails }
)(withStyles(styles)(TextFields1))