import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { withStyles } from '@material-ui/core/styles';

import { createProjectDetails } from "../../actions/projects/createProjectActions";
import { createClientDetails } from "../../actions/createClientActions";

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

//Form
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';

//Dialog
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

// <----- Media Queries
import "./newprojects.css";

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textFieldSmall: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 150,
        marginTop: ".5rem",
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 300,
        marginTop: ".5rem",
    },
    textFieldLarge: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 400,
        marginTop: ".5rem",
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 300,
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 150,
        marginTop: ".5rem",

    },
    formControlLarge: {
        margin: theme.spacing.unit,
        width: 300,
        marginTop: ".5rem",

    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
});

class NewProjectFields extends React.Component {

    constructor() {
        super();
        this.state = {
            errors: {},
            open: false,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.cancelClient = this.cancelClient.bind(this);
        this.handleClientSubmit = this.handleClientSubmit.bind(this);
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleSubmit(event) {
        event.preventDefault();
        const projectData = {
            title: this.state.project.title,
            status: this.state.project.status,
            priority: this.state.project.priority,
            rate: this.state.project.rate,
            timeEst: this.state.project.timeEst,
            dueDate: this.state.project.dueDate,
            category: this.state.project.category,
            notes: this.state.project.notes,
            userId: this.state.project.userId,
            clientID: this.state.project.clientID
        };

        this.props.createProjectDetails(projectData);
        window.location.href = '/projects'
    };

    handleClientSubmit(event) {
        event.preventDefault();

        const clientData = {
            userId: this.state.client.userId,
            email: this.state.client.email,
            company: this.state.client.company,
        };

        this.props.createClientDetails(clientData);
        this.setState({ open: false });
        window.location = "/newproject"
    };

    cancelClient(event) {
        event.preventDefault()
        window.location.href = '/newproject'
    };

    cancelProject = (event) => {
        event.preventDefault();
        window.location.href = '/projects'
    }

    beginningState(userId, event) {
        this.setState({
            project: {
                id: "",
                title: "",
                status: "pending",
                priority: "low",
                rate: 0,
                timeEst: 1,
                dueDate: "",
                category: "",
                notes: "",
                userId: userId,
                clientID: ""
            },
            client: {
                userId: userId,
                company: "",
                email: ""
            }
        });
    };

    handleChange = e => {
        this.setState({
            project: Object.assign(
                {},
                this.state.project,
                { [e.target.id]: e.target.value }
            ),
        })
    };

    handleClientChange = e => {
        this.setState({
            client: Object.assign(
                {},
                this.state.client,
                { [e.target.id]: e.target.value }
            ),
        })
    };

    handleChangeDropdown = e => {
        this.setState({
            project: Object.assign(
                {},
                this.state.project,
                { [e.target.name]: e.target.value }
            ),
        })
    };

    render() {
        const { classes } = this.props;
        const { data } = this.props.projects;

        if (!data) {
            return null
        }

        else {

            if (!this.state.project) {
                this.beginningState(data._id);
                return null
            }
            else {

                return (
                    <Grid container spacing={24} md={12}>
                        <Grid item xs={1} sm={4} md={3} lg={2}>
                            <Paper className={classes.paper}></Paper>
                        </Grid>


                        <Grid item sm={7} lg={9}>
                            <h4><strong>New Project</strong></h4>
                            <form className={classes.container} onSubmit={this.handleSubmit} noValidate autoComplete="off">

                                <Grid item xs={12}>
                                    <h6>Is this project for an existing client?</h6>
                                </Grid>

                                <Grid item xs={6} sm={4} md={4} lg={4}>
                                    <FormControl className={classes.formControlLarge}>
                                        <Select
                                            value={this.state.project.clientID}
                                            onChange={this.handleChangeDropdown}
                                            name="clientID"
                                            input={
                                                <Input
                                                    labelWidth={this.state.labelWidth}
                                                    name="clientID"
                                                //id="outlined-age-simple"
                                                />
                                            }
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            {data.clients
                                                .filter(clients => { return clients.active === true })
                                                .sort((a, b) => (a.company < b.company ? -1 : 1))
                                                .map(clients => (
                                                    <MenuItem value={clients._id}>{clients.company}</MenuItem>
                                                ))
                                            }
                                        </Select>
                                    </FormControl>
                                </Grid>

                                <Grid item xs={12} sm={12} md={3} lg={3}>
                                    <Button variant="contained" color="primary" id="newProjects_newClient-btn" onClick={this.handleClickOpen}>
                                        + New Client
                                    </Button>

                                    <Dialog
                                        open={this.state.open}
                                        onClose={this.handleClose}
                                        aria-labelledby="form-dialog-title"
                                    >
                                        <DialogTitle id="form-dialog-title">Create New Client</DialogTitle>
                                        <DialogContent>
                                            <DialogContentText>
                                                Prior to create a project, please enter the client information then select it from the dropdown
                                                </DialogContentText>
                                            <TextField
                                                required
                                                id="company"
                                                label="Company"
                                                value={this.state.client.company}
                                                className={classes.textField}
                                                onChange={this.handleClientChange}
                                                InputProps={{ disableUnderline: true, }}
                                                margin="normal"
                                            />
                                            <TextField
                                                required
                                                id="email"
                                                label="Email"
                                                value={this.state.client.email}
                                                className={classes.textField}
                                                onChange={this.handleClientChange}
                                                InputProps={{ disableUnderline: true, }}
                                                margin="normal"
                                            />
                                        </DialogContent>
                                        <DialogActions>
                                            <Button onClick={this.handleClose} color="primary">
                                                Cancel
                                                </Button>
                                            <Button variant="contained" onClick={this.handleClientSubmit} color="primary">
                                                Save
                                            </Button>
                                        </DialogActions>
                                    </Dialog>
                                </Grid>

                                <Grid item xs={12} >
                                    <h6>Project Details</h6>
                                </Grid>

                                <Grid item xs={12} sm={12} md={4} lg={3}>
                                    <TextField
                                        required
                                        id="title"
                                        label="Title"
                                        value={this.state.project.title}
                                        className={classes.textField}
                                        onChange={this.handleChange}
                                        InputProps={{ disableUnderline: true, }}
                                        margin="normal"
                                    />
                                </Grid>

                                <Grid item xs={6} sm={6} md={3} lg={2}>

                                    <FormControl className={classes.formControl}>
                                        <Select
                                            value={this.state.project.status}
                                            onChange={this.handleChangeDropdown}
                                            style={{ "marginTop": "32px" }}
                                            name="status"
                                            input={
                                                <Input
                                                    labelWidth={this.state.labelWidth}
                                                    name="status"
                                                //id="outlined-age-simple"
                                                />
                                            }
                                        >
                                            <MenuItem value="inactive">
                                                inactive
                                            </MenuItem>
                                            <MenuItem value="pending">pending</MenuItem>
                                            <MenuItem value={"in progress"}>in progress</MenuItem>
                                            <MenuItem value={"completed"}>completed</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>

                                <Grid item xs={6} sm={6} md={3} lg={2}>
                                    <FormControl className={classes.formControl}>
                                        <Select
                                            value={this.state.project.priority}
                                            onChange={this.handleChangeDropdown}
                                            name="priority"
                                            style={{ "marginTop": "32px" }}
                                            input={
                                                <Input
                                                    labelWidth={this.state.labelWidth}
                                                    name="priority"
                                                //id="outlined-age-simple"
                                                />
                                            }
                                        >
                                            <MenuItem value={"low"}>low</MenuItem>
                                            <MenuItem value={"medium"}>medium</MenuItem>
                                            <MenuItem value={"high"}>high</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>

                                <Grid item xs={12}>
                                    <h6>Time + Rate</h6>
                                </Grid>

                                {/* <Grid item xs ={12} sm={4} md={3} lg={3}>
                                <TextField
                                    id="dueDate"
                                    label="Due Date"
                                    type="date"
                                    className={classes.textField}
                                    value={this.state.project.dueDate}
                                    onChange={this.handleChange}
                                    InputProps={{ disableUnderline: true, }}
                                    InputLabelProps={{
                                        shrink: true
                                        }}
                                    margin="normal"
                                />
                                </Grid> */}

                                <Grid item xs={6} sm={3} md={2} lg={2}>
                                    <TextField
                                        id="timeEst"
                                        label="Estimated Hours"
                                        className={classes.textFieldSmall}
                                        type="number"
                                        value={this.state.project.timeEst}
                                        onChange={this.handleChange}
                                        InputProps={{ disableUnderline: true, }}
                                        margin="normal"
                                    />
                                </Grid>

                                <Grid item xs={6} sm={3} md={2} lg={2}>
                                    <TextField
                                        id="rate"
                                        label="Hourly Rate"
                                        className={classes.textFieldSmall}
                                        type="number"
                                        value={this.state.project.rate}
                                        onChange={this.handleChange}
                                        InputProps={{ disableUnderline: true, }}
                                        margin="normal"
                                    />
                                </Grid>

                                {/*  <Grid item xs={12} style={{"marginTop": "40px"}}>
                                        <h6>Notes</h6>
                                </Grid>

                                <Grid item xs ={12} id="newProject_notes-cont">
                                <TextField
                                    id="notes"
                                    multiline
                                    rows="8"
                                    value={this.state.project.notes}
                                    onChange={this.handleChange}
                                    className={classes.textFieldLarge}
                                    margin="dense"
                                />
                                </Grid> */}

                                <Grid item xs={6} sm={9} style={{ "marginTop": "3rem", "marginLeft": 8 }}>

                                    <Button variant="contained" type="submit" size="large" color="primary" className={classes.margin} onClick={this.handleSubmit}>SAVE</Button>

                                    <Button variant="outlined" type="submit" size="large" color="primary" className={classes.margin} style={{ "marginLeft": 15 }} onClick={this.cancelProject}>CANCEL</Button>

                                </Grid>

                            </form>
                        </Grid>

                    </Grid>
                )
            }
        }
    }
}

NewProjectFields.propTypes = {
    classes: PropTypes.object.isRequired,
    createProjectDetails: PropTypes.func.isRequired,
    createClientDetails: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    userDetails: state.findUser.userDetails
});


export default connect(
    mapStateToProps,
    { createProjectDetails, createClientDetails }
)(withStyles(styles)(NewProjectFields))