import React from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import AvTimerIcon from '@material-ui/icons/AvTimer'
import AssignmentIcon from '@material-ui/icons/Assignment';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import SettingsIcon from '@material-ui/icons/Settings';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import "../layout/landingPage/imagesCode/global.css";

const drawerWidth = 180;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  darkColor: {
    color: theme.palette.primary.dark
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },

  menuButton: {
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
});

const StyledIcon = withStyles({
  root: {
    marginRight: 0,
    color: "#666",
  },

})(ListItemIcon);

class ResponsiveDrawer extends React.Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  // handleDrawerClose = () => {
  //   this.setState({ mobileOpen: false });
  // };

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { classes, theme } = this.props;

    const drawer = (
      <div>
        <div className={classes.toolbar} />
        <div className={classes.drawerHeader}>
        </div>
        <Divider />
        <Link
          to="/dashboard">
          <List>
            {['Dashboard'].map((text, index) => (
              <ListItem button key={text}>
                <StyledIcon>{<AvTimerIcon />}</StyledIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Link>

        <Link
          to="/projects">
          <List>
            {['Projects'].map((text, index) => (
              <ListItem button key={text}>
                <StyledIcon>{<AssignmentIcon />}</StyledIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Link>

        <Link
          to="/clients">
          <List>
            {['Clients'].map((text, index) => (
              <ListItem button key={text}>
                <StyledIcon>{<AssignmentIndIcon />}</StyledIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Link>

        <Link
          to="/invoices">
          <List>
            {['Invoices'].map((text, index) => (
              <ListItem button key={text}>
                <StyledIcon>{<AttachMoneyIcon />}</StyledIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Link>

        <Link
          to="/settings">
          <List>
            {['Settings'].map((text, index) => (
              <ListItem button key={text}>
                <StyledIcon>{<SettingsIcon />}</StyledIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Link>
      </div>
    );

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar className={classes.toolBar}>

            <IconButton color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <img alt="logo"
              src={require('../layout/landingPage/imagesCode/sumit-logo.svg')}
              style={{
                width: "8vw",
                // opacity: .4,
              }}
            />
            <Grid
              justify="space-between"
              container
              spacing={24}
            >
              <Grid item>
                <Paper className={classes.paper}></Paper>
              </Grid>
              <Grid item>
                <Button style={{ padding: "5px", boxShadow: '0 0 0 0' }}
                  onClick={this.onLogoutClick}
                  variant="contained" color="primary" className={classes.button}
                >&nbsp;
                <img id="logoutbutton-in" src={require('../layout/landingPage/imagesCode/baseline-lock_open-24px.svg')} style={{ padding: "2px 0 0 0", position: "absolute", opacity: "1" }} alt="unlocked-icon" />
                  <img id="logoutbutton-out" src={require('../layout/landingPage/imagesCode/baseline-lock-24px.svg')} style={{ padding: "2px 0 0 0", position: "absolute", opacity: "0" }} alt="locked-icon" />
                </Button>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer}>
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={this.props.container}
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        {/* <main className={classes.content}>
          <div className={classes.toolbar} />
        </main> */}
      </div>
    );
  }
}

ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  container: PropTypes.object,
  theme: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(withStyles(styles, { withTheme: true })(ResponsiveDrawer));