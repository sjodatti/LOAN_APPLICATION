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

class CorporateDetails extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            corporateName: '',
            corporateAddress: '',
            legalStructure: '',
            revenueOfLastYear: '',
        }
    }
    handleChange = (event) => {
        const { corporateName, corporateAddress, legalStructure, revenueOfLastYear } = this.state;
        this.setState({
            [event.target.id]: event.target.value
        }, this.props.getCorporateDetails({
            corporateName,
            corporateAddress,
            legalStructure,
            revenueOfLastYear

        }))
    }
    render() {
        const { classes } = this.props;
        const { corporateName, corporateAddress, legalStructure, revenueOfLastYear } = this.state;
        return (
            <div className={classes.root}>
                <div>
                    <TextField
                        id="corporateName"
                        label="Name"
                        className={classes.textField}
                        value={corporateName}
                        onChange={this.handleChange}
                        margin="normal"
                    />
                </div>
                <div>
                    <TextField
                        id="corporateAddress"
                        label="Address"
                        className={classes.textField}
                        value={corporateAddress}
                        onChange={this.handleChange}
                        margin="normal"
                    />
                </div>
                <div>
                    <TextField
                        id="legalStructure"
                        label="Legal Structure"
                        className={classes.textField}
                        value={legalStructure}
                        onChange={this.handleChange}
                        margin="normal"
                    />
                </div>
                <div>
                    <TextField
                        id="revenueOfLastYear"
                        label="Revenue Of Last Year"
                        className={classes.textField}
                        value={revenueOfLastYear}
                        onChange={this.handleChange}
                        margin="normal"
                    />
                </div>
            </div>
        );
    }
}

export default withStyles(Styles)(withRouter(CorporateDetails));