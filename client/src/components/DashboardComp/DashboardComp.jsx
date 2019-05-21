import React from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
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
                        fontSize: '30px',
                    }
                },
                plotOptions: {
                    pie: {
                        dataLabels: {
                            format: '{point.name}: {point.percentage} %'
                        },
                        innerSize: '50%',
                    },
                },
                series: this.state.series
            });

        }, 1);
    };

    projectData() {
        //needs timer to render in correct order
        setTimeout(() => {

            const projects = this.state.projects;
            const count = projects.projects.filter(project => project.active === true).length;

            console.log(projects)

            //percentages for each category
            const inactive = Math.round((projects.projects.filter(project => project.status === "inactive" && project.active === true).length) / count * 100);
            const pending = Math.round((projects.projects.filter(project => project.status === "pending" && project.active === true).length) / count * 100);
            const inprogress = Math.round((projects.projects.filter(project => project.status === "in progress" &&  project.active === true).length) / count * 100);
            const completed = Math.round((projects.projects.filter(project => project.status === "completed" && project.active === true).length) / count * 100);

            console.log(inprogress)

            this.setState({
                series: [{
                    name: 'Projects',
                    data: [
                        {
                            name: 'Inactive',
                            y: inactive,
                            color: '#FF737F'
                        },
                        {
                            name: 'Pending',
                            y: pending,
                            color: '#FFE45C'
                        },
                        {
                            name: 'In Progress',
                            y: inprogress,
                            color: '#7685C2',
                        },
                        {
                            name: 'Completed',
                            y: completed,
                            color: '#8FCA70'
                        }
                    ]
                }],
            });
        }, 500);
    }

    render() {
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
                            <Grid item xs={10} sm={7} lg={10}>
                                <Card item xs={10} style={{ padding: '2rem' }}>
                                    <h5 ><strong>Recent Activities</strong></h5>
                                    <div id='atmospheric-composition'></div>
                                    {this.highChartsReady()}
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid >
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