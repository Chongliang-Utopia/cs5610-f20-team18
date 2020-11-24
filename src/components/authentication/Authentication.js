import React, {useState} from "react";
import {GrClose} from "react-icons/gr";
import {FcGoogle} from "react-icons/fc";
import {Link} from "react-router-dom";
import classes from "./Authentication.module.css";

const Authentication = ({title, link, message, url}) => {

    const [showEmail, setShowEmail] = useState(false);

    const renderForm = () => {
        if (!showEmail) {
            return (
                <div>
                    <button className="btn btn-danger btn-block">
                        <i className="fa fa-google fa-lg float-left mt-1"/>
                        {title} with Google
                    </button>
                    <div className={classes.line}>
                        <span className="bg-white p-2">or</span>
                    </div>
                    <button
                        onClick={() => setShowEmail(true)}
                        className="btn btn-outline-secondary btn-block">
                        {title} with Email
                    </button>
                </div>
            )
        } else {
            return (
                <div>
                    <div className={"form-group " + classes.inputDiv}>
                        <label htmlFor="email" className={classes.label}>Email</label>
                        <input className={"form-control " + classes.inputForm} type="email" id="email"/>
                    </div>
                    <div className={"form-group " + classes.inputDiv}>
                        <label htmlFor="password" className={classes.label}>Password</label>
                        <input className={"form-control " + classes.inputForm} type="password" id="password"/>
                    </div>
                    {title === "Log In" && <div className={classes.forgotPassword}>
                        <Link to="/createpassword">Forgot password?</Link>
                    </div>}
                    <button className="btn btn-primary btn-block mt-5">{title}</button>
                    <div className={classes.line}>
                        <span className="bg-white p-2">or {title} with</span>
                    </div>
                    <FcGoogle size="30px"/>
                </div>
            )
        }
    }

    return (
        <div className={classes.Authentication}>
            <Link to="/" className={classes.closeButton}><GrClose size="20px"/></Link>
            <div className={classes.titleDiv}>
                <h1>{title}</h1>
                <div className="mt-3 mb-5">
                    <span>{message}<Link className="ml-1" to={url}>{link}</Link></span>
                </div>
                <div className={classes.content}>
                    {title !== "Create Password"? renderForm():
                        <div>
                            <div className={"form-group " + classes.inputDiv}>
                                <label htmlFor="email" className={classes.label}>Email</label>
                                <input className={"form-control " + classes.inputForm} type="email" id="email"/>
                            </div>
                            <button className="btn btn-primary btn-block mt-5">Create Password</button>
                        </div>}
                </div>
            </div>

        </div>)
}
export default Authentication;