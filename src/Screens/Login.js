import React from 'react'
import { Link } from 'react-router-dom'


function Login() {
    return (
        <div>
            
            <section>

                <div className="row">
                    <div className="col-md-6 bee_img">
                        <Link to="/"><img src="imgs/Muslimbees_logo.jpg" alt="Muslimbees_logo" className="img-fluid" style={{width:"225px" ,height:"200px"}} /></Link>
                    </div>
                    <div className="col-md-6" style={{background:"#0d494e", height:"100vh"}}>
                        <div className="container login_form">
                            <h3 className="text-white text-left mb-4">Login</h3>
                            <form method="POST" className="">
                                <div className="form-group">
                                    <input type="text" placeholder="Email" name="email" className="login_input form-control text-white rounded-0 border-top-0 border-right-0 border-left-0 border-white" />
                                </div>

                                <div className="form-group">
                                    <input type="password" placeholder="Password" name="password" className="login_input text-white rounded-0 form-control border-top-0 border-right-0 border-left-0 border-white" />
                                </div>
                                <div className="form-group">
                                    <Link to="/dashboard"><button className="btn btn-default mt-4 btn-block border-white text-left text-white">Login <i className="fa fa-arrow-right rounded-0 float-right mt-1"></i></button></Link>
                                    <p className="float-right mt-1"><Link className="text-white">Forgot Password?</Link></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Login
