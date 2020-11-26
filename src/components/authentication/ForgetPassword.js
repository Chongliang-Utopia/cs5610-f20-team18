import React from "react";
import classes from "./Authentication.module.css";

const ForgetPassword = () =>
    <div>
        <div className={"form-group " + classes.inputDiv}>
            <label htmlFor="email" className={classes.label}>Email</label>
            <input className={"form-control " + classes.inputForm} type="email" id="email"/>
        </div>
        <button className="btn btn-primary btn-block mt-5">Create Password</button>
    </div>

export default ForgetPassword;
