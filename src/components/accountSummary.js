import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import CreateAccount from './createAccount';
import {
    BrowserRouter as Router,
    Link as RouterLink
} from "react-router-dom";

const Styles = (theme => ({
    root: {
        width: '100%',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    link: {
        margin: theme.spacing(8),
    },
    routerLink: {
        margin: theme.spacing(8),
    },
    button: {
        margin: theme.spacing(1),
    },
}));

class AccountSummary extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            mobileNumber: '',
            dob: '',
            password: '',
            confirmPassword: '',
            open: false
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
    }
    createAccountHandler = () => {
        this.setState({ open: true })
    }
    handleClose = () => {
        this.setState({ open: false })
    }
    render() {
        const { classes } = this.props;
        const { open } = this.state;
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            Account Summary
                        </Typography>
                        <Button onClick={this.createAccountHandler} variant="contained" color="secondary" className={classes.button}>Create Account</Button>
                    </Toolbar>
                </AppBar>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>Account No- 0534283</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            <div>Account Balance - $XXX.</div>
                            <Link href={'dudUrl'} className={classes.link}>View Mini Statement</Link>
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography className={classes.heading}>Account No- 987643</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            <div>Account Balance - $YYYY.</div>
                            <Link href={'dudUrl'} className={classes.link}>View Mini Statement</Link>
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <div className={classes.routerLink}>
                    <RouterLink to={'/transferFunds'} >
                        Transfer Funds
                    </RouterLink>
                </div>
                <CreateAccount open={open} handleClose={this.handleClose} />
            </div>
        );
    }
}

export default withStyles(Styles)(AccountSummary);