import React, { PureComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { CreateUserAction } from '../redux/action/appActions';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}));

class MyButton extends PureComponent {
    componentDidMount() {
        this.props.dispatch(CreateUserAction())
    }
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Button variant="outlined" color="primary" >
                    Primary
                </Button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userData: state.userData
    }
}

export default connect(mapStateToProps)(MyButton);
