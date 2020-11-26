import React, {Fragment} from "react";
import classes from "./Authentication.module.css";
import {Link} from "react-router-dom";
import {FcGoogle} from "react-icons/fc";

const LoginWithEmail = ({title}) =>
    <div>
        <div className={"form-group " + classes.inputDiv}>
            <label htmlFor="email" className={classes.label}>Email</label>
            <input className={"form-control " + classes.inputForm} type="email" id="email"/>
        </div>
        <div className={"form-group " + classes.inputDiv}>
            <label htmlFor="password" className={classes.label}>Password</label>
            <input className={"form-control " + classes.inputForm} type="password" id="password"/>
        </div>
        {title === "Log In" &&
        <Fragment>
            <div className="input-group">
                <input className="mt-1 mr-2" type="checkbox" id="admin" name="admin" value="admin"/>
                <label htmlFor="admin" className={classes.label}>Login as Admin</label>
            </div>
            <div className={classes.forgotPassword}>
                <Link to="/createpassword">Forgot password?</Link>
            </div>
        </Fragment>}
        <button className="btn btn-primary btn-block mt-5">{title}</button>
        <div className={classes.line}>
            <span className="bg-white p-2">or {title} with</span>
        </div>
        <FcGoogle size="30px"/>
    </div>

export default LoginWithEmail;