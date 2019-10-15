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

class PersonalDetails extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            address: '',
            citizenship: '',
            dob: '',
            phoneNumber: '',
            email: '',
            passport: '',
        }
    }
    handleChange = (event) => {
        const { name, address, citizenship, dob, phoneNumber, email, passport } = this.state;
        this.setState({
            [event.target.id]: event.target.value
        }, this.props.getPersonalDetails({
            name,
            address,
            citizenship,
            dob,
            phoneNumber,
            email,
            passport

        }))

    }
    render() {
        const { classes } = this.props;
        const { name, address, citizenship, dob, phoneNumber, email, passport } = this.state;
        return (
            <div className={classes.root}>
                <div>
                    <TextField
                        id="name"
                        label="Name"
                        className={classes.textField}
                        value={name}
                        onChange={this.handleChange}
                        margin="normal"
                    />
                </div>
                <div>
                    <TextField
                        id="address"
                        label="Address"
                        className={classes.textField}
                        value={address}
                        onChange={this.handleChange}
                        margin="normal"
                    />
                </div>
                <div>
                    <TextField
                        id="citizenship"
                        label="Citizenship"
                        className={classes.textField}
                        value={citizenship}
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
                        id="phoneNumber"
                        label="Phone Number"
                        className={classes.textField}
                        value={phoneNumber}
                        onChange={this.handleChange}
                        margin="normal"
                    />
                </div>
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
                        id="passport"
                        label="Passport"
                        className={classes.textField}
                        value={passport}
                        onChange={this.handleChange}
                        margin="normal"
                    />
                </div>
            </div>
        );
    }
}

export default withStyles(Styles)(withRouter(PersonalDetails));