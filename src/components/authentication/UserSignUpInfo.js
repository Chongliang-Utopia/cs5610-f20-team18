import React, {useState} from "react";
import classes from "./Authentication.module.css";
import {Link} from "react-router-dom";
import {GrClose} from "react-icons/gr";
import UserSignUpProfile from "./UserSignUpProfile";
import UserSignUpAddress from "./UserSignUpAddress";

const UserSignUpInfo = () => {

    const [step, setStep] = useState(1);

    return (
    <div className={classes.Authentication}>
        <div className={classes.titleDiv}>
            <h1>Please Fill In</h1>
            <div className={classes.content}>
                {step === 1 ?
                    <form>
                        <UserSignUpProfile/>
                        <button onClick={() => setStep(2)} type="submit"
                            className="btn btn-primary btn-block mt-5">Next Step</button>
                    </form> :
                    <form>
                        <UserSignUpAddress/>
                        <button type="submit"
                                className="btn btn-success btn-block mt-5">Finish Sign Up</button>
                        <button
                            onClick={() => setStep(1)}
                            className="btn btn-primary btn-block mt-3">Previous Step</button>
                    </form>
                }
            </div>
        </div>
    </div>)
}

export default UserSignUpInfo;