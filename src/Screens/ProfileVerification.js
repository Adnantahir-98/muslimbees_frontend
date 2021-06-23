import SideBar from '../component/layout/SideBar';
import { Link } from 'react-router-dom';
// React Tabs
import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


      
// React Tabs
function TabPanel(props) {
  const { count, page, rowsPerPage, onChangePage, children, value, index, ...other } = props;
  

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 998,
  },

}));



// Main Component Function...
export default function FullWidthTabs() {
  const classess = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };


    const classes = useStyles();

  return (
      <div>
        <section>
            <div className="row">
                <div className="col-md-3" style={{background:"#0d494e"}}>
                    <SideBar />
                </div>
                <div className="col-md-9">
                        {/* top Navbar */}
                        <div className="row bg-light py-2 shadow">
                            <div className=" ml-4 mt-2">
                                <Link to="/"><button className="btn btn-default text-muted float-left"><i className="fa fa-chevron-left mr-1"></i> Back </button></Link>
                            </div>
                            <div className="ml-auto pr-5">
                                <Link to="/login" className="text-muted">
                                    <img src="imgs/admin-settings-male.png" alt="default" className="rounded-circle img-fluid mr-2" style={{height:"50px", width:"55px" }} />
                                    <i className="fa fa-sign-out"></i>
                                </Link>
                            </div>
                        </div>
                    <div className={classess.root} className="mt-5 pt-5 pr-3">
                        <AppBar position="static" color="default">
                            <Tabs
                            value={value}
                            onChange={handleChange}
                            indicatorColor="primary"
                            textColor="primary"
                            variant="fullWidth"
                            aria-label="full width tabs example"
                            >
                                <Tab label="Verify Profiles" {...a11yProps(0)} />
                                <Tab label="Reference Photos" {...a11yProps(1)} />
                                {/* <Tab label="Logs" {...a11yProps(2)} /> */}
                                <Link to="#"><button className="btn ml-auto btn-sm m-2 text-white" style={{background:"darkslategrey"}}>Add Group</button></Link>
                            </Tabs>
                        </AppBar>
                        <SwipeableViews
                            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                            index={value}
                            onChangeIndex={handleChangeIndex}
                        >
                            {/* Tables */}
                            <TabPanel value={value} index={0} dir={theme.direction}>
                                
                            </TabPanel>
                            <TabPanel value={value} index={1} dir={theme.direction}>
                                <div className="shadow p-2 w-25">
                                 <img src="imgs/muslimbees_logo.jpg" alt="" className="img-fluid rounded-lg" style={{height:"208px", width:"200px"}} />
                                </div>
                            </TabPanel>
                            {/* <TabPanel value={value} index={2} dir={theme.direction}>
                            </TabPanel> */}
                        </SwipeableViews>
                    </div>

                </div>
            </div>
        </section>        
    </div>
  );
}




