import React, {Component} from "react";
import classes from "./Authentication.module.css";
import StateSelector from "./StateSelector";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import UserActions from "../../actions/userActions";
import history from "../../history";

const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
}

const vzipCode = (value) => {
    const pattern = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
    if (!pattern.test(value)) {
        return (
            <div className="alert alert-danger" role="alert">
                Please enter a valid zip code (Format: 12345-6789)
            </div>
        );
    }
};


class SignUpAddress extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const {name, value} = e.target;
        this.props.dispatch(UserActions.updateLocalUser({[name]: value}));
    }

    handleSubmit(e) {
        e.preventDefault();

        this.form.validateAll();

        if (this.checkBtn.context._errors.length === 0) {
            this.props.dispatch(UserActions.updateUser(this.props.user._id, this.props.user))
                .then(history.push(this.props.preLocation))
        }
    }

    render() {
        const {streetAddress, city, state, zipCode} = this.props.user

        return (
            <div className={classes.Authentication}>
                <div className={classes.titleDiv}>
                    <h1>Please Fill In</h1>
                    <div className={classes.content}>
                        <Form onSubmit={this.handleSubmit} ref={(c) => {
                            this.form = c;
                        }}>
                            <h2>Address</h2>
                            <div className={"form-group " + classes.inputDiv}>
                                <label htmlFor="streetAddress" className={classes.label}>Street</label>
                                <Input className={"form-control " + classes.inputForm} type="text" id="streetAddress"
                                       maxLength="35" name="streetAddress" onChange={this.handleChange}
                                       value={streetAddress}
                                       title="Please enter a valid address"/>
                            </div>
                            <div className={"form-group " + classes.inputDiv}>
                                <label htmlFor="city" className={classes.label}>City*</label>
                                <Input className={"form-control " + classes.inputForm} type="text" id="city"
                                       maxLength="25" name="city" onChange={this.handleChange} value={city}
                                       validations={[required]}
                                       title="Please enter a valid City" pattern="^\S.+"/>
                            </div>
                            <div className={"form-group " + classes.inputDiv}>
                                <label htmlFor="state" className={classes.label}>State*</label>
                                <StateSelector name="state" value={state} handleChange={this.handleChange}/>
                            </div>
                            <div className={"form-group " + classes.inputDiv}>
                                <label htmlFor="zip" className={classes.label}>Zip Code*</label>
                                <Input className={"form-control " + classes.inputForm} id="zipCode" type="text"
                                       name="zipCode" onChange={this.handleChange} value={zipCode}
                                       validations={[required, vzipCode]}
                                       title="Please enter a valid post code (e.g., 12345-6789)"/>
                                <small className={"mt-1 " + classes.label}>Format: 12345-6789</small>
                            </div>
                            <button type="submit"
                                    className="btn btn-success btn-block mt-5">Finish Sign Up
                            </button>
                            <CheckButton
                                style={{display: "none"}}
                                ref={(c) => {
                                    this.checkBtn = c;
                                }}
                            />
                        </Form>
                        <Link to="/signupprofile" className="btn btn-primary btn-block mt-3">Previous Step</Link>
                    </div>
                </div>
            </div>)
    }
}

const mapState = (state) => ({
    user: state.auth.user,
    preLocation: state.auth.preLocation
});

export default connect(mapState)(SignUpAddress);