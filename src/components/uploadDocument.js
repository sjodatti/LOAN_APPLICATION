import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
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
    uploadButton: {
        margin: theme.spacing(1),
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
}));

class UploadDocument extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            file: null
        }
    }
    submitButtonHandler = () => {

    }
    onChangeHandler = event => {
        console.log(event.target.files[0])
        this.setState({ [event.target]: event.target.files[0] });
    }
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            Loan Application
                        </Typography>
                    </Toolbar>
                </AppBar>
                <input type="file" id='file' name="file" onChange={this.onChangeHandler} />
                <Button onClick={this.uploadButtonHandler} variant="contained" className={classes.uploadButton}>Upload</Button>
                <div>
                    <Button onClick={this.submitButtonHandler} variant="contained" color="primary" className={classes.button}>Submit</Button>
                </div>
            </div>
        );
    }
}

export default withStyles(Styles)(withRouter(UploadDocument));