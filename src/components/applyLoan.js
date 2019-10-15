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
import PersonalDetails from './personalDetails';
import CorporateDetails from './corporateDetails';
import LoanDetails from './loanDetails';
import { withRouter } from 'react-router-dom';

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
    routerLink: {
        margin: theme.spacing(8),
    },
    button: {
        margin: theme.spacing(8),
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
}));

class ApplyLoan extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.personalDetails = null;
        this.corporateDetails = null;
        this.loanDetails = null;

    }
    submitButtonHandler = () => {
        this.props.showUploadView({
            personalDetails: this.personalDetails,
            corporateDetails: this.corporateDetails,
            loanDetails: this.loanDetails
        });
    }
    getPersonalDetails = (personalDetails) => {
        this.personalDetails = personalDetails;
    }
    getCorporateDetails = (corporateDetails) => {
        this.corporateDetails = corporateDetails;
    }
    getLoanDetails = (loanDetails) => {
        this.loanDetails = loanDetails;
    }
    render() {
        const { classes } = this.props;
        const { open } = this.state;
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            Loan Application
                        </Typography>
                    </Toolbar>
                </AppBar>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>Personal Details</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            <PersonalDetails getPersonalDetails={this.getPersonalDetails} />
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography className={classes.heading}>Corporate Details</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            <CorporateDetails getCorporateDetails={this.getCorporateDetails} />
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography className={classes.heading}>Loan Details</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            <LoanDetails getLoanDetails={this.getLoanDetails} />
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <Button onClick={this.submitButtonHandler} variant="contained" color="primary" className={classes.button}>Upload & Submit</Button>
            </div>
        );
    }
}

export default withStyles(Styles)(withRouter(ApplyLoan));