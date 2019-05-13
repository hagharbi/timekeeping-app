import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

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

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    state = {
        name: 'Cat in the Hat2',
        age: '',
        multiline: 'Controlled',
        currency: 'EUR',
      };

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

            console.log(id);

            var elementPos = data.clients.map(function(x) {return x._id; }).indexOf(id); 
            
            var objectFound = data.clients[elementPos];

            console.log(objectFound)
            
            return (
                <Grid container spacing={24}>
                 <Grid item xs ={1} sm={5} md={3}>
                    <Paper className={classes.paper}></Paper>
                </Grid>
                <Grid item sm={7} lg={9}>
                <h5>Client Settings</h5>
                    <form className={classes.container} noValidate autoComplete="off">

                        <TextField
                            required
                            id="standard-name"
                            label="First Name"
                            className={classes.textField}
                            value={data.clients[elementPos].firstName}
                            onChange={this.handleChange('name')}
                            margin="normal"
                        />

                        <TextField
                            required
                            id="standard-name"
                            label="Last Name"
                            className={classes.textField}
                            value={data.clients[elementPos].lastName}
                            onChange={this.handleChange('name')}
                            margin="normal"
                        />

                        <TextField
                            required
                            id="standard-required"
                            label="Email"
                            value={data.clients[elementPos].email}
                            className={classes.textField}
                            margin="normal"
                        />

                        <TextField
                            id="standard-required"
                            label="Phone"
                            value={data.clients[elementPos].phone}
                            placeholder="xxx-xxx-xxxx"
                            className={classes.textField}
                            margin="normal"
                        />

                        <TextField
                            id="standard-required"
                            label="Alt Email"
                            value={data.clients[elementPos].altEmail}
                            className={classes.textField}
                            margin="normal"
                        />                       

                        <TextField
                            id="standard-required"
                            label="Alt Phone"
                            value={data.clients[elementPos].altPhone}
                            placeholder="xxx-xxx-xxxx"
                            className={classes.textField}
                            margin="normal"
                        />

{/*                         <TextField
                            id="standard-required"
                            label="Street Address"
                            value={data.clients[elementPos].address.street}
                            className={classes.textField}
                            margin="normal"
                        />

                        <TextField
                            id="standard-required"
                            label="City"
                            value={data.clients[elementPos].address.city}
                            className={classes.textField}
                            margin="normal"
                        />

                        <TextField
                            id="standard-required"
                            label="State"
                            value={data.clients[elementPos].address.state}
                            className={classes.textField}
                            margin="normal"
                        />

                        <TextField
                            id="standard-required"
                            label="Zip Code"
                            value={data.clients[elementPos].address.zip}
                            className={classes.textField}
                            margin="normal"
                        /> */}


                        <TextField
                            id="standard-required"
                            label="Category"
                            value={data.clients[elementPos].category}
                            className={classes.textField}
                            margin="normal"
                        />

                        
                        <TextField
                            id="standard-required"
                            label="Title"
                            value={data.clients[elementPos].title}
                            className={classes.textField}
                            margin="normal"
                        />

                    </form>
                    </Grid>
                </Grid>
            )
        }
    }
}

TextFields1.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(TextFields1);