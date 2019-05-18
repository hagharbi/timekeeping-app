import React from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
// import classnames from 'classnames';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent'; <----- called but never used JRS
// import Typography from '@material-ui/core/Typography';  <----- called but never used JRS
// import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
import '../layout/landingPage/imagesCode/global.css';
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
// import Avatar from '@material-ui/core/Avatar';
// import IconButton from '@material-ui/core/IconButton';
// import MoreVertIcon from '@material-ui/icons/MoreVert';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 300,
    },
    // Card Styles
    card: {
        display: 'flex',
        minWidth: 275,
        backgroundColor: '#F5f5f5',
    },
    // bullet: {
    //     display: 'inline-block',
    //     margin: '0 2px',
    //     transform: 'scale(0.8)',
    // },

    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

class Dash extends React.Component {

    constructor() {
        super();
        this.state = {
            errors: {}
        };
    }

    beginningState(objectFound, event) {
        this.setState({ userData: objectFound });
        console.log(this.state);
    }

    handleChange = e => {
        this.setState({
            userData: Object.assign(
                {},
                this.state.userData,
                { [e.target.id]: e.target.value }
            ),
        })
    }
    //CARD initial state and event handler
    state = { expanded: false };

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

    render() {
        const { classes } = this.props;

        const { data } = this.props.user;
            const options = {
        title: {
            text: "My stock chart"
        },
        series: [{
            data: [1, 2, 1, 4, 3, 6, 7, 3, 8, 6, 9]
        }]
    };
        // const bull = <span className={classes.bullet}>•</span>; <----- called but never used ___JRS___


        if (!data) {
            console.log(null)
            return null
        }

        else {
            var objectFound = data;

            if (!this.state.userData) {
                this.beginningState(objectFound);
                return null
            }
            else {

                return (
                    <Grid container spacing={24}>
                        <Grid item xs={2} sm={4} md={3} lg={2}>
                            <Paper className={classes.paper}></Paper>
                        </Grid>
                        <Grid item xs={9} sm={7} md={8} lg={9}>
                            <h5 style={{ margin: '3rem auto 2rem -2rem', color: '#555555'}} id="dashboard_h1"><strong>Dashboard</strong></h5>
                            <Grid item sm={7} lg={10}>
                                <HighchartsReact highcharts={
                                    Highcharts
                                }
                                    constructorType={
                                        "stockChart"
                                    }
                                    options={
                                        options
                                    }
                                /> 
                            </Grid>
                        </Grid>
                    </Grid>
                )
            }
        }
    }
}

Dash.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
    userDetails: state.findUser.userDetails
});


export default connect(
    mapStateToProps,
)(withStyles(styles)(Dash))