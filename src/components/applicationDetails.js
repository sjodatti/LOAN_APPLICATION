import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

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
        this.key = 0;
    }
    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }
    componentWillReceiveProps(newProps) {
        const { duration, openAmount, monthlyRate } = newProps.applicationStatusDetails;
        this.setState({ duration, openAmount, monthlyRate });
        this.key++;
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
                        key={this.key}
                    />
                </div>
                <div>
                    <TextField
                        id="openAmount"
                        label="Open Amount"
                        defaultValue={openAmount}
                        className={classes.textField}
                        margin="normal"
                        key={this.key}
                    />
                </div>
                <div>
                    <TextField
                        id="monthlyRate"
                        label="Monthly Rate"
                        defaultValue={monthlyRate}
                        className={classes.textField}
                        margin="normal"
                        key={this.key}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        applicationStatusDetails: state.applicationStatusDetails
    }
}
export default withStyles(Styles)(withRouter(connect(mapStateToProps)(ApplicationDetails)));