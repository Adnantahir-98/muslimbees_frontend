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
// React Tables 
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';


// React Tables 

function TablePaginationActions(props) {
    const classes = useStyles();
    const theme = useTheme();
    const { count, page, rowsPerPage, onChangePage } = props;
  
    const handleFirstPageButtonClick = (event) => {
      onChangePage(event, 0);
    };
  
    const handleBackButtonClick = (event) => {
      onChangePage(event, page - 1);
    };
  
    const handleNextButtonClick = (event) => {
      onChangePage(event, page + 1);
    };
  
    const handleLastPageButtonClick = (event) => {
      onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <div className={classes.root}>
          <IconButton
            onClick={handleFirstPageButtonClick}
            disabled={page === 0}
            aria-label="first page"
          >
            {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
          </IconButton>
          <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
          </IconButton>
          <IconButton
            onClick={handleNextButtonClick}
            disabled={page >= Math.ceil(count / rowsPerPage) - 1}
            aria-label="next page"
          >
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </IconButton>
          <IconButton
            onClick={handleLastPageButtonClick}
            disabled={page >= Math.ceil(count / rowsPerPage) - 1}
            aria-label="last page"
          >
            {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
          </IconButton>
        </div>
      );
    }

    TablePaginationActions.propTypes = {
        count: PropTypes.number.isRequired,
        onChangePage: PropTypes.func.isRequired,
        page: PropTypes.number.isRequired,
        rowsPerPage: PropTypes.number.isRequired,
      };
      
      function createData(name, calories, fat) {
        return { name, calories, fat };
      }
      
      const rows = [
        createData('Cupcake', 305, 3.7),
        createData('Donut', 452, 25.0),
        createData('Eclair', 262, 16.0),
        createData('Frozen yoghurt', 159, 6.0),
        createData('Gingerbread', 356, 16.0),
        createData('Honeycomb', 408, 3.2),
        createData('Ice cream sandwich', 237, 9.0),
        createData('Jelly Bean', 375, 0.0),
        createData('KitKat', 518, 26.0),
        createData('Lollipop', 392, 0.2),
        createData('Marshmallow', 318, 0),
        createData('Nougat', 360, 19.0),
        createData('Oreo', 437, 18.0),
      ].sort((a, b) => (a.calories < b.calories ? -1 : 1));
      
      const useStyles2 = makeStyles({
        table: {
          minWidth: 500,
        },
      });
      
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
  //   for Tables
  root2: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));



// Main Component Function...
export default function Communication() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

    //   React Tables
    const classess = useStyles2();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
  
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };

  return (
      <div>
        <section>
            <div className="row">
                <div className="col-md-3" style={{background:"#0d494e"}}>
                    <SideBar />
                </div>
                <div className="col-md-9 mt-5 pt-5">
                    <div className={classes.root}>
                        <AppBar position="static" color="default">
                            <Tabs
                            value={value}
                            onChange={handleChange}
                            indicatorColor="primary"
                            textColor="primary"
                            variant="fullWidth"
                            aria-label="full width tabs example"
                            >
                                <Tab label="Manage Groups" {...a11yProps(0)} />
                                <Tab label="Manage Templates" {...a11yProps(1)} />
                                <Tab label="Logs" {...a11yProps(2)} />
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
                                {/* <TableContainer component={Paper}>
                                    <Table className={classes.table} aria-label="custom pagination table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell />
                                                <TableCell>Dessert (100g serving)</TableCell>
                                                <TableCell align="right">Calories</TableCell>
                                                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                                                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                                                <TableCell align="right">Protein&nbsp;(g)</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                        {(rowsPerPage > 0
                                            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                            : rows
                                        ).map((row) => (
                                            <TableRow key={row.name}>
                                            <TableCell component="th" scope="row">
                                                {row.name}
                                            </TableCell>
                                            <TableCell style={{ width: 160 }} align="right">
                                                {row.calories}
                                            </TableCell>
                                            <TableCell style={{ width: 160 }} align="right">
                                                {row.fat}
                                            </TableCell>
                                            </TableRow>
                                        ))}

                                        {emptyRows > 0 && (
                                            <TableRow style={{ height: 53 * emptyRows }}>
                                            <TableCell colSpan={6} />
                                            </TableRow>
                                        )}
                                        </TableBody>
                                        <TableFooter>
                                        <TableRow>
                                            <TablePagination
                                            rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                            colSpan={3}
                                            count={rows.length}
                                            rowsPerPage={rowsPerPage}
                                            page={page}
                                            SelectProps={{
                                                inputProps: { 'aria-label': 'rows per page' },
                                                native: true,
                                            }}
                                            onChangePage={handleChangePage}
                                            onChangeRowsPerPage={handleChangeRowsPerPage}
                                            ActionsComponent={TablePaginationActions}
                                            />
                                        </TableRow>
                                        </TableFooter>
                                    </Table>
                                    </TableContainer> */}
                                <TableContainer component={Paper}>
                                    <Table className={classes.table} aria-label="custom pagination table">
                                        {/* <TableHead>
                                            <TableRow>
                                                <TableCell>Date</TableCell>
                                                <TableCell>Customer</TableCell>
                                                <TableCell align="right">Amount</TableCell>
                                                <TableCell align="right">Total price ($)</TableCell>
                                            </TableRow>
                                        </TableHead> */}
                                        <TableBody>
                                        {(rowsPerPage > 0
                                            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                            : rows
                                        ).map((row) => (
                                            <TableRow key={row.name}>
                                            <TableCell component="th" scope="row">
                                                {row.name}
                                            </TableCell>
                                            <TableCell style={{ width: 160 }} align="right">
                                                {row.calories}
                                            </TableCell>
                                            <TableCell style={{ width: 160 }} align="right">
                                                {row.fat}
                                            </TableCell>
                                            </TableRow>
                                        ))}

                                        {emptyRows > 0 && (
                                            <TableRow style={{ height: 53 * emptyRows }}>
                                            <TableCell colSpan={6} />
                                            </TableRow>
                                        )}
                                        </TableBody>
                                        <TableFooter>
                                        <TableRow>
                                            <TablePagination
                                            rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                            colSpan={3}
                                            count={rows.length}
                                            rowsPerPage={rowsPerPage}
                                            page={page}
                                            SelectProps={{
                                                inputProps: { 'aria-label': 'rows per page' },
                                                native: true,
                                            }}
                                            onChangePage={handleChangePage}
                                            onChangeRowsPerPage={handleChangeRowsPerPage}
                                            ActionsComponent={TablePaginationActions}
                                            />
                                        </TableRow>
                                        </TableFooter>
                                    </Table>
                                </TableContainer>
                            </TabPanel>
                            <TabPanel value={value} index={1} dir={theme.direction}>
                            <TableContainer component={Paper}>
                                    <Table className={classes.table} aria-label="custom pagination table">
                                        {/* <TableHead>
                                            <TableRow>
                                                <TableCell>Date</TableCell>
                                                <TableCell>Customer</TableCell>
                                                <TableCell align="right">Amount</TableCell>
                                                <TableCell align="right">Total price ($)</TableCell>
                                            </TableRow>
                                        </TableHead> */}
                                        <TableBody>
                                        {(rowsPerPage > 0
                                            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                            : rows
                                        ).map((row) => (
                                            <TableRow key={row.name}>
                                            <TableCell component="th" scope="row">
                                                {row.name}
                                            </TableCell>
                                            <TableCell style={{ width: 160 }} align="right">
                                                {row.calories}
                                            </TableCell>
                                            <TableCell style={{ width: 160 }} align="right">
                                                {row.fat}
                                            </TableCell>
                                            </TableRow>
                                        ))}

                                        {emptyRows > 0 && (
                                            <TableRow style={{ height: 53 * emptyRows }}>
                                            <TableCell colSpan={6} />
                                            </TableRow>
                                        )}
                                        </TableBody>
                                        <TableFooter>
                                        <TableRow>
                                            <TablePagination
                                            rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                            colSpan={3}
                                            count={rows.length}
                                            rowsPerPage={rowsPerPage}
                                            page={page}
                                            SelectProps={{
                                                inputProps: { 'aria-label': 'rows per page' },
                                                native: true,
                                            }}
                                            onChangePage={handleChangePage}
                                            onChangeRowsPerPage={handleChangeRowsPerPage}
                                            ActionsComponent={TablePaginationActions}
                                            />
                                        </TableRow>
                                        </TableFooter>
                                    </Table>
                                </TableContainer>
                            </TabPanel>
                            <TabPanel value={value} index={2} dir={theme.direction}>
                            <TableContainer component={Paper}>
                                    <Table className={classes.table} aria-label="custom pagination table">
                                        {/* <TableHead>
                                            <TableRow>
                                                <TableCell>Date</TableCell>
                                                <TableCell>Customer</TableCell>
                                                <TableCell align="right">Amount</TableCell>
                                                <TableCell align="right">Total price ($)</TableCell>
                                            </TableRow>
                                        </TableHead> */}
                                        <TableBody>
                                        {(rowsPerPage > 0
                                            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                            : rows
                                        ).map((row) => (
                                            <TableRow key={row.name}>
                                            <TableCell component="th" scope="row">
                                                {row.name}
                                            </TableCell>
                                            <TableCell style={{ width: 160 }} align="right">
                                                {row.calories}
                                            </TableCell>
                                            <TableCell style={{ width: 160 }} align="right">
                                                {row.fat}
                                            </TableCell>
                                            </TableRow>
                                        ))}

                                        {emptyRows > 0 && (
                                            <TableRow style={{ height: 53 * emptyRows }}>
                                            <TableCell colSpan={6} />
                                            </TableRow>
                                        )}
                                        </TableBody>
                                        <TableFooter>
                                        <TableRow>
                                            <TablePagination
                                            rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                            colSpan={3}
                                            count={rows.length}
                                            rowsPerPage={rowsPerPage}
                                            page={page}
                                            SelectProps={{
                                                inputProps: { 'aria-label': 'rows per page' },
                                                native: true,
                                            }}
                                            onChangePage={handleChangePage}
                                            onChangeRowsPerPage={handleChangeRowsPerPage}
                                            ActionsComponent={TablePaginationActions}
                                            />
                                        </TableRow>
                                        </TableFooter>
                                    </Table>
                                </TableContainer>
                            </TabPanel>
                        </SwipeableViews>
                    </div>

                </div>
            </div>
        </section>        
    </div>
  );
}


