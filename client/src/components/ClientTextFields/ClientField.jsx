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

    constructor(){
        super();
        this.state = {
            errors: {}
          };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.archiveClient = this.archiveClient.bind(this);
      }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.client);
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
            address: {
                street: this.state.client.address.street,
                city: this.state.client.address.city,
                state: this.state.client.address.state,
                zip: this.state.client.address.zip,
            }
        };
        console.log(clientData);
        this.props.updateClientDetails(clientData);
        
    };

    archiveClient(event) {
        event.preventDefault()
        console.log(this.state)
        const clientData = {
            id: this.state.client._id
        };
        this.props.removeClientDetails(clientData);
        window.location.href = '/clients'
    }

    beginningState(objectFound, event) {
        this.setState({ client: objectFound });
        console.log(this.state);
    }

    handleChange = e => {
        this.setState({ client: Object.assign(
            {}, 
            this.state.client,
            { [e.target.id]: e.target.value }
          ),
        })
        console.log(this.state.client)
    }

    render() {
        const { classes } = this.props;
        const { data } = this.props.clients;

        if (!data) {
            console.log(null)
            return null
        }

        else {
            var a = document.createElement('a');
            a.href = window.location.href;
            
            var path;
           ['pathname'].forEach(function(k) {
                console.log(k+':', a[k]);
                console.log(a[k])
                path = a[k]
                return path
            });

            const id = path.replace("/clients/", "");

            var elementPos = data.clients.map(function(x) {return x._id; }).indexOf(id); 
            var objectFound = data.clients[elementPos];
            console.log(this.state.client)
            console.log(objectFound)

            if(!this.state.client) {
                this.beginningState(objectFound);
                return null
            }
            else {
            
            return (
                <Grid container spacing={24}>
                 <Grid item xs ={1} sm={5} md={3}>
                    <Paper className={classes.paper}></Paper>
                </Grid>
                <Grid item sm={7} lg={9}>
                    <Grid
                        justify="space-between"
                        container
                        spacing={-10}
                    >
                    <Grid item>
                        <h5>Client Profile</h5>
                    </Grid>
                    <Grid item>
                        <Link to="/clients" style= {{marginTop: "12px", color: "gray"}} className="btn-flat waves-effect">
                            < KeyboardBackspaceIcon style={{paddingTop: "12px"}}  / > Back to All Clients
                        </Link>
                    </Grid>
                </Grid>
                    <form className={classes.container} onSubmit={this.handleSubmit} noValidate autoComplete="off">

                        <Grid item xs={12} style={{"margin-top": "40px"}}>
                            <h6>Basic Info</h6>
                        </Grid>
                        <Grid item xs ={12} sm={6} md={4} lg={3}>
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

                        <Grid item xs ={12} sm={6} md={4} lg={3}>
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

                        <Grid item xs ={12} sm={6} md={4} lg={3}>
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

                        <Grid item xs={12} style={{"margin-top": "40px"}}>
                            <h6>POC Info</h6>
                        </Grid>

                        <Grid item xs ={12} sm={6} md={4} lg={3}>
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
                        <Grid item xs ={12} sm={6} md={4} lg={3}>
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

                        <Grid item xs={12} style={{"margin-top": "40px"}}>
                            <h6>Address</h6>
                        </Grid>

                        <Grid item xs ={12} sm={6} md={4} lg={3}>
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

                        <Grid item xs ={12} sm={6} md={4} lg={3}>
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

                        <Grid item xs ={12} sm={6} md={3} lg={3}>
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

                        <Grid item xs ={12} sm={6} md={2} lg={3}>
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

                        <Grid item xs={12} style={{"margin-top": "40px"}}>
                            <h6>Additional Info</h6>
                        </Grid>

                        <Grid item xs ={12} sm={6} md={4} lg={3}>
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

                        <Grid item xs ={12} sm={6} md={4} lg={3}>
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

                        <Grid item xs ={12} sm={6} md={4} lg={3}>
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

                        <Grid item xs ={12}>
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
                        
                        <Grid item xs ={6} sm={9} style={{"margin-top": "30px"}}>

                        <Button variant="contained" type="submit" size="large" color="primary" className={classes.margin} style={{"marginTop": 15}} onClick={this.handleSubmit}>SAVE</Button>

                        </Grid>

                        <Grid item xs ={6} sm={3} style={{"margin-top": "30px"}}>

                        <Button variant="outlined" type="submit" size="large" color="primary" className={classes.margin} style={{"marginTop": 15, align: "right"}} onClick={this.archiveClient}>ARCHIVE</Button>

                        </Grid>

                    </form>
                    </Grid>
                </Grid>
            )
        }}
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