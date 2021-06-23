import React from 'react'
import SideBar from '../component/layout/SideBar'
import { Link } from 'react-router-dom'


function Dashboard() {
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

                        {/* Main Body Section */}
                        <section>
                            <div className="container">
                                <h3 className="text-left mt-3">Dashboard</h3>
                                <div className="row">
                                    <div className="col-md-3 my-3">
                                        <div className="p-3 shadow rounded-lg bg-light">
                                            <h2 className="mt-3 pt-1 font-weight-bold txt_clr" >0</h2>
                                            <h6 className="mb-3">New Users Today</h6>
                                            <h2 className="font-weight-bold txt_clr">49</h2>
                                            <h6 className="mb-3">Total Users</h6>
                                        </div>
                                    </div>
                                    <div className="col-md-3 my-3">
                                        <div className="p-3 shadow rounded-lg bg-light">
                                            <h2 className="mt-3 pt-1 font-weight-bold txt_clr" >0</h2>
                                            <h6 className="mb-3">Pending Verification</h6>
                                            <h2 className="font-weight-bold txt_clr invisible">2.9%</h2>
                                            <h6 className="mb-3 invisible">Avg. active users</h6>
                                        </div>
                                    </div>
                                    <div className="col-md-3 my-3">
                                        <div className="p-3 shadow rounded-lg bg-light">
                                            <h2 className="mt-3 pt-1 font-weight-bold txt_clr" >0%</h2>
                                            <h6 className="mb-3">Total Active Users</h6>
                                            <h2 className="font-weight-bold txt_clr">2.9%</h2>
                                            <h6 className="mb-3">Avg. active users</h6>
                                        </div>
                                    </div>
                                    <div className="col-md-3 mt-3 mb-5">
                                        <div className="p-3 shadow rounded-lg bg-light">
                                            <h2 className="mt-3 pt-1 font-weight-bold txt_clr">$0</h2>
                                            <h6 className="mb-3">Today's Revenue</h6>
                                            <h2 className="font-weight-bold txt_clr">$4850</h2>
                                            <h6 className="mb-3">Total Revenue</h6>
                                        </div>
                                    </div>

                                    {/* Row Total Users Accounts Details 2nd section */}
                                    <div className="px-5 pt-4 pb-4 m-auto shadow rounded-lg">
                                        <div className="row">
                                            <div className="col-md-4 txt_clr">
                                                <h2>40</h2>
                                                <h6>Total Beework Users</h6>
                                            </div>
                                            <div className="col-md-4 txt_clr">
                                                <h2>20</h2>
                                                <h6>Total Beelove Users</h6>
                                            </div>
                                            <div className="col-md-4 txt_clr">
                                                <h2>18</h2>
                                                <h6>Total Users Using Both</h6>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>

                        </section>



                    </div>
                </div>
            </section>
        </div>
    )
}

export default Dashboard




