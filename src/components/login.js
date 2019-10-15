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

class Login extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: ''
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }
    loginButtonHandler = () => {
        const { userName, password } = this.state;
        const payload = {
            userName,
            password
        }
        console.log(payload);
        this.props.history.push('/accountSummary')
    }
    render() {
        const { classes } = this.props;
        const { userName, password } = this.state;
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            Login
                        </Typography>
                    </Toolbar>
                </AppBar>
                <div>
                    <TextField
                        id="userName"
                        label="User Name"
                        className={classes.textField}
                        value={userName}
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

                <Button onClick={this.loginButtonHandler} variant="contained" color="primary" className={classes.button}>Login</Button>
                <label>New Customer ? </label>
                <Link to={'/register'} className={classes.link}>
                    Register
                </Link>
            </div>
        );
    }
}

export default withStyles(Styles)(withRouter(Login));