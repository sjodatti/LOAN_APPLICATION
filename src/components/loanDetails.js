import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { withRouter } from 'react-router-dom';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

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
    formControl: {
        margin: theme.spacing(1),
        minWidth: 400,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

class LoanDetails extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            amount: '',
            term: '',
            usage: ''
        }
    }
    handleChange = (event) => {
        const { amount, term, usage } = this.state;
        this.setState({
            [event.target.id]: event.target.value
        }, this.props.getLoanDetails({
            amount,
            term,
            usage
        }))
    }
    render() {
        const { classes } = this.props;
        const { amount, term, usage } = this.state;
        return (
            <div className={classes.root}>
                <div>
                    <TextField
                        id="amount"
                        label="Amount"
                        className={classes.textField}
                        value={amount}
                        onChange={this.handleChange}
                        margin="normal"
                    />
                </div>
                <div>
                    <TextField
                        id="term"
                        label="Term"
                        className={classes.textField}
                        value={term}
                        onChange={this.handleChange}
                        margin="normal"
                    />
                </div>
                <div>
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="usage-simple">Usage</InputLabel>
                        <Select
                            value={usage}
                            onChange={this.handleChange}
                            inputProps={{
                                name: 'usage',
                                id: 'usage-simple',
                            }}
                        >
                            <MenuItem value={10}>Current Assets</MenuItem>
                            <MenuItem value={20}>Dept Restructuring</MenuItem>
                            <MenuItem value={30}>Investment in Fixed Assets</MenuItem>
                            <MenuItem value={30}>Growth Capital</MenuItem>
                            <MenuItem value={30}>Others</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>
        );
    }
}

export default withStyles(Styles)(withRouter(LoanDetails));