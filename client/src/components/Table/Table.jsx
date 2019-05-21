import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import Button from '@material-ui/core/Button';

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

class CustomPaginationActionsTable extends React.Component {
  state = {
    page: 0,
    rowsPerPage: 5,
  };

  handleClick = (id, e) => {
    e.preventDefault();
    window.location = "/clients/" + id
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ page: 0, rowsPerPage: event.target.value });
  };

  numOfProjects(clientID, projects) {
    var count = projects.filter(project => {return project.client === clientID && project.active === true}).length;
    return count
  }

  render() {
    const { classes } = this.props;
    const { rowsPerPage, page } = this.state;
    const { data } = this.props.clients;

    if (!data) {
      return null
    }

    else {
      const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.clients.length - page * rowsPerPage);

      data.clients.sort((a, b) => (a.projects.length > b.projects.length ? -1 : 1));

      return (
        <Grid container spacing={24}>
          <Grid item xs={2} sm={4} md={3} lg={2}>
            <Paper className={classes.paper}></Paper>
          </Grid>
          <Grid item xs={10} sm={8} md={9} lg={9}>
            <Grid
              justify="space-between"
              container
              spacing={24}
            >
              <Grid item>
                <h4><strong>Clients</strong></h4>
              </Grid>
              <Grid item>
                <Link
                  to="/newclient">
                  <Button
                    // onClick={}
                    variant="contained" color="primary" className={classes.button}
                    style={{ marginTop: "3rem" }}
                  >
                    + New Client
                      </Button>
                </Link>
              </Grid>
            </Grid>
            <div className={classes.tableWrapper}>
              <Table className={classes.table}>
                <TableHead id="th">
                  <TableRow>
                    <TableCell variant="headline" component="th" scope="row">
                      Company
                      </TableCell>
                    <TableCell variant="headline" component="th" scope="row">Email</TableCell>
                    <TableCell variant="headline" component="th" scope="row">Phone</TableCell>
                    <TableCell variant="headline" component="th" scope="row">Projects</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.clients
                    .filter(client => { return client.active === true })
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map(client => (
                      <TableRow hover style={{ cursor: 'pointer' }} key={client._id} onClick={(e) => this.handleClick(client._id, e)}>
                        <TableCell variant="body1" scope="row">
                          {client.company}
                        </TableCell>
                        <TableCell variant="body1" scope="row">{client.email}</TableCell>
                        <TableCell variant="body1" scope="row"> {client.phone}</TableCell>
                        <TableCell variant="body1" scope="row">{this.numOfProjects(client._id, data.projects)}</TableCell>
                      </TableRow>
                    ))}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 48 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
                <TableFooter>
                  <TableRow >
                    <TablePagination
                      rowsPerPageOptions={[5, 10, 25]}
                      colSpan={6}
                      count={data.clients
                        .filter(client => { return client.active === true }).length}
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
};

CustomPaginationActionsTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomPaginationActionsTable);