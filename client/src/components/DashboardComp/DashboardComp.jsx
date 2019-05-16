import React from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
// import classnames from 'classnames';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';

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
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
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
        const bull = <span className={classes.bullet}>•</span>;


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
                        <Grid item xs={1} sm={5} md={3}>
                            <Paper className={classes.paper}></Paper>
                        </Grid>
                        <Grid item sm={7} lg={8}>
                            <h5 style={{ margin: '3rem auto 2rem 0' }}><strong>Dashboard</strong></h5>
                            <Grid item sm={7} lg={8}>
                                <Card className={classes.card}>
                                    <CardHeader
                                        title="RECENT ACTIVITIES"
                                    />
                                    <CardMedia
                                        className={classes.media}
                                        image="HighCharts"
                                        title="Activity"
                                    />
                                </Card>
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