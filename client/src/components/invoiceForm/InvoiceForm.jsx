import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import ReactToPrint from "react-to-print";
import { withStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
// import "./style.css"
// import { createInvoiceDetails } from "../../actions/createInvoiceActions";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Divider } from "@material-ui/core";

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
    h6: {
        marginBottom: "1rem",
    }
});

class InvoiceFields extends React.Component {

    constructor() {
        super();
        this.state = {
            errors: {}
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        const userData = {
            // userId: this.state.userData._id,
            firstName: this.state.userData.firstName,
            lastName: this.state.userData.lastName,
            email: this.state.userData.email,
            phone: this.state.userData.phone,
            address: {
                street: this.state.user.address.street,
                city: this.state.user.address.city,
                state: this.state.user.address.state,
                zip: this.state.user.address.zip,
            }
        };
        console.log(userData);
        this.props.updateUserDetails(userData);


        const clientData = {
            // userId: this.state.client.userId,
            company: this.state.client.company,
            firstName: this.state.client.firstName,
            lastName: this.state.client.lastName,
            email: this.state.client.email,
            phone: this.state.client.phone,
        };
        console.log(clientData);
        this.props.createClientDetails(clientData);

    };

    //USER STATE
    beginningState(objectFound, event) {
        this.setState({ userData: objectFound });
        console.log(this.state);
    }

    handleChange = e => {
        this.setState({
            userData: Object.assign(
                {},
                this.state.userData,
                { [e.target.id]: e.target.value }
            ),
        })
    }

    // CLIENT STATE
    beginningState(id) {
        this.setState({
            client:
            {
                // userId: id,
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                // altEmail: "",
                // altPhone: "",
                // category: "",
                company: "",
                notes: [""],
                // address: {
                //     street: "",
                //     city: "",
                //     state: "",
                // }
            }
        });
        console.log(this.state);
    }

    handleChange = e => {
        this.setState({
            client: Object.assign(
                {},
                this.state.client,
                { [e.target.id]: e.target.value }
            ),
        })
        console.log(this.state.client)
    }

    render() {
        const { classes } = this.props;
        // const { data } = this.props.user;

        // if (!data) {
        //     console.log(null)
        //     return null
        // }

        // else {
        //     // console.log(data)
        //     if (!this.state.client) {
        //         this.beginningState(data._id);
        //         return null
        //     }
        //     else {

        return (
            <Grid container spacing={24}>
                <Grid item xs={2} sm={4} md={3} lg={2}>
                    <Paper className={classes.paper}></Paper>
                </Grid>
                <Grid item xs={10} sm={8} md={9} lg={9}>
                    <h5 style={{ margin: '3rem auto 2rem -2rem' }}><strong>Invoice</strong></h5>
                    <form className={classes.container} onSubmit={this.handleSubmit} noValidate autoComplete="off">

                        {/* CLIENT INFO */}
                        <Grid item xs={12} >
                            <h6>BILL TO:</h6>

                        </Grid>

                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <TextField
                                required
                                id="company"
                                label="Company"
                                // value={this.state.client.company}
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
                                // value={this.state.client.email}
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
                                // value={this.state.client.phone}
                                placeholder="xxx-xxx-xxxx"
                                className={classes.textField}
                                onChange={this.handleChange}
                                InputProps={{ disableUnderline: true, }}
                                margin="normal"
                            />
                        </Grid>

                        {/* <Grid item xs={12} style={{ "marginTop": "1rem" }}>
                            <h6>Point of Contact</h6>
                        </Grid> */}

                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <TextField
                                id="firstName"
                                label="First Name"
                                className={classes.textField}
                                // value={this.state.client.firstName}
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
                                // value={this.state.client.lastName}
                                onChange={this.handleChange}
                                InputProps={{ disableUnderline: true, }}
                                margin="normal"
                            />
                        </Grid>

                        {/* USER INFO */}
                        <Grid item xs={12} style={{ marginTop: "3rem" }}>
                            <h6>FROM:</h6>
                        </Grid>

                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <TextField
                                required
                                id="firstName"
                                label="First Name"
                                className={classes.textField}
                                // value={this.state.userData.firstName}
                                onChange={this.handleChange}
                                InputProps={{ disableUnderline: true, }}
                                margin="normal"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <TextField
                                required
                                id="lastName"
                                label="Last Name"
                                className={classes.textField}
                                // value={this.state.userData.lastName}
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
                                // value={this.state.userData.email}
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
                                // value={this.state.userData.phone}
                                placeholder="xxx-xxx-xxxx"
                                className={classes.textField}
                                onChange={this.handleChange}
                                InputProps={{ disableUnderline: true, }}
                                margin="normal"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={12}>
                            <ReactToPrint
                                trigger={() => (
                                    <Link
                                        to="/">
                                        <Button
                                            // onClick={}
                                            variant="contained" color="secondary" className={classes.button}
                                            style={{ marginTop: "3rem", "marginLeft": 8 }}
                                        >
                                            Print Invoice
                                            </Button>
                                    </Link>
                                )}
                                content={() => this.componentRef}
                            />
                        </Grid>
                        {/* <Grid item xs={6} sm={9} style={{ "marginTop": "30px" }}>
                                <Button variant="contained" type="submit" size="medium" color="secondary" className={classes.margin} style={{ "marginTop": 15 }} onClick={this.handleSubmit}>Print Invoice</Button>
                            </Grid> */}
                    </form>
                    {/* </Paper> */}
                </Grid>
            </Grid>
        );
        //     }
        // }

    }
}


InvoiceFields.propTypes = {
    classes: PropTypes.object.isRequired,
    // createInvoiceDetails: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    userDetails: state.findUser.userDetails
});


export default connect(
    mapStateToProps,
    // { createInvoiceDetails }
)(withStyles(styles)(InvoiceFields))
