import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from "react-redux";
import { updateProjectDropdowns } from "../../actions/projects/updateProjectDropdowns";
import { createLogDetails } from "../../actions/logs/createLogActions";
import { updateLogDetails } from "../../actions/logs/updateLogActions";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import moment from 'moment'

//Table
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

//FormControl
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';

//Dialog
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

//Icons
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import TimerIcon from '@material-ui/icons/Timer';
import TimerOffIcon from '@material-ui/icons/TimerOff';

const actionsStyles = theme => ({
  root: {
    flexShrink: 0,
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing.unit * 2.5,
    typography: {
      useNextVariants: true,
    }
  },
});

window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

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
    width: 350,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
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
    const projectData = {
      type: "priority",
      priority: e.target.value,
      id: e.target.name,
    }

    this.props.updateProjectDropdowns(projectData);
    window.location = "/projects"
  };

  changeStatus = e => {
    const projectData = {
      type: "status",
      status: e.target.value,
      id: e.target.name,
    }

    this.props.updateProjectDropdowns(projectData);
    window.location = "/projects"
  };

  changeDueDate = e => {
    const projectData = {
      type: "dueDate",
      dueDate: e.target.value,
      id: e.target.name,
    }

    this.props.updateProjectDropdowns(projectData);
    window.location = "/projects"
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
    this.setState({
      log: Object.assign(
        {},
        this.state.log,
        {
          title: e.target.value,
          id: e.target.name
        }
      ),
    })
  };

  startLog = (event) => {
    event.preventDefault();

    const logData = {
      title: this.state.log.title,
      id: this.state.log.id,
    };

    this.props.createLogDetails(logData)
    this.setState({ open: false });
    window.location = "/projects"
  };

  handleStop = (project) => {
    if (project.activeLog === false) {
      return
    }
    else {
      var log = project.logs.filter(log => { return log.counting === true });

      const logData = {
        projectId: project._id,
        id: log[0]._id
      };

      this.props.updateLogDetails(logData)
    };

    window.location = "/projects"
  };

  formatDuration(logs) {
    var activeLogs = logs.filter(log => { return log.active === true && log.counting === false })

    if (activeLogs.length === 0) {
      return "None"
    }
    else if (activeLogs.length >= 1) {
      var total = moment.duration(0);

      for (var i = 0; i < activeLogs.length; i++) {
        var on = (activeLogs[i].createdAt).toString();
        var off = (activeLogs[i].updatedAt).toString();
        var ms = moment(off).diff(moment(on));
        total.add(ms, 'ms');
      }

      var formattedTotal = total.format("hh:mm:ss");

      return formattedTotal;
    }
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
      return null
    }

    else {
      const sortedData = data
        .sort((a, b) => (a.title < b.title ? -1 : 1))
        .filter(project => { return project.active === true && project.user === user.id })

      const emptyRows = rowsPerPage - Math.min(rowsPerPage, sortedData.length - page * rowsPerPage);

      return (
        <Grid container spacing={24}>
          <Grid item xs={1} sm={4} md={3} lg={2}>
            <Paper className={classes.paper}></Paper>
          </Grid>
          <Grid item xs={10} sm={8} md={9} lg={9}>
            <Grid
              justify="space-between"
              container
              spacing={24}
            >
              <Grid item>
                <h4><strong>Projects</strong></h4>
              </Grid>
              <Grid item>
                <Link
                  to="/newproject">
                  <Button
                    variant="contained" color="primary" className={classes.button}
                    style={{ marginTop: "3rem" }}
                  >
                    + New Project
                      </Button>
                </Link>
              </Grid>
            </Grid>
            <div className={classes.tableWrapper}>
              <Table className={classes.table}>
                <TableHead id="th">
                  <TableRow>
                    <TableCell variant="headline" component="th" scope="row">Title</TableCell>
                    <TableCell variant="headline" component="th" scope="row">Client</TableCell>
                    <TableCell variant="headline" component="th" scope="row">Status</TableCell>
                    <TableCell variant="headline" component="th" scope="row">Priority</TableCell>
                    <TableCell variant="headline" component="th" scope="row">Time Worked</TableCell>
                    <TableCell variant="headline" component="th" scope="row">Timer</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {sortedData
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map(projects => (
                      <TableRow key={projects._id}>
                        <TableCell className="td" variant="body1" scope="row" style={{ cursor: 'pointer' }} onClick={(e) => this.handleClick(projects._id, e)}>
                          {projects.title}
                        </TableCell>
                        <TableCell className="td" variant="body1" scope="row" style={{ cursor: 'pointer' }} onClick={(e) => this.handleClickClient(projects.client._id, e)}>
                          {projects.client.company}
                        </TableCell>
                        <TableCell variant="body1" scope="row">
                          <FormControl variant="outlined" className={classes.formControl}>
                            <Select
                              value={projects.status}
                              onChange={this.changeStatus}
                              name={projects._id}
                              input={
                                <Input
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
                        <TableCell variant="body1" scope="row">
                          <FormControl variant="outlined" className={classes.formControl}>
                            <Select
                              value={projects.priority}
                              onChange={this.changePriority}
                              name={projects._id}
                              input={
                                <Input
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
                        <TableCell variant="body1" scope="row">
                          {projects.logs.filter(log => { return log.counting === false }).length === 0 ? "None" :
                            <div>{this.formatDuration(projects.logs)}</div>}
                        </TableCell>
                        <TableCell variant="p" component="th" scope="row">
                          {
                            projects.activeLog ?
                              <Button variant="contained" color="action" className={classes.button} key={projects._id} onClick={() => this.handleStop(projects)}><TimerOffIcon /> STOP </Button> :
                              <Button variant="contained" color="secondary" className={classes.button} key={projects._id} onClick={() => this.handleClickOpen(projects._id)}><TimerIcon /> Start</Button>

                          }
                          <Dialog
                            open={this.state.open === projects._id}
                            onClose={this.handleClose}
                            aria-labelledby="form-dialog-title"
                          >
                            <DialogTitle id="form-dialog-title">Before you start</DialogTitle>
                            <DialogContent>
                              <TextField
                                required
                                name={projects._id}
                                label="Add a Task"
                                value={this.state.log.title}
                                className={classes.textField}
                                onChange={this.handleChange}
                                InputProps={{ disableUnderline: true, }}
                                margin="normal"
                              />
                            </DialogContent>

                            <DialogActions style={{ padding: '1rem' }}>
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
  updateLogDetails: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  allProjectDetails: state.findAllProjects.allProjectDetails,
});

export default connect(mapStateToProps,
  { updateProjectDropdowns, createLogDetails, updateLogDetails })(withStyles(styles)(ProjectTable));