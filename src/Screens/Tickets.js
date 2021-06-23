import React from 'react';
import { DataGrid, GridToolbar } from '@material-ui/data-grid';
import { useDemoData } from '@material-ui/x-grid-data-generator';
import SideBar from '../component/layout/SideBar'
import { Link } from 'react-router-dom';


export default function Ticket() {
    
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
                        <h5 className="text-left ml-4 mb-5 text-muted">All Tickets</h5>
                        <div class="col-auto ml-auto">
                            <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                <div class="input-group-text bg-white border-right-0"><i className="fa fa-search"></i></div>
                                </div>
                                <input type="text" class="form-control border-left-0" placeholder="Search..." />
                            </div>
                        </div>
                    </div>
                    <table class="table table-striped bg-light table-bordered">
                        <thead>
                            <tr className="text-muted">
                            <th scope="col">Name</th>
                            <th scope="col">Date</th>
                            <th scope="col">Type</th>
                            <th scope="col">Reason</th>
                            <th scope="col">Description</th>
                            <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Block</td>
                            <td>Have a Problem</td>
                            <td></td>
                            <td><buttton class="btn btn-default bg-light"><span class=""></span>Open</buttton></td>
                            </tr>
                            <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>Inaapropriate Content</td>
                            <td></td>
                            <td><buttton class="btn btn-default bg-white">Resolved</buttton></td>
                            </tr>
                            <tr>
                            <th scope="row">3</th>
                            <td colspan="1">Larry the Bird</td>
                            <td>Deactivated</td>
                            <td>Voilated the Rules</td>
                            <td></td>
                            <td><buttton class="btn btn-default bg-light"><span class=""></span>Open</buttton></td>
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
