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
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LoanDetails from './loanDetails';
import { withRouter } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import ApplicationDetails from './applicationDetails';

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
    link: {
        margin: theme.spacing(8),
    },
    status: {
        margin: theme.spacing(4),
    },
    button: {
        margin: theme.spacing(2),
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
}));

class Status extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            applicationId: ''
        }
    }
    statusButtonHandler = () => {

    }
    render() {
        const { classes } = this.props;
        const { applicationId } = this.state;
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            Application Status
                        </Typography>
                    </Toolbar>
                </AppBar>
                <TextField
                    id="applicationId"
                    label="Application ID"
                    className={classes.textField}
                    value={applicationId}
                    onChange={this.handleChange}
                    margin="normal"
                />
                <Button onClick={this.statusButtonHandler} variant="contained" color="secondary" className={classes.button}>Get Status</Button>
                <div className={classes.status}>
                    <label>Status:</label>
                    <label>In Progress</label>
                </div>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography className={classes.heading}>Application Details</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            <ApplicationDetails />
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        );
    }
}

export default withStyles(Styles)(withRouter(Status));