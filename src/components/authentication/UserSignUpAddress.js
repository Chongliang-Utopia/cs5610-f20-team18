import React, {Component} from "react";
import classes from "./Authentication.module.css";
import StateSelector from "./StateSelector";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {registerStepTwo} from "../../actions/authWithEmailActions";

class UserSignUpAddress extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            streetAddress: "",
            city: "",
            state: "",
            zipCode: ""
        }
    }

    handleChange(e) {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    handleSubmit(e) {
        e.preventDefault();

        console.log("submit")

        // this.form.validateAll();

        // if (this.checkBtn.context._errors.length === 0) {
        this.props.registerStepTwo(this.props.user.id, {
            streetAddress: this.state.streetAddress, city: this.state.city,
            state: this.state.state, zipCode: this.state.zipCode
        });
        // }
    }

    render() {
        const {streetAddress, city, state, zipCode} = this.state

        return (
            <div className={classes.Authentication}>
                <div className={classes.titleDiv}>
                    <h1>Please Fill In</h1>
                    <div className={classes.content}>
                        <form onSubmit={this.handleSubmit}>
                            <h2>Address</h2>
                            <div className={"form-group " + classes.inputDiv}>
                                <label htmlFor="streetAddress" className={classes.label}>Street</label>
                                <input className={"form-control " + classes.inputForm} type="text" id="streetAddress"
                                       maxLength="35" name="streetAddress" onChange={this.handleChange}
                                       value={streetAddress}
                                       pattern="^\S.+" title="Please enter a valid address"/>
                            </div>
                            <div className={"form-group " + classes.inputDiv}>
                                <label htmlFor="city" className={classes.label}>City*</label>
                                <input required className={"form-control " + classes.inputForm} type="text" id="city"
                                       maxLength="25" name="city" onChange={this.handleChange} value={city}
                                       title="Please enter a valid City" pattern="^\S.+"/>
                            </div>
                            <div className={"form-group " + classes.inputDiv}>
                                <label htmlFor="state" className={classes.label}>State*</label>
                                <StateSelector name="state" value={state} handleChange={this.handleChange}/>
                            </div>
                            <div className={"form-group " + classes.inputDiv}>
                                <label htmlFor="zip" className={classes.label}>Zip Code*</label>
                                <input required className={"form-control " + classes.inputForm} id="zipCode" type="text"
                                       pattern="[0-9]{5}" name="zipCode" onChange={this.handleChange} value={zipCode}
                                       maxLength="5" title="Please enter a valid post code (e.g., 12345)"/>
                                <small className={"mt-1 " + classes.label}>Format: 12345</small>
                            </div>
                            <button type="submit"
                                    className="btn btn-success btn-block mt-5">Finish Sign Up
                            </button>
                            <Link to="/usersignupprofile" className="btn btn-primary btn-block mt-3">Previous Step
                            </Link>
                        </form>
                    </div>
                </div>
            </div>)
    }
}

const mapState = (state) => ({
    message: state.message.message,
    user: state.authWithEmail.user
});

export default connect(mapState, {registerStepTwo})(UserSignUpAddress);