import React from "react";
import classes from "./Authentication.module.css";
import {Link} from "react-router-dom";
import {GrClose} from "react-icons/gr";
import LoginWithGoogle from "./LoginWithGoogle";
import LoginWithEmail from "./LoginWithEmail";


const Login = () =>

    <div className={classes.Authentication}>
        <Link to="/" className={classes.closeButton}><GrClose size="20px"/></Link>
        <div className={classes.titleDiv}>
            <h1>Log In</h1>
            <div className="mt-3 mb-5">
                <span>New to BayBookClub?  <Link className="ml-1" to="/signup">Sign Up</Link></span>
            </div>
            <div className={classes.content}>
                <div>
                    <LoginWithEmail/>
                    <div className={classes.line}>
                        <span className="bg-white p-2">or Log In with</span>
                    </div>
                    <LoginWithGoogle type="login"/>
                </div>
            </div>
        </div>
    </div>


export default Login;