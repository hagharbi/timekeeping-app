import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { withStyles } from '@material-ui/core/styles';

import { updateProjectDetails } from "../../actions/projects/updateProjectActions";
import { removeProjectDetails } from "../../actions/projects/removeProjectActions";

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

//Form
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';


const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textFieldSmall: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 150,
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 300,
    },
    textFieldLarge: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 400,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 300,
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
        marginTop: 20
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
    h6: {
        marginBottom: "1rem",
    }
});

class TextFields2 extends React.Component {

    constructor() {
        super();
        this.state = {
            errors: {}
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.archiveClient = this.archiveClient.bind(this);
    };

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.project);
        const projectData = {
            id: this.state.project._id,
            title: this.state.project.title,
            status: this.state.project.status,
            priority: this.state.project.priority,
            rate: this.state.project.rate,
            timeEst: this.state.project.timeEst,
            dueDate: this.state.project.dueDate,
            category: this.state.project.category,
            notes: this.state.project.notes
        };

        this.props.updateProjectDetails(projectData);
        console.log(projectData);

    };

    archiveClient(event) {
        event.preventDefault()
        console.log(this.state)
        const projectData = {
            id: this.state.project._id
        };
        console.log(projectData)
        this.props.removeProjectDetails(projectData);
        window.location.href = '/projects'
    };

    beginningState(objectFound, event) {
        this.setState({ project: objectFound });
        console.log(this.state);
    };

    handleChange = e => {
        this.setState({
            project: Object.assign(
                {},
                this.state.project,
                { [e.target.id]: e.target.value }
            ),
        })
        console.log(e.target.id)
        console.log(e.target.name)
        console.log(e.target.value)
        console.log(this.state.project)
    };

    handleChangeDropdown = e => {
        this.setState({
            project: Object.assign(
                {},
                this.state.project,
                { [e.target.name]: e.target.value }
            ),
        })
        console.log(this.state.project)
    };

    render() {
        const { classes } = this.props;
        const { data } = this.props.projects;

        if (!data) {
            console.log(null)
            return null
        }

        else {
            var a = document.createElement('a');
            a.href = window.location.href;

            var path;
            ['pathname'].forEach(function (k) {
                console.log(k + ':', a[k]);
                console.log(a[k])
                path = a[k]
                return path
            });

            const id = path.replace("/projects/", "");

            var elementPos = data.projects.map(function (x) { return x._id; }).indexOf(id);
            var objectFound = data.projects[elementPos];

            if (!this.state.project) {
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
                            <h4>Edit Project</h4>
                            <form className={classes.container} onSubmit={this.handleSubmit} noValidate autoComplete="off">

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
                                            input={
                                                <Input
                                                    labelWidth={this.state.labelWidth}
                                                    name="priority"
                                                //id="outlined-age-simple"
                                                />
                                            }
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={"low"}>low</MenuItem>
                                            <MenuItem value={"medium"}>medium</MenuItem>
                                            <MenuItem value={"high"}>high</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>

                                <Grid item xs={12} style={{ "marginTop": "40px" }}>
                                    <h6>Time + Rate</h6>
                                </Grid>

                                <Grid item xs={12} sm={6} md={6} lg={3}>
                                    <TextField
                                        id="dueDate"
                                        label="Due Date"
                                        className={classes.textField}
                                        value={this.state.project.dueDate}
                                        onChange={this.handleChange}
                                        InputProps={{ disableUnderline: true, }}
                                        margin="normal"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={3} md={2} lg={2}>
                                    <TextField
                                        id="timeEst"
                                        label="Time Estimate"
                                        className={classes.textFieldSmall}
                                        value={this.state.project.timeEst}
                                        onChange={this.handleChange}
                                        InputProps={{ disableUnderline: true, }}
                                        margin="normal"
                                    />
                                </Grid>

                                <Grid item xs={12} sm={3} md={2} lg={2}>
                                    <TextField
                                        id="rate"
                                        label="Rate"
                                        className={classes.textFieldSmall}
                                        value={this.state.project.rate}
                                        onChange={this.handleChange}
                                        InputProps={{ disableUnderline: true, }}
                                        margin="normal"
                                    />
                                </Grid>

                                <Grid item xs={12} style={{ "marginTop": "40px" }}>
                                    <h6>Notes</h6>
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        id="notes"
                                        label="Notes"
                                        multiline
                                        rows="8"
                                        value={this.state.project.notes}
                                        onChange={this.handleChange}
                                        className={classes.textFieldLarge}
                                        margin="dense"
                                    />
                                </Grid>

                                <Grid item xs={6} sm={9} style={{ "marginTop": "30px" }}>

                                    <Button variant="contained" type="submit" size="large" color="primary" className={classes.margin} style={{ "marginTop": 15 }} onClick={this.handleSubmit}>SAVE</Button>

                                </Grid>

                                <Grid item xs={6} sm={3} style={{ "marginTop": "30px" }}>

                                    <Button variant="outlined" type="submit" size="large" color="primary" className={classes.margin} style={{ "marginTop": 15, align: "right" }} onClick={this.archiveClient}>ARCHIVE</Button>

                                </Grid>

                            </form>
                        </Grid>
                    </Grid>
                )
            }
        }
    }
}

TextFields2.propTypes = {
    classes: PropTypes.object.isRequired,
    removeProjectDetails: PropTypes.func.isRequired,
    updateProjectDetails: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
    userDetails: state.findUser.userDetails
});


export default connect(
    mapStateToProps,
    { updateProjectDetails, removeProjectDetails }
)(withStyles(styles)(TextFields2))