import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from "react-redux";
import { updateProjectDropdowns } from "../../actions/projects/updateProjectDropdowns";
import { createLogDetails } from "../../actions/logs/createLogActions";
import { removeLogDetails } from "../../actions/logs/removeLogActions";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

//Table
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

//FormControl
import OutlinedInput from '@material-ui/core/OutlinedInput';
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

//Icons
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';

const actionsStyles = theme => ({
  root: {
    flexShrink: 0,
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing.unit * 2.5,
  },
});

class TablePaginationActions extends React.Component {
  handleFirstPageButtonClick = event => {
    this.props.onChangePage(event, 0);
  };

  handleBackButtonClick = event => {
    this.props.onChangePage(event, this.props.page - 1);
  };

  handleNextButtonClick = event => {
    this.props.onChangePage(event, this.props.page + 1);
  };

  handleLastPageButtonClick = event => {
    this.props.onChangePage(
      event,
      Math.max(0, Math.ceil(this.props.count / this.props.rowsPerPage) - 1),
    );
  };

  render() {
    const { classes, count, page, rowsPerPage, theme } = this.props;

    return (
      <div className={classes.root}>
        <IconButton
          onClick={this.handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="First Page"
        >
          {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton
          onClick={this.handleBackButtonClick}
          disabled={page === 0}
          aria-label="Previous Page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        </IconButton>
        <IconButton
          onClick={this.handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="Next Page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </IconButton>
        <IconButton
          onClick={this.handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="Last Page"
        >
          {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </div>
    );
  }
}

TablePaginationActions.propTypes = {
  classes: PropTypes.object.isRequired,
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  theme: PropTypes.object.isRequired,
};

const TablePaginationActionsWrapped = withStyles(actionsStyles, { withTheme: true })(
  TablePaginationActions,
);

const styles = theme => ({
  root: {
    width: 'flex',
    flexWrap: 'wrap',
    // marginTop: theme.spacing.unit * 3,
  },
  table: {
    minWidth: 500,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 300,
  },
});

class ProjectTable extends React.Component {
  state = {
    page: 0,
    rowsPerPage: 5,
    open: null,
    log: {
      title: "",
      id: ""
    }
  };

  handleClick = (id, e) => {
    e.preventDefault();
    window.location = "/projects/" + id
  };

  handleClickClient = (id, e) => {
    e.preventDefault();
    window.location = "/clients/" + id
  };

  changePriority = e => {
    console.log(e.target)

    const projectData = {
      type: "priority",
      priority: e.target.value,
      id: e.target.name,
    }

    this.props.updateProjectDropdowns(projectData);
    window.location ="/projects"
  };

  changeStatus = e => {
    console.log(e.target)

    const projectData = {
      type: "status",
      status: e.target.value,
      id: e.target.name,
    }

    this.props.updateProjectDropdowns(projectData);

    window.location ="/projects"
  };

  changeDueDate = e => {
    console.log(e.target)

    const projectData = {
      type: "dueDate",
      dueDate: e.target.value,
      id: e.target.name,
    }

    this.props.updateProjectDropdowns(projectData);
    window.location ="/projects"
  };

  handleClickOpen = (id) => {
    this.setState({ open: id });
};

  handleClose = () => {
      this.setState({ open: null });
  };

  handleClickStop = () => {
    this.setState({ running: null });
  };

  handleChange = e => {
    this.setState({ log: Object.assign(
        {}, 
        this.state.log,
        { title: e.target.value,
          id: e.target.name }
      ),
    })
    console.log(e.target.name)
    console.log(e.target.value)
    console.log(this.state.log)
};

  startLog = (event) => {
    event.preventDefault();

    const logData = {
        title: this.state.log.title,
        id: this.state.log.id,
    };
    console.log(logData);

    this.props.createLogDetails(logData)
    this.setState({ open: false });
  };


  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ page: 0, rowsPerPage: event.target.value });
  };

  render() {
    const { classes } = this.props;
    const { rowsPerPage, page } = this.state;

    const { data } = this.props.projects;
    const { user } = this.props.user;

    if (!data) {
      console.log(null)
      return null
    }

    else {
      console.log(data)
      console.log(user.id);
      const sortedData = data
      .sort((a, b) => (a.title < b.title ? -1 : 1))
      .filter(project => { return project.active === true && project.user === user.id })

      const emptyRows = rowsPerPage - Math.min(rowsPerPage, sortedData.length - page * rowsPerPage);

      return (
        <Grid container spacing={24}>
          <Grid item xs={2} sm={4} md={3} lg={2}>
            <Paper className={classes.paper}></Paper>
          </Grid>
          <Grid item xs={10} sm={8} md={9} lg={9}>
            {/* <Paper className={classes.root}> */}
              <Grid
                justify="space-between"
                container
                spacing={24}
              >
                <Grid item>
                  <h5 style={{ margin: '3rem auto 2rem -2rem' }}><strong>Projects</strong></h5>
                </Grid>
                <Grid item>
                  <Link
                    to="/newproject">
                    <Button
                      // onClick={}
                      variant="contained" color="secondary" className={classes.button}
                      style={{ marginTop: "3rem" }}
                    >
                      + New Project
                      </Button>
                  </Link>
                </Grid>
              </Grid>
              <div className={classes.tableWrapper}>
                <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell variant="h5" component="th" scope="row">Title</TableCell>
                      <TableCell variant="h5" component="th" scope="row">Client</TableCell>
                      <TableCell variant="h5" component="th" scope="row">Due Date</TableCell>
                      <TableCell variant="h5" component="th" scope="row">Priority</TableCell>
                      <TableCell variant="h5" component="th" scope="row">Status</TableCell>
                      <TableCell variant="h5" component="th" scope="row">Timer</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {sortedData
                      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                      .map(projects => (
                        <TableRow key={projects._id}>
                          <TableCell variant="p" component="th" scope="row" style={{ cursor: 'pointer' }} onClick={(e) => this.handleClick(projects._id, e)}>
                            {projects.title}
                          </TableCell>
                          <TableCell variant="p" component="th" scope="row" style={{ cursor: 'pointer' }} onClick={(e) => this.handleClickClient(projects.client._id, e)}>
                            {projects.client.company}
                          </TableCell>
                          <TableCell variant="p" component="th" scope="row">{projects.dueDate}</TableCell>
                          <TableCell variant="p" component="th" scope="row">
                            <FormControl variant="outlined" className={classes.formControl}>
                              <Select
                                value={projects.status}
                                onChange={this.changeStatus}
                                name={projects._id}
                                input={
                                  <OutlinedInput
                                    name={projects._id}
                                  />
                                }
                              >
                                <MenuItem value={"inactive"}>inactive</MenuItem>
                                <MenuItem value={"pending"}>pending</MenuItem>
                                <MenuItem value={"in progress"}>in progress</MenuItem>
                                <MenuItem value={"completed"}>completed</MenuItem>
                              </Select>
                            </FormControl>
                          </TableCell>
                          <TableCell variant="p" component="th" scope="row">
                            <FormControl variant="outlined" className={classes.formControl}>
                              <Select
                                value={projects.priority}
                                onChange={this.changePriority}
                                name={projects._id}
                                input={
                                  <OutlinedInput
                                    name={projects._id}
                                  />
                                }
                              >
                                <MenuItem value={"low"}>low</MenuItem>
                                <MenuItem value={"medium"}>medium</MenuItem>
                                <MenuItem value={"high"}>high</MenuItem>
                              </Select>
                            </FormControl>
                          </TableCell>
                          <TableCell variant="p" component="th" scope="row">
                        {
                          projects.activeLog ?
                          <Button variant="contained" color="primary" className={classes.button} key={projects._id} onClick={() => this.handleClickStop(projects._id)}>Stop</Button>  :
                          <Button variant="contained" color="primary" className={classes.button} key={projects._id} onClick={() => this.handleClickOpen(projects._id)}>Start</Button>
                        
                        }
                            <Dialog
                            open={this.state.open == projects._id}
                            onClose={this.handleClose}
                            aria-labelledby="form-dialog-title"
                            >
                            <DialogTitle id="form-dialog-title">Ready, set ...</DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                To start timer, tell your client what you're doing
                                </DialogContentText>
                                <TextField
                                    required
                                    name={projects._id}
                                    label="Client Note"
                                    value= {this.state.log.title}
                                    className={classes.textField}
                                    onChange={this.handleChange}
                                    InputProps={{ disableUnderline: true, }}
                                    margin="normal"
                                />
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={this.handleClose} color="primary">
                                Cancel
                                </Button>
                                <Button variant="contained" onClick={this.startLog} color="primary">
                                Go!
                                </Button>
                            </DialogActions>
                            </Dialog>
                          </TableCell>
                        </TableRow>
                      ))}
                    {emptyRows > 0 && (
                      <TableRow style={{ height: 48 * emptyRows }}>
                        <TableCell colSpan={6} />
                      </TableRow>
                    )}
                  </TableBody>
                  <TableFooter>
                    <TableRow>
                      <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        colSpan={6}
                        count={sortedData.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        SelectProps={{
                          native: true,
                        }}
                        onChangePage={this.handleChangePage}
                        onChangeRowsPerPage={this.handleChangeRowsPerPage}
                        ActionsComponent={TablePaginationActionsWrapped}
                      />
                    </TableRow>
                  </TableFooter>
                </Table>
              </div>
            {/* </Paper> */}
          </Grid>
        </Grid>
      );
    }
  }
}

ProjectTable.propTypes = {
  classes: PropTypes.object.isRequired,
  updateProjectDropdowns: PropTypes.func.isRequired,
  createLogDetails: PropTypes.func.isRequired,
  removeLogDetails: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  allProjectDetails: state.findAllProjects.allProjectDetails,
});

export default connect(mapStateToProps,
  { updateProjectDropdowns, createLogDetails, removeLogDetails }) (withStyles(styles)(ProjectTable));