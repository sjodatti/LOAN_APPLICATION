import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import ApplyLoan from './applyLoan';
import UploadDocument from './uploadDocument';
import Status from './status';



const Styles = (theme => ({
    root: {
        flexGrow: 1,
    }
}));

class TabsComp extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            value: 'apply',
            view: '',
            applicationDetails: {}
        }
    }
    handleChange = (event, newValue) => {
        this.setState({ value: newValue });
    }
    showUploadView = (applicationDetails) => {
        this.setState({ view: 'upload', applicationDetails })
    }
    render() {
        const { classes } = this.props;
        const { value, view, applicationDetails } = this.state;
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Tabs value={value} onChange={this.handleChange} aria-label="wrapped label tabs example">
                        <Tab
                            value="apply"
                            label="Apply"
                            wrapped
                        />
                        <Tab value="status" label="Status" />
                    </Tabs>
                </AppBar>
                <TabPanel value={value} index="apply">
                    {view !== 'upload' && <ApplyLoan showUploadView={this.showUploadView} />}
                    {view === 'upload' && <UploadDocument applicationDetails={applicationDetails} />}
                </TabPanel>
                <TabPanel value={value} index="status">
                    <Status />
                </TabPanel>
            </div>
        );
    }
}
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`wrapped-tabpanel-${index}`}
            aria-labelledby={`wrapped-tab-${index}`}
            {...other}
        >
            <Box p={3}>{children}</Box>
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};
export default withStyles(Styles)(withRouter(TabsComp));