import React, {Component} from "react";
import classes from "./Authentication.module.css";
import StateSelector from "./StateSelector";
import {connect} from "react-redux";

class UserSignUpAddress extends Component {

    render() {
        return (
            <div className={classes.Authentication}>
                <div className={classes.titleDiv}>
                    <h1>Please Fill In</h1>
                    <div className={classes.content}>
                        <form>
                            <h2>Address</h2>
                            <div className={"form-group " + classes.inputDiv}>
                                <label htmlFor="street" className={classes.label}>Street</label>
                                <input className={"form-control " + classes.inputForm} type="text" id="street"
                                       maxLength="35"
                                       pattern="^\S.+" title="Please enter a valid address"/>
                            </div>
                            <div className={"form-group " + classes.inputDiv}>
                                <label htmlFor="city" className={classes.label}>City*</label>
                                <input required className={"form-control " + classes.inputForm} type="text" id="city"
                                       maxLength="25"
                                       title="Please enter a valid City" pattern="^\S.+"/>
                            </div>
                            <div className={"form-group " + classes.inputDiv}>
                                <label htmlFor="state" className={classes.label}>State*</label>
                                <StateSelector/>
                            </div>
                            <div className={"form-group " + classes.inputDiv}>
                                <label htmlFor="zip" className={classes.label}>Zip Code*</label>
                                <input required className={"form-control " + classes.inputForm} id="zip" type="text"
                                       pattern="[0-9]{5}"
                                       maxLength="5" title="Please enter a valid post code (e.g., 12345)"/>
                                <small className={"mt-1 " + classes.label}>Format: 12345</small>
                            </div>
                            <button type="submit"
                                    className="btn btn-success btn-block mt-5">Finish Sign Up
                            </button>
                            <button

                                className="btn btn-primary btn-block mt-3">Previous Step
                            </button>
                        </form>
                    </div>
                </div>
            </div>)
    }
}



export default UserSignUpAddress;