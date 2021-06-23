import React from 'react'
import { Link } from 'react-router-dom'


function SideBar() {
    return (
        <div>
        
            <section className="text-white text-left">
                <div className="text-center">
                    <Link to="/"><img src="imgs/muslimbees_logo-_header-2.jpg" alt="" className="img-fluid pt-3" style={{height:"140px", width:"190px", background:"#0d494e"}} /></Link>
                </div>
                <div className="p-3 mt-4">
                    <Link to="/" className="text-white"><h5><i className="fa fa-line-chart mr-3 font-weight-bold"></i>Dashboard</h5></Link>
                </div>
                <div className="p-3">
                    <Link to="/profileverify" className="text-white"><h5><i className="fa fa-user-plus mr-3 font-weight-bold"></i>Profile Verification</h5></Link>
                </div>
                <div className="p-3">
                    <Link to="/usermanagement" className="text-white"><h5><i className="fa fa-bar-chart border-danger mr-3 font-weight-bold"></i>User Management</h5></Link>
                </div>
                <div className="p-3">
                    <Link to="/communication" className="text-white"><h5><i className="fa fa-globe mr-3 font-weight-bold"></i>Communication</h5></Link>
                </div>
                <div className="p-3">
                    <Link to="/tickets" className="text-white"><h5><i className="fa fa-ticket mr-3 font-weight-bold"></i>Tickets</h5></Link>
                </div>
                <div className="p-3">
                    <Link to="/payments" className="text-white"><h5><i className="fa fa-credit-card mr-3 font-weight-bold"></i>Payments</h5></Link>
                </div>
                <div className="p-3">
                    <Link to="/allusers" className="text-white"><h5><i className="fa fa-users mr-3 font-weight-bold"></i>Internet Users</h5></Link>
                </div>
                <div className="p-3">
                    <Link to="/config" className="text-white"><h5><i className="fa fa-cogs mr-3 font-weight-bold"></i>Configurations</h5></Link>
                </div>
            </section>
        </div>
    )
}

export default SideBar


