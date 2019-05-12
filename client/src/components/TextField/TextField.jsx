import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing,
        marginRight: theme.spacing,
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },

}));


function TextFields() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        firstName: 'Hamza',
        lastName: 'Agharbi',
        email: 'hamza@gmail.com',
        address: '6256 Greenwich Dr, San Diego, CA 92122',
        phone: '(858)222-4525'
    });

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    return (
        <div>
            <div className="row">
                <div className="col s9" style={{ float: "right" }}>
                    <h1>Settings</h1>
                    <form className={classes.container} noValidate autoComplete="off">
                        <div className="col s6">
                            <TextField
                                id="standard-name"
                                label="First Name"
                                className={classes.textField}
                                value={values.firstName}
                                onChange={handleChange('firstName')}
                                margin="normal"
                            />
                        </div>
                        <div className="col s6">
                            <TextField
                                id="standard-name"
                                label="Last Name"
                                className={classes.textField}
                                value={values.lastName}
                                onChange={handleChange('lastName')}
                                margin="normal"
                            />
                        </div>
                        <div className="col s6">
                            <TextField
                                id="standard-email"
                                label="Email"
                                className={classes.textField}
                                value={values.email}
                                onChange={handleChange('lastName')}
                                margin="normal"
                            />
                        </div>
                        <div className="col s6">
                            <TextField
                                id="standard-password-input"
                                label="Password"
                                className={classes.textField}
                                type="password"
                                autoComplete="current-password"
                                defaultValue="Default Value"
                                helperText="Reset by replacing old password"
                                margin="normal"
                            />
                        </div>
                        <div className="col s6">
                            <TextField
                                id="standard-multiline-static"
                                label="Address"
                                multiline
                                rows="4"
                                value={values.address}
                                className={classes.textField}
                                margin="normal"
                            />
                        </div>
                        <div className="col s6">
                            <TextField
                                id="standard-helperText"
                                label="Phone Number"
                                value={values.phone}
                                className={classes.textField}
                                margin="normal"
                            />
                        </div>
                        <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                            <button
                                style={{
                                    width: "150px",
                                    borderRadius: "3px",
                                    letterSpacing: "1.5px",
                                    marginTop: "1rem"
                                }}
                                type="submit"
                                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                            >
                                SAVE
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
}

export default TextFields;