import React, { PureComponent } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';


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

class CreateAccount extends PureComponent {
    constructor() {
        super()
        this.state = {
            panNumber: '',
            type: ''
        }
    }
    handleChange = () => {

    }
    render() {
        const { open, handleClose, classes } = this.props;
        const { panNumber, type } = this.state;
        return (
            <div>
                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Create Account</DialogTitle>
                    <DialogContent>
                        <div>
                            <TextField
                                id="panNumber"
                                label="PAN Number"
                                className={classes.textField}
                                value={panNumber}
                                onChange={this.handleChange}
                                margin="normal"
                            />
                        </div>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="type-simple">Select</InputLabel>
                            <Select
                                value={type}
                                onChange={this.handleChange}
                                inputProps={{
                                    name: 'type',
                                    id: 'type-simple',
                                }}
                            >
                                <MenuItem value={10}>Savings</MenuItem>
                                <MenuItem value={20}>Current</MenuItem>
                                <MenuItem value={30}>Joint Account</MenuItem>
                            </Select>
                        </FormControl>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="secondary">
                            Cancel
                        </Button>
                        <Button onClick={handleClose} color="primary">
                            Create
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default withStyles(Styles)(CreateAccount);