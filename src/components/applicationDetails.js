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

class ApplicationDetails extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            duration: '10 Years',
            openAmount: '$20000',
            monthlyRate: '$200'
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }
    registerButtonHandler = () => {
        const { duration, openAmount, monthlyRate } = this.state;
        const payload = {
            duration,
            openAmount,
            monthlyRate
        }
        console.log(payload);
        this.props.history.push('/accountSummary')
    }
    render() {
        const { classes } = this.props;
        const { duration, openAmount, monthlyRate } = this.state;
        return (
            <div className={classes.root}>
                <div>
                    <TextField
                        id="duration"
                        label="Duration"
                        defaultValue={duration}
                        className={classes.textField}
                        margin="normal"
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                </div>
                <div>
                    <TextField
                        id="openAmount"
                        label="Open Amount"
                        defaultValue={openAmount}
                        className={classes.textField}
                        margin="normal"
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                </div>
                <div>
                    <TextField
                        id="monthlyRate"
                        label="Monthly Rate"
                        defaultValue={monthlyRate}
                        className={classes.textField}
                        margin="normal"
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                </div>
            </div>
        );
    }
}

export default withStyles(Styles)(withRouter(ApplicationDetails));