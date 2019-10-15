import React, { PureComponent } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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

class TransferFunds extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            fromAccount: '',
            toAccount: '',
            amount: ''
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }
    transferButtonHandler = () => {
        const { fromAccount, toAccount, amount } = this.state;
        const payload = {
            fromAccount,
            toAccount,
            amount
        }
        console.log(payload);
    }
    render() {
        const { classes } = this.props;
        const { fromAccount, toAccount, amount } = this.state;
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            Funds Transfer
                        </Typography>
                    </Toolbar>
                </AppBar>
                <div>
                    <TextField
                        id="fromAccount"
                        label="From Account"
                        className={classes.textField}
                        value={fromAccount}
                        onChange={this.handleChange}
                        margin="normal"
                    />
                </div>
                <div>
                    <TextField
                        id="toAccount"
                        label="To Account"
                        className={classes.textField}
                        value={toAccount}
                        onChange={this.handleChange}
                        margin="normal"
                    />
                </div>
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
                <Button onClick={this.transferButtonHandler} variant="contained" color="primary" className={classes.button}>Transfer</Button>
            </div>
        );
    }
}

export default withStyles(Styles)(TransferFunds);