import React from "react";
import classes from "./Authentication.module.css";
import {Link} from "react-router-dom";
import {GrClose} from "react-icons/gr";

const CreatePassword = () =>
    <div className={classes.Authentication}>
        <Link to="/" className={classes.closeButton}><GrClose size="20px"/></Link>
        <div className={classes.titleDiv}>
            <h1>Create Password</h1>
            <div className="mt-3 mb-5">
                <span>Please enter your email address or <Link className="ml-1" to="/login">Log In</Link></span>
            </div>
            <div className={classes.content}>
                <div>
                    <div className={"form-group " + classes.inputDiv}>
                        <label htmlFor="email" className={classes.label}>Email</label>
                        <input className={"form-control " + classes.inputForm} type="email" id="email"/>
                    </div>
                    <button className="btn btn-primary btn-block mt-5">Create Password</button>
                </div>
            </div>
        </div>
    </div>

export default CreatePassword;