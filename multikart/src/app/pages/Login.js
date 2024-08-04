import "../../assets/css/Login.css"

function Login() {
    return (
        <section>

            <div className="container text-center">

                {/* navBar of Login page */}
                <nav className="navbar bg-body-tertiary nav">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">LOGIN</a>
                        <a className="navbar-brand" href="/">HOME/LOGIN</a>
                    </div>
                </nav>


                <div className="row">
                    <div className="col top_space">
                        <div className="h3 loginMargin">LOGIN</div>
                        <div className="card redius">

                            {/* log in section */}
                            <form>

                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-control-plaintext lebMargine" id="floatingPlaintextInput" >Email address</label>
                                    <input type="email" className="form-control mx-auto p-2 redius" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ width: "500px" }} />
                                </div>

                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-control-plaintext lebMarginePass">Password</label>
                                    <input type="password" className="form-control mx-auto p-2 redius" id="exampleInputPassword1" style={{ width: "500px" }} />
                                </div>

                                <button type="submit" className="btn btn-primary btnMargin redius bt-color hover">Submit</button>

                            </form>
                        </div>
                    </div>

                    {/* new customer section */}
                    <div className="col top_space">

                        <div className="h3 newCustLogin">NEW CUSTOMER</div>
                        <div className="card redius">
                            <h5 className="account">CREATE ACCOUNT</h5>
                            <p className="para">Sign up for a free account at our store. Registration is quick and easy. It allows you to be able to order from our shop. To start shopping click register.</p>
                            <button type="submit" className="btn btn-primary btnMargin1 redius bt-color hover" >CREATE AN ACCOUNT</button>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
export default Login
