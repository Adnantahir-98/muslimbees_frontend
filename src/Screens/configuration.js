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
        <section className="bg-light">
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
                                <Tab label="Questions" {...a11yProps(0)} />
                                <Tab label="Quotes" {...a11yProps(1)} />
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
                                <div className="row mt-3">
                                    <div className="col-md-6">
                                        <div className="bg-white shadow p-4 rounded-lg">
                                            {/* Heading and Plus button */}
                                            <div className="row">
                                                <h3 className="text-primary font-weight-bold text-left pl-2">bee<small>work</small></h3>
                                                <span className="ml-auto pr-4"><a href="#"><i className="btn btn-primary fa fa-plus float-right p-3"></i></a></span>
                                            </div>
                                            {/* Search Bar */}
                                            <div class="w-50 mt-3">
                                                <div class="input-group mb-2">
                                                    <div class="input-group-prepend">
                                                    <div class="input-group-text bg-white border-right-0"><i className="fa fa-search"></i></div>
                                                    </div>
                                                    <input type="text" class="form-control border-left-0 bg-light" placeholder="Search..." />
                                                </div>
                                            </div>

                                            <div className="row mt-3 px-3">
                                                <p className="mt-2 w-75 text-left">Business advice I would give my younger self</p>
                                                <span className="ml-auto">
                                                <a href="#"><i className="fa fa-edit bg-light rounded-circle p-3 text-info"></i></a>
                                                    <a href="#"><i className="fa fa-trash text-danger bg-light rounded-circle p-3 ml-2"></i></a>
                                                </span>
                                            </div>
                                            <div className="row mt-3 px-3">
                                                <p className="mt-2 w-75 text-left">The one app I can't work without</p>
                                                <span className="ml-auto">
                                                    <a href="#"><i className="fa fa-edit bg-light rounded-circle p-3 text-info"></i></a>
                                                    <a href="#"><i className="fa fa-trash text-danger bg-light rounded-circle p-3 ml-2"></i></a>
                                                </span>
                                            </div>
                                            <div className="row mt-3 px-3">
                                                <p className="mt-2 w-75 text-left">How has COVID-19 changed you</p>
                                                <span className="ml-auto">
                                                    <a href="#"><i className="fa fa-edit bg-light rounded-circle p-3 text-info"></i></a>
                                                    <a href="#"><i className="fa fa-trash text-danger bg-light rounded-circle p-3 ml-2"></i></a>
                                                </span>
                                            </div>
                                            <div className="row mt-3 px-3">
                                                <p className="mt-2 w-75 text-left">Most difficult career decision I ever made...</p>
                                                <span className="ml-auto">
                                                    <a href="#"><i className="fa fa-edit bg-light rounded-circle p-3 text-info"></i></a>
                                                    <a href="#"><i className="fa fa-trash text-danger bg-light rounded-circle p-3 ml-2"></i></a>
                                                </span>
                                            </div>
                                            <div className="row mt-3 px-3">
                                                <p className="mt-2 w-75 text-left">The most valuable lesson COVID-19 taught me</p>
                                                <span className="ml-auto">
                                                    <a href="#"><i className="fa fa-edit bg-light rounded-circle p-3 text-info"></i></a>
                                                    <a href="#"><i className="fa fa-trash text-danger bg-light rounded-circle p-3 ml-2"></i></a>
                                                </span>
                                            </div>
                                            <div className="row mt-3 px-3">
                                                <p className="mt-2 w-75 text-left">My dream company's board of directors would be</p>
                                                <span className="ml-auto">
                                                    <a href="#"><i className="fa fa-edit bg-light rounded-circle p-3 text-info"></i></a>
                                                    <a href="#"><i className="fa fa-trash text-danger bg-light rounded-circle p-3 ml-2"></i></a>
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 bg-white shadow p-4 rounded-lg">
                                        {/* Heading and Plus button */}
                                        <div className="row">
                                            <h3 className="text-danger font-weight-bold text-left pl-2">bee<small>love</small></h3>
                                            <span className="ml-auto pr-4"><a href="#"><i className="btn btn-danger fa fa-plus float-right p-3"></i></a></span>
                                        </div>
                                        {/* Search Bar */}
                                        <div class="w-50 mt-3">
                                            <div class="input-group mb-2">
                                                <div class="input-group-prepend">
                                                <div class="input-group-text bg-white border-right-0"><i className="fa fa-search"></i></div>
                                                </div>
                                                <input type="text" class="form-control border-left-0 bg-light" placeholder="Search..." />
                                            </div>
                                        </div>

                                        <div className="row mt-3 px-3">
                                            <p className="mt-2 w-75 text-left">The person I text the most is</p>
                                            <span className="ml-auto">
                                                <a href="#"><i className="fa fa-edit bg-light rounded-circle p-3 text-info"></i></a>
                                                <a href="#"><i className="fa fa-trash text-danger bg-light rounded-circle p-3 ml-2"></i></a>
                                            </span>
                                        </div>
                                        <div className="row mt-3 px-3">
                                            <p className="mt-2 w-75 text-left">Favourite quality in a person is</p>
                                            <span className="ml-auto">
                                                <a href="#"><i className="fa fa-edit bg-light rounded-circle p-3 text-info"></i></a>
                                                <a href="#"><i className="fa fa-trash text-danger bg-light rounded-circle p-3 ml-2"></i></a>
                                            </span>
                                        </div>
                                        <div className="row mt-3 px-3">
                                            <p className="mt-2 w-75 text-left">Over the weekend you can find me at</p>
                                            <span className="ml-auto">
                                                <a href="#"><i className="fa fa-edit bg-light rounded-circle p-3 text-info"></i></a>
                                                <a href="#"><i className="fa fa-trash text-danger bg-light rounded-circle p-3 ml-2"></i></a>
                                            </span>
                                        </div>
                                        <div className="row mt-3 px-3">
                                            <p className="mt-2 w-75 text-left">My dream dinner guest is</p>
                                            <span className="ml-auto">
                                                <a href="#"><i className="fa fa-edit bg-light rounded-circle p-3 text-info"></i></a>
                                                <a href="#"><i className="fa fa-trash text-danger bg-light rounded-circle p-3 ml-2"></i></a>
                                            </span>
                                        </div>
                                        <div className="row mt-3 px-3">
                                            <p className="mt-2 w-75 text-left">If I could donate a million pounds, it would be to</p>
                                            <span className="ml-auto">
                                                <a href="#"><i className="fa fa-edit bg-light rounded-circle p-3 text-info"></i></a>
                                                <a href="#"><i className="fa fa-trash text-danger bg-light rounded-circle p-3 ml-2"></i></a>
                                            </span>
                                        </div>
                                        <div className="row mt-3 px-3">
                                            <p className="mt-2 w-75 text-left">My mother would describe me as</p>
                                            <span className="ml-auto">
                                                <a href="#"><i className="fa fa-edit bg-light rounded-circle p-3 text-info"></i></a>
                                                <a href="#"><i className="fa fa-trash text-danger bg-light rounded-circle p-3 ml-2"></i></a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel value={value} index={1} dir={theme.direction}>
                                <div className="mt-5 pt-5 pr-3 bg-white px-2">
                                <div className="row">
                                    <h5 className="text-left ml-4 mb-5 text-muted">All Quotes</h5>
                                    <div class="col-auto ml-auto">
                                       <Link href="#"><button className="btn btn-success" style={{background:"#0d494e"}}>Add Quote</button></Link>
                                    </div>
                                </div>
                                <table class="table table-striped bg-light table-bordered">
                                    <thead>
                                        <tr className="text-muted">
                                            <th scope="col">Image</th>
                                            <th scope="col">Description</th>
                                            <th scope="col">Author Name</th>
                                            <th scope="col">Create at</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td scope="row"><img src="imgs/muslimbees_logo.jpg" className="img-fluid" alt="" style={{height:"40px", width:"60px"}} /></td>
                                            <td>As long as you have Allah, you have no reason to lose hope or give up.</td>
                                            <td>MBD</td>
                                            <td>24/02/2021</td>
                                            <td><buttton class="btn btn-default bg-light"><span class=""></span>Open</buttton></td>
                                        </tr>
                                        <tr>
                                            <td scope="row"><img src="imgs/muslimbees_logo-_header-2.jpg" className="img-fluid" alt="" style={{height:"40px", width:"60px"}} /></td>
                                            <td>You have no reason to lose hope or never ever give up.</td>
                                            <td>Haider</td>
                                            <td>25/02/2021</td>
                                            <td><buttton class="btn btn-default bg-white">Resolved</buttton></td>
                                        </tr>
                                        
                                    </tbody>
                                </table>
                                {/* <DataGrid
                                    {...data}
                                    components={{
                                    Toolbar: GridToolbar,
                                    }}
                                    filterModel={{
                                    items: [
                                        { columnField: 'commodity', operatorValue: 'contains', value: 'rice' },
                                    ],
                                    }}
                                /> */}
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




