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
            corporateLegalStructure: '',
            corporateRevenueLastYear: '',
            corporateAge: 0,
            corporateCurrentDebt: 0,
            corporateFinancialStatement: '',
        }
    }
    handleChange = (event) => {
        const { corporateName,
            corporateAddress,
            corporateLegalStructure,
            corporateRevenueLastYear,
            corporateAge,
            corporateCurrentDebt,
            corporateFinancialStatement
        } = this.state;
        this.setState({
            [event.target.id]: event.target.value
        }, this.props.getCorporateDetails({
            corporateName,
            corporateAddress,
            corporateLegalStructure,
            corporateRevenueLastYear,
            corporateAge,
            corporateCurrentDebt,
            corporateFinancialStatement

        }))
    }
    render() {
        const { classes } = this.props;
        const { corporateName,
            corporateAddress,
            corporateLegalStructure,
            corporateRevenueLastYear,
            corporateAge,
            corporateCurrentDebt,
            corporateFinancialStatement
        } = this.state;
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
                        id="corporateLegalStructure"
                        label="Legal Structure"
                        className={classes.textField}
                        value={corporateLegalStructure}
                        onChange={this.handleChange}
                        margin="normal"
                    />
                </div>
                <div>
                    <TextField
                        id="corporateRevenueLastYear"
                        label="Revenue Of Last Year"
                        className={classes.textField}
                        value={corporateRevenueLastYear}
                        onChange={this.handleChange}
                        margin="normal"
                    />
                </div>
                <div>
                    <TextField
                        id="corporateAge"
                        label="Age"
                        className={classes.textField}
                        value={corporateAge}
                        onChange={this.handleChange}
                        margin="normal"
                    />
                </div>
                <div>
                    <TextField
                        id="corporateCurrentDebt"
                        label="Current Debt"
                        className={classes.textField}
                        value={corporateCurrentDebt}
                        onChange={this.handleChange}
                        margin="normal"
                    />
                </div>
            </div>
        );
    }
}

export default withStyles(Styles)(withRouter(CorporateDetails));