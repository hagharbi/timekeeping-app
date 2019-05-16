import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { withStyles } from '@material-ui/core/styles';
import { createClientDetails } from "../../actions/createClientActions";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 300,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 300,
    },
});

class NewClientFields extends React.Component {

    constructor() {
        super();
        this.state = {
            userId: "",
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            altEmail: "",
            altPhone: "",
            category: "",
            company: "",
            notes: "",
            address: {
                street: "",
                city: "",
                state: "",
                zip: "",
            },
            errors: {}
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        const clientData = {
            userId: this.state.client._id,
            firstName: this.state.client.firstName,
            lastName: this.state.client.lastName,
            email: this.state.client.email,
            phone: this.state.client.phone,
            altEmail: this.state.client.altEmail,
            altPhone: this.state.client.altPhone,
            category: this.state.client.category,
            company: this.state.client.company,
            notes: this.state.client.notes,
            address: {
                street: this.state.client.address.street,
                city: this.state.client.address.city,
                state: this.state.client.address.state,
                zip: this.state.client.address.zip,
            }
        };
        console.log(clientData);
        this.props.createClientDetails(clientData);

    };
    
    // beginningState(objectFound, event) {
    //     this.setState({ clientData: objectFound });
    //     console.log(this.state);
    // }

    handleChange = e => {
        this.setState({
            clientData: Object.assign(
                {},
                this.state.clientData,
                { [e.target.id]: e.target.value }
            ),
        })
        console.log(this.state.clientData)
    }

    render() {
        const { classes } = this.props;
        const { data } = this.props.clients.clientData;

        if (!data) {
            console.log(null)
            return null
        }

        else {
            var objectFound = data;

            if (!this.state.clientData) {
                this.beginningState(objectFound);
                return null
            }
            else {

            return (
                <Grid container spacing={24}>
                    <Grid item xs={1} sm={5} md={3}>
                        <Paper className={classes.paper}></Paper>
                    </Grid>
                    <Grid item sm={7} lg={9}>
                        <h4>New Client</h4>
                        <form className={classes.container} onSubmit={this.handleSubmit} noValidate autoComplete="off">

                            <Grid item xs={12} style={{ "margin-top": "40px" }}>
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

                            <Grid item xs={12} style={{ "margin-top": "40px" }}>
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

                            <Grid item xs={12} style={{ "margin-top": "40px" }}>
                                <h6>Address</h6>
                            </Grid>

                            <Grid item xs={12} sm={6} md={4} lg={3}>
                                <TextField
                                    id="address.street"
                                    label="Street Address"
                                    value={this.state.client.address.street}
                                    className={classes.textField}
                                    onChange={this.handleChange}
                                    InputProps={{ disableUnderline: true, }}
                                    margin="normal"
                                />
                            </Grid>

                            <Grid item xs={12} sm={6} md={4} lg={3}>
                                <TextField
                                    id="address.city"
                                    label="City"
                                    value={this.state.client.address.city}
                                    className={classes.textField}
                                    onChange={this.handleChange}
                                    InputProps={{ disableUnderline: true, }}
                                    margin="normal"
                                />
                            </Grid>

                            <Grid item xs={12} sm={6} md={3} lg={3}>
                                <TextField
                                    id="address.state"
                                    label="State"
                                    value={this.state.client.address.state}
                                    className={classes.textField}
                                    onChange={this.handleChange}
                                    InputProps={{ disableUnderline: true, }}
                                    margin="normal"
                                />
                            </Grid>

                            <Grid item xs={12} sm={6} md={2} lg={3}>
                                <TextField
                                    id="address.zip"
                                    label="Zip Code"
                                    value={this.state.client.address.zip}
                                    className={classes.textField}
                                    onChange={this.handleChange}
                                    InputProps={{ disableUnderline: true, }}
                                    margin="normal"
                                />
                            </Grid>

                            <Grid item xs={12} style={{ "margin-top": "40px" }}>
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
                            </Grid>
                            <Grid item xs={6} sm={9} style={{ "margin-top": "30px" }}>

                                <Button variant="contained" type="submit" size="large" color="primary" className={classes.margin} style={{ "marginTop": 15 }} onClick={this.handleSubmit}>SAVE</Button>

                            </Grid>

                        </form>
                    </Grid>
                </Grid>
            )
        }}
    }
}

NewClientFields.propTypes = {
    classes: PropTypes.object.isRequired,
    createClientDetails: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    userDetails: state.findUser.userDetails
});


export default connect(
    mapStateToProps,
    { createClientDetails }
)(withStyles(styles)(NewClientFields))