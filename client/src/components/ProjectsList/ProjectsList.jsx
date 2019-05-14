import React from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames';  <--- defined but never used,  again! Leave commented out until it is needed
import { withStyles } from '@material-ui/core/styles';
// import MenuItem from '@material-ui/core/MenuItem';  <--- defined but never used,  again! Leave commented out until it is needed
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Fab from '@material-ui/core/Fab';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import "./projectlist.css";

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        flexShrink: 0,
        color: theme.palette.text.secondary,
        marginLeft: theme.spacing.unit * 2.5,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
    formControl: {
        margin: theme.spacing.unit,
        Width: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },

});

 // Set Priority color to change according to the user selection  <--- defined but never used,  again! Leave commented out until it is needed
// let priorityColor = colors => ({

// })

// Set Status field color to change according to the user selection  <--- defined but never used,  again! Leave commented out until it is needed
// let statusColor = colors => ({

// })

class TextFields extends React.Component {
    state = {
        project: '',
        client: '',
        category: '',
        status: '',
        priority: '',
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    render() {
        const { classes } = this.props;

        return (
            <form
                style={{
                    margin: "0 0 0 18%",
                    width: "80%",
                }}>

                <TextField
                    required
                    id="standard-required"
                    label="Title"
                    className={classes.textField}
                    value={this.state.name}
                    onChange={this.handleChange('name')}
                    margin="normal"
                />

                <TextField
                    required
                    id="standard-required"
                    label="Client"
                    defaultValue=""
                    className={classes.textField}
                    margin="normal"
                />

                <TextField
                    required
                    id="standard-required"
                    label="Category"
                    defaultValue=""
                    className={classes.textField}
                    margin="normal"
                />
                <FormControl id="projDropdowns" className={classes.formControl}
                    style={{
                        margin: "1rem auto 0 2rem",
                    }}>
                    <InputLabel htmlFor="age-native-simple">Status</InputLabel>
                    <Select
                        native
                        value={this.state.status}
                        onChange={this.handleChange('status')}
                        inputProps={{
                            name: 'status',
                            id: '',
                        }}
                    >
                        <option value="" />
                        <option>Active</option>
                        <option>Inactive</option>
                        <option>On Hold</option>
                    </Select>
                </FormControl>

                <FormControl id="projDropdowns" className={classes.formControl}
                    style={{
                        margin: "1rem auto 0 2rem",
                    }}>
                    <InputLabel htmlFor="priority-native-simple">Priority</InputLabel>
                    <Select
                        native
                        value={this.state.priority}
                        onChange={this.handleChange('priority')}
                        inputProps={{
                            name: 'priority',
                            id: '',
                        }}
                    >
                        <option value="" />
                        <option>High</option>
                        <option>Medium</option>
                        <option>Low</option>
                    </Select>
                </FormControl>

                <Fab size="small" color="secondary" aria-label="Play" className={classes.margin}
                    style={{
                        margin: "3rem auto 0 1rem",
                        backgroundColor: "#999",
                    }}
                >
                    <PlayArrowIcon />
                </Fab>

            </form>
        );
    }
}

TextFields.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);