import React, {useState} from "react";
import {GrClose} from "react-icons/gr";
import {Link} from "react-router-dom";
import classes from "./Authentication.module.css";
import ForgetPassword from "./ForgetPassword";
import LoginWithEmail from "./LoginWithEmail";
import LoginWithGoogle from "./LoginWithGoogle";

const Authentication = ({title, link, message, url}) => {

    const [showEmail, setShowEmail] = useState(false);

    return (
        <div className={classes.Authentication}>
            <Link to="/" className={classes.closeButton}><GrClose size="20px"/></Link>
            <div className={classes.titleDiv}>
                <h1>{title}</h1>
                <div className="mt-3 mb-5">
                    <span>{message}<Link className="ml-1" to={url}>{link}</Link></span>
                </div>
                <div className={classes.content}>
                    {title !== "Create Password" ?
                        !showEmail ? <LoginWithGoogle title={title} setShowEmail={setShowEmail}/> :
                            <LoginWithEmail title={title}/>
                        : <ForgetPassword/>}
                </div>
            </div>
        </div>)
}
export default Authentication;