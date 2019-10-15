import React, { PureComponent } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { withRouter } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const Styles = (theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 400,
    },
    button: {
        margin: theme.spacing(4),
    },
    link: {
        margin: theme.spacing(1),
    },
}));

class Register extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            mobileNumber: '',
            dob: '',
            password: '',
            confirmPassword: '',
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }
    registerButtonHandler = () => {
        const { email, mobileNumber, dob, password, confirmPassword } = this.state;
        const payload = {
            email,
            mobileNumber,
            dob,
            password,
            confirmPassword
        }
        console.log(payload);
        this.props.history.push('/accountSummary')
    }
    render() {
        const { classes } = this.props;
        const { email, mobileNumber, dob, password, confirmPassword } = this.state;
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            Register
                        </Typography>
                    </Toolbar>
                </AppBar>
                <div>
                    <TextField
                        id="email"
                        label="Email"
                        className={classes.textField}
                        value={email}
                        onChange={this.handleChange}
                        margin="normal"
                    />
                </div>
                <div>
                    <TextField
                        id="mobileNumber"
                        label="Mobile Number"
                        className={classes.textField}
                        value={mobileNumber}
                        onChange={this.handleChange}
                        margin="normal"
                    />
                </div>
                <div>
                    <TextField
                        id="dob"
                        label="DOB"
                        className={classes.textField}
                        value={dob}
                        onChange={this.handleChange}
                        margin="normal"
                    />
                </div>
                <div>
                    <TextField
                        id="password"
                        label="Password"
                        className={classes.textField}
                        value={password}
                        onChange={this.handleChange}
                        margin="normal"
                    />
                </div>
                <div>
                    <TextField
                        id="confirmPassword"
                        label="Confirm Password"
                        className={classes.textField}
                        value={confirmPassword}
                        onChange={this.handleChange}
                        margin="normal"
                    />
                </div>

                <Button onClick={this.registerButtonHandler} variant="contained" color="primary" className={classes.button}>Register</Button>
            </div>
        );
    }
}

export default withStyles(Styles)(withRouter(Register));