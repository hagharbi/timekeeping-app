import React from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import '../layout/landingPage/imagesCode/global.css';
import Highcharts from "highcharts/highstock";


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
            errors: {},
        }
    };

    beginningState(data) {
        this.setState({ projects: data });
    };

    highChartsReady() {
        setTimeout(() => {
            
        Highcharts.chart('atmospheric-composition', {
            chart: {
                type: 'pie',
            },
            title: {
                verticalAlign: 'middle',
                floating: true,
                text: 'Projects',
                style: {
                    fontSize: '20px',
                }
            },
            plotOptions: {
                pie: {
                    dataLabels: {
                        format: '{point.name}: {point.percentage:.1f} %'
                    },
                    innerSize: '60%',
                }
            },
            series: this.state.series
        });

        },1);
    };

    projectData() {
        //needs timer to render in correct order
        setTimeout(() => {

        const projects = this.state.projects;
        const count = projects.projects.length;

        //percentages for each category
        const inactive = Math.round((projects.projects.filter(project => project.status === "inactive").length)/count * 100);
        const pending =  Math.round((projects.projects.filter(project => project.status === "pending").length)/count * 100);
        const inprogress = Math.round((projects.projects.filter(project => project.status === "in progress").length)/count * 100);
        const completed = Math.round((projects.projects.filter(project => project.status === "completed").length)/count * 100);

        this.setState({
            series: [{
                name: 'Projects',
                data: [
                    {
                    name: 'Inactive',
                    y: inactive,
                    color: '#3498db'
                    },
                    {
                    name: 'Pending',
                    y: pending,
                    color: '#9b59b6'
                    },
                    {
                    name: 'In Progress',
                    y: inprogress,
                    color: '#2ecc71'
                    },
                    {
                    name: 'Completed',
                    y: completed,
                    color: '#f1c40f'
                    }
                ]
            }],
        });
        }, 500);
    }

    render(){
        const { data } = this.props.users;

        if (!data) {
            return null
        }

        else {
            if (!this.state.projects) {
                this.beginningState(data);
                this.projectData();
                return null
            }
            else {

                return (
                    <Grid container spacing={24}>
                        <Grid item xs={2} sm={4} md={3} lg={2}>
                            <Paper></Paper>
                        </Grid>
                        <Grid item xs={9} sm={7} md={8} lg={9}>
                            <h4><strong>Dashboard</strong></h4>
                            <Grid item sm={7} lg={10}>
                                <div id='atmospheric-composition'></div>
                                {this.highChartsReady()}
                            </Grid>
                        </Grid>
                    </Grid> 
                )
            }
        }
    }
};

Dash.propTypes = {
    classes: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
    userDetails: state.findUser.userDetails
});

export default connect(
    mapStateToProps
)(withStyles(styles)(Dash))