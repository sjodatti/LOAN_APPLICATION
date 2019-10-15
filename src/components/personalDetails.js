import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { withRouter } from 'react-router-dom';

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
            representiveName: '',
            representiveAddress: '',
            representiveCitizenShip: '',
            representiveDateOfBirth: '',
            representivePhoneNumber: '',
            representiveEmail: '',
            representivePassportNumber: '',
        }
    }
    handleChange = (event) => {
        const { representiveName, representiveAddress, representiveCitizenShip, representiveDateOfBirth, representivePhoneNumber, representiveEmail, representivePassportNumber } = this.state;
        this.setState({
            [event.target.id]: event.target.value
        }, this.props.getPersonalDetails({
            representiveName,
            representiveAddress,
            representiveCitizenShip,
            representiveDateOfBirth,
            representivePhoneNumber,
            representiveEmail,
            representivePassportNumber

        }))

    }
    render() {
        const { classes } = this.props;
        const { representiveName, representiveAddress, representiveCitizenShip, representiveDateOfBirth, representivePhoneNumber, representiveEmail, representivePassportNumber } = this.state;
        return (
            <div className={classes.root}>
                <div>
                    <TextField
                        id="representiveName"
                        label="representiveName"
                        className={classes.textField}
                        value={representiveName}
                        onChange={this.handleChange}
                        margin="normal"
                    />
                </div>
                <div>
                    <TextField
                        id="representiveAddress"
                        label="Address"
                        className={classes.textField}
                        value={representiveAddress}
                        onChange={this.handleChange}
                        margin="normal"
                    />
                </div>
                <div>
                    <TextField
                        id="representiveCitizenShip"
                        label="Citizenship"
                        className={classes.textField}
                        value={representiveCitizenShip}
                        onChange={this.handleChange}
                        margin="normal"
                    />
                </div>
                <div>
                    <TextField
                        id="representiveDateOfBirth"
                        label="DOB"
                        className={classes.textField}
                        value={representiveDateOfBirth}
                        onChange={this.handleChange}
                        margin="normal"
                    />
                </div>
                <div>
                    <TextField
                        id="representivePhoneNumber"
                        label="Phone Number"
                        className={classes.textField}
                        value={representivePhoneNumber}
                        onChange={this.handleChange}
                        margin="normal"
                    />
                </div>
                <div>
                    <TextField
                        id="representiveEmail"
                        label="Email"
                        className={classes.textField}
                        value={representiveEmail}
                        onChange={this.handleChange}
                        margin="normal"
                    />
                </div>
                <div>
                    <TextField
                        id="representivePassportNumber"
                        label="Passport"
                        className={classes.textField}
                        value={representivePassportNumber}
                        onChange={this.handleChange}
                        margin="normal"
                    />
                </div>
            </div>
        );
    }
}

export default withStyles(Styles)(withRouter(PersonalDetails));