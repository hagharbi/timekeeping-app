import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { withStyles } from '@material-ui/core/styles';
import { updateUserDetails } from "../../actions/updateUserActions";
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

class TextFields extends React.Component {

    constructor() {
        super();
        this.state = {
            errors: {}
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log(this.state);
        const userData = {
            id: this.state._id,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
            phone: this.state.phone,
            address: this.state.address
        };
        console.log(userData)
        this.props.updateUserDetails(userData)
    };

    beginningState(objectFound, event) {
        this.setState({ userData: objectFound });
        console.log(this.state);
    }

    handleChange = e => {
        this.setState({
            user: Object.assign(
                {},
                this.state,
                { [e.target.id]: e.target.value }
            ),
        })
    }

    render() {
        const { classes } = this.props;
        // const { data } = this.props;
            
        return (
            <Grid container spacing={24}>
                <Grid item xs={1} sm={5} md={3}>
                    <Paper className={classes.paper}></Paper>
                </Grid>
                <Grid item sm={7} lg={9}>
                    <h5>User Settings</h5>
                    <form className={classes.container} onSubmit={this.handleSubmit} noValidate autoComplete="off">
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <TextField
                                required
                                id="firstName"
                                label="First Name"
                                className={classes.textField}
                                value={this.state.firstName}
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
                                value={this.state.lastName}
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
                                value={this.state.email}
                                className={classes.textField}
                                onChange={this.handleChange}
                                InputProps={{ disableUnderline: true, }}
                                margin="normal"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <TextField
                                required
                                id="password"
                                label="Password"
                                value={this.state.password}
                                className={classes.textField}
                                autoComplete="current-password"
                                onChange={this.handleChange}
                                InputProps={{ disableUnderline: true, }}
                                margin="normal"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <TextField
                                id="phone"
                                label="Phone"
                                value={this.state.phone}
                                placeholder="xxx-xxx-xxxx"
                                className={classes.textField}
                                onChange={this.handleChange}
                                InputProps={{ disableUnderline: true, }}
                                margin="normal"
                            />
                        </Grid>

                        <Grid item xs={12}>

                            <Button variant="contained" type="submit" size="large" color="primary" className={classes.margin} style={{ "marginTop": 15 }} onClick={this.handleSubmit}>SUBMIT</Button>

                        </Grid>

                    </form>
                </Grid>
            </Grid>
        )
    }
    
}

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