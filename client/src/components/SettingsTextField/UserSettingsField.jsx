import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { withStyles } from '@material-ui/core/styles';
import { updateUserDetails } from "../../actions/updateUserActions";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import '../layout/landingPage/imagesCode/global.css';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 300,
        // marginTop: "1rem",
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 300,
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 300,
        marginTop: 31
    },
    selectEmpty: {
        marginTop: theme.spacing.unit,
    },
});

class TextFields extends React.Component {

    constructor() {
        super();
        this.state = {
            errors: {}
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleSubmit(event) {
        event.preventDefault()
        console.log(this.state);
        const userData = {
            userId: this.state.userData._id,
            firstName: this.state.userData.firstName,
            lastName: this.state.userData.lastName,
            email: this.state.userData.email,
            phone: this.state.userData.phone,
            description: this.state.userData.description,
            category: this.state.userData.category,
            title: this.state.userData.title,
            street: this.state.userData.street,
            city: this.state.userData.city,
            state: this.state.userData.state,
            zip: this.state.userData.zip,
        };
        this.props.updateUserDetails(userData);
    };

    beginningState(objectFound, event) {
        this.setState({ userData: objectFound });
    };

    handleChange = e => {
        this.setState({
            userData: Object.assign(
                {},
                this.state.userData,
                { [e.target.id]: e.target.value }
            ),
        })
    };

    render() {
        const { classes } = this.props;
        const { data } = this.props.user;

        if (!data) {
            return null
        }

        else {
            var objectFound = data;

            if (!this.state.userData) {
                this.beginningState(objectFound);
                return null
            }
            else {

                return (
                    <div className={classes.root}>
                        <Grid container spacing={24}>
                            <Grid item xs={2} sm={4} md={3} lg={2}>
                                <Paper className={classes.paper}></Paper>
                            </Grid>
                            <Grid item xs={10} sm={8} md={9} lg={8}>
                                <h4><strong>User Settings</strong></h4>
                                <form className={classes.container} onSubmit={this.handleSubmit} noValidate autoComplete="off">

                                    <Grid item xs={12} >
                                        <h6>Basic Info</h6>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={4} lg={3}>
                                        <TextField
                                            required
                                            id="firstName"
                                            label="First Name"
                                            className={classes.textField}
                                            value={this.state.userData.firstName}
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
                                            value={this.state.userData.lastName}
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
                                            value={this.state.userData.email}
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
                                            value={this.state.userData.phone}
                                            placeholder="xxx-xxx-xxxx"
                                            className={classes.textField}
                                            onChange={this.handleChange}
                                            InputProps={{ disableUnderline: true, }}
                                            margin="normal"
                                        />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <h6>Address</h6>
                                    </Grid>

                                    <Grid item xs={12} sm={6} md={4} lg={3}>
                                        <TextField
                                            id="street"
                                            label="Street Address"
                                            value={this.state.userData.street}
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
                                            value={this.state.userData.city}
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
                                            value={this.state.userData.state}
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
                                            value={this.state.userData.zip}
                                            className={classes.textField}
                                            onChange={this.handleChange}
                                            InputProps={{ disableUnderline: true, }}
                                            margin="normal"
                                        />
                                    </Grid>

                                    {/* <Grid item xs={12} sm={6} md={4} lg={3} style={{ "marginTop": "-1px" }}>
                                        <FormControl className={classes.formControl}>
                                            <InputLabel htmlFor="timezone">Timezone</InputLabel>
                                            <Select
                                                value={this.state.userData.timeZone}
                                                onChange={this.handleChangeDropdown}
                                                name="timezone"
                                                label=""
                                                input={
                                                    <Input
                                                        labelWidth={this.state.labelWidth}
                                                        name="timezone"

                                                    //id="outlined-age-simple"
                                                    />
                                                }
                                            >
                                                <MenuItem value={"-9"}>Alaska Standard Time</MenuItem>
                                                <MenuItem value={"-8"}>Pacific Standard Time</MenuItem>
                                                <MenuItem value={"-7"}>Mountain Standard Time</MenuItem>
                                                <MenuItem value={"-6"}>Central Standard Time</MenuItem>
                                                <MenuItem value={"-5"}>Eastern Standard Time</MenuItem>
                                            </Select>
                                            <FormHelperText>Please select your timezone</FormHelperText>
                                        </FormControl>

                                    </Grid> */}

                                    <Grid item xs={12}>
                                        <h6>Professional Details</h6>
                                    </Grid> 

                                    <Grid item xs={12} sm={6} md={4} lg={3}>
                                        <TextField
                                            id="title"
                                            label="Title"
                                            value={this.state.userData.title}
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
                                            value={this.state.userData.category}
                                            className={classes.textField}
                                            onChange={this.handleChange}
                                            InputProps={{ disableUnderline: true, }}
                                            margin="normal"
                                        />
                                    </Grid>

                                    {/* <Grid item xs={12} sm={6} md={4} lg={3}>
                                    <FormControl className={classes.formControl}>
                                        <InputLabel htmlFor="timezone">Timezone</InputLabel>
                                        <Select
                                            value={this.state.userData.timeZone}
                                            onChange={this.handleChangeDropdown}
                                            name="timezone"
                                            label=""
                                            input={
                                                <Input
                                                    labelWidth={this.state.labelWidth}
                                                    name="timezone"

                                                //id="outlined-age-simple"
                                                />
                                            }
                                        >
                                            <MenuItem value={"-9"}>Alaska Standard Time</MenuItem>
                                            <MenuItem value={"-8"}>Pacific Standard Time</MenuItem>
                                            <MenuItem value={"-7"}>Mountain Standard Time</MenuItem>
                                            <MenuItem value={"-6"}>Central Standard Time</MenuItem>
                                            <MenuItem value={"-5"}>Eastern Standard Time</MenuItem>
                                        </Select>
                                        <FormHelperText>Please select your timezone</FormHelperText>
                                    </FormControl>

                                </Grid> */}

                                    <Grid item xs={12} sm={6} md={4} lg={6}>
                                        <TextField
                                            id="description"
                                            label="Description"
                                            multiline
                                            rows="8"
                                            value={this.state.userData.description}
                                            onChange={this.handleChange}
                                            className={classes.textField}
                                            margin="dense"
                                        />
                                    </Grid>

                                    <Grid item xs={12} style={{ marginTop: "3rem", "marginLeft": 8 }}>
                                        <Button variant="contained" type="submit" size="large" color="primary" className={classes.margin} onClick={this.handleSubmit}>Update</Button>
                                    </Grid>

                                </form>
                            </Grid>
                        </Grid>
                    </div>
                )
            }
        }
    }
};

TextFields.propTypes = {
    classes: PropTypes.object.isRequired,
    updateUserDetails: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    userDetails: state.findUser.userDetails
});


export default connect(
    mapStateToProps,
    { updateUserDetails }
)(withStyles(styles)(TextFields))