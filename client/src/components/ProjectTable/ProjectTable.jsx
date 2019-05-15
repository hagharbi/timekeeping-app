import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

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
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


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
    width: '100%',
    marginTop: theme.spacing.unit * 3,
  },
  table: {
    minWidth: 500,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
});

class ProjectTable extends React.Component {
state = {
    page: 0,
    rowsPerPage: 5,
  };

  handleClick = (id, e) => {
    e.preventDefault();
    window.location = "/projects/" + id
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
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

    if (!data) {
      console.log(null)
      return null
    }

    else {
      console.log(data.clients)

      const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.clients.length - page * rowsPerPage);

      data.clients.sort((a, b) => (a.firstName < b.firstName ? -1 : 1));

      return (
        <Grid container spacing={24}>
          <Grid item sm={1} md={3}>
            <Paper className={classes.paper}></Paper>
          </Grid>
          <Grid item sm={6} lg={9}>
          <Paper className={classes.root}>
          <h5>Projects</h5>
            <div className={classes.tableWrapper}>
              <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                      <TableCell component="th" scope="row">Title</TableCell>
                      <TableCell component="th" scope="row">Client</TableCell>
                      <TableCell component="th" scope="row">Due Date</TableCell>
                      <TableCell component="th" scope="row">Priority</TableCell>
                      <TableCell component="th" scope="row">Status</TableCell>
                      <TableCell component="th" scope="row">Timer</TableCell>
                    </TableRow>
                  </TableHead>
                <TableBody>
                  {data.projects
                  .filter(projects => {return projects.active === true})
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map(projects => (
                    <TableRow key={projects._id}>
                      <TableCell component="th" scope="row" style={{cursor: 'pointer'}} onClick={(e) => this.handleClick(projects._id, e)}>
                        {projects.title}
                      </TableCell>
                      <TableCell component="th" scope="row" style={{cursor: 'pointer'}} onClick={(e) => this.handleClick(projects.client, e)}>
                        {projects.client}
                      </TableCell>
                      <TableCell component="th" scope="row">{projects.dueDate}</TableCell>
                      <TableCell component="th" scope="row">
                        <FormControl variant="outlined" className={classes.formControl}>
                            <Select
                                value={projects.status}
                                onChange={this.handleChange}
                                input={
                                <OutlinedInput
                                    labelWidth={this.state.labelWidth}
                                    name="status"
                                    id="outlined-age-simple"
                                />
                                }
                            >
                                <MenuItem value={"pending"}>pending</MenuItem>
                                <MenuItem value={"in progress"}>in progress</MenuItem>
                                <MenuItem value={"completed"}>completed</MenuItem>
                                <MenuItem value={"inactive"}>inactive</MenuItem>
                            </Select>
                        </FormControl>
                      </TableCell>
                      <TableCell component="th" scope="row"> {projects.priority}
                        <FormControl variant="outlined" className={classes.formControl}>
                            <Select
                                value={projects.priority}
                                onChange={this.handleChange}
                                input={
                                <OutlinedInput
                                    labelWidth={this.state.labelWidth}
                                    name="status"
                                    id="outlined-age-simple"
                                />
                                }
                            >
                                <MenuItem value={"low"}>low</MenuItem>
                                <MenuItem value={"medium"}>medium</MenuItem>
                                <MenuItem value={"high"}>high</MenuItem>
                            </Select>
                        </FormControl>
                      </TableCell>
                      <TableCell component="th" scope="row">      
                        <Button variant="contained" color="primary" className={classes.button}
                        key={projects._id} onClick={(e) => this.handleClick(projects._id, e)}>
                            START
                        </Button>
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
                      count={data.projects
                        .filter(project => {return project.active === true}).length}
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
          </Paper>
        </Grid>
      </Grid>
      );
    }
  }
}

ProjectTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProjectTable);