import React from "react";
import classes from "./Authentication.module.css";
import {Link} from "react-router-dom";
import {GrClose} from "react-icons/gr";
import LoginWithGoogle from "./LoginWithGoogle";
import SignUpWithEmail from "./SignUpWithEmail";

const SignUp = () =>
    <div className={classes.Authentication}>
        <Link to="/" className={classes.closeButton}><GrClose size="20px"/></Link>
        <div className={classes.titleDiv}>
            <h1>Sign Up</h1>
            <div className="mt-3 mb-5">
                <span>Already a member? <Link className="ml-1" to="/login">Log In</Link></span>
            </div>
            <div className={classes.content}>
                <div>
                    <SignUpWithEmail />
                    <div className={classes.line}>
                        <span className="bg-white p-2">or Sign Up with</span>
                    </div>
                    <LoginWithGoogle type="signup"/>
                </div>
            </div>
        </div>
    </div>

export default SignUp;