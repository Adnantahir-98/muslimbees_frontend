import React from 'react';
import { DataGrid, GridToolbar } from '@material-ui/data-grid';
import { useDemoData } from '@material-ui/x-grid-data-generator';
import SideBar from '../component/layout/SideBar'
import { Link } from 'react-router-dom';


export default function UserManagement() {
    
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 100,
    maxColumns: 9,
  });
  

  return (
    <div>
        <section>
            <div className="row">
                <div className="col-md-3" style={{background:"#0d494e", height:"102vh"}}>
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
                    <div style={{ height: 550, width: '100%' }} className="mt-5 pt-5 pr-3">
                    <DataGrid
                        {...data}
                        components={{
                        Toolbar: GridToolbar,
                        }}
                        filterModel={{
                        items: [
                            { columnField: 'commodity', operatorValue: 'contains', value: 'rice' },
                        ],
                        }}
                    />
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}
