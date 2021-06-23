import React from 'react';
import { DataGrid, GridToolbar } from '@material-ui/data-grid';
import { useDemoData } from '@material-ui/x-grid-data-generator';
import SideBar from '../component/layout/SideBar'
import { Link } from 'react-router-dom';


export default function Users() {
    
//   const { data } = useDemoData({
//     dataSet: 'Commodity',
//     rowLength: 100,
//     maxColumns: 9,
//   });
  

  return (
    <div>
        <section>
            <div className="row">
                <div className="col-md-3" style={{background:"#0d494e"}}>
                    <SideBar />
                </div>
                <div className="col-md-9">
                    {/* top Navbar */}
                    <div className="row bg-light mb-5 shadow">
                        <div className="mt-2 ml-4">
                            <Link to="/"><button className="btn btn-default text-muted float-left"><i className="fa fa-chevron-left mr-1"></i> Back </button></Link>
                        </div>
                        <div className="ml-auto pr-5">
                            <Link to="/login" className="text-muted">
                                <img src="imgs/admin-settings-male.png" alt="default" className="rounded-circle img-fluid mr-2" style={{height:"50px", width:"55px" }} />
                                <i className="fa fa-sign-out"></i>
                            </Link>
                        </div>
                    </div>
                    <div className="mt-5 pt-5 pr-3 bg-white px-2">
                    <div className="row">
                        <h5 className="text-left ml-4 mb-5 text-muted">All Users</h5>
                        <div className="col-auto ml-auto">
                            <div className="input-group mb-2">
                                <div className="input-group-prepend">
                                <div className="input-group-text bg-white border-right-0"><i className="fa fa-search"></i></div>
                                </div>
                                <input type="text" className="form-control border-left-0" placeholder="Search..." />
                            </div>
                        </div>
                    </div>
                    <table className="table table-striped bg-light table-bordered">
                        <thead>
                            <tr className="text-muted">
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Mobile</th>
                            <th scope="col">Role</th>
                            <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td scope="row">admin</td>
                                <td>admin@admin.com</td>
                                <td>367-5833-2690</td>
                                <td>Admin</td>
                                <td><buttton className="btn btn-default bg-light"><i className="fa fa-circle text-success mr-2"></i>Super</buttton></td>
                            </tr>
                            <tr>
                                <td scope="row">Aslam</td>
                                <td>aslam@yahoo.com</td>
                                <td>907-32438-923</td>
                                <td>Staff </td>
                                <td><buttton className="btn btn-default bg-white"><i className="fa fa-circle text-success mr-2"></i>Active</buttton></td>
                            </tr>
                            <tr>
                                <td scope="row">Waqar</td>
                                <td colspan="1">waqar324@gmail.com</td>
                                <td>5106-201-33929</td>
                                <td>Member</td>
                                <td><buttton className="btn btn-default bg-light"><i className="fa fa-circle text-success mr-2"></i>Active</buttton></td>
                            </tr>
                            <tr>
                                <td scope="row">Mr Bean</td>
                                <td>bean@worldbank.com</td>
                                <td>436-6-920-32</td>
                                <td>Manager</td>
                                <td><buttton className="btn btn-default bg-light"><i className="fa fa-circle text-success mr-2"></i>Active</buttton></td>
                            </tr>
                            <tr>
                                <td scope="row">Burhan</td>
                                <td>burhan@business.com</td>
                                <td>4593-32473-9343</td>
                                <td>User </td>
                                <td><buttton className="btn btn-default bg-white"><i className="fa fa-circle text-danger mr-2"></i>Inactive</buttton></td>
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
                </div>
            </div>
        </section>
    </div>
  );
}
