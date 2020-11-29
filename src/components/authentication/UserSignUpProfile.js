import React, {Component} from "react";
import classes from "./Authentication.module.css";
import {connect} from "react-redux";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import {registerStepOne} from "../../actions/authWithEmailActions";

const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
}

const vphone = (value) => {
    const pattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (!pattern.test(value)) {
        return (
            <div className="alert alert-danger" role="alert">
                Please enter a valid phone number (Format: 123-456-7890)
            </div>
        );
    }
};

class UserSignUpProfile extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            username: "",
            firstName: "",
            lastName: "",
            phoneNumber: ""
        }
    }

    handleChange(e) {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    handleSubmit(e) {
        e.preventDefault();

        console.log("submit")

        this.form.validateAll();

        if (this.checkBtn.context._errors.length === 0) {
            this.props.registerStepOne(this.props.user.id, {
                username: this.state.username, firstName: this.state.firstName,
                lastName: this.state.lastName, phoneNumber: this.state.phoneNumber
            });
        }
    }


    render() {
        return (<div className={classes.Authentication}>
            <div className={classes.titleDiv}>
                <h1>Please Fill In</h1>
                <div className={classes.content}>
                    <Form onSubmit={this.handleSubmit} ref={(c) => {
                        this.form = c;
                    }}>
                        <h2>Profile</h2>
                        <div className={"form-group " + classes.inputDiv}>
                            <label htmlFor="username" className={classes.label}>User Name*</label>
                            <Input className={"form-control " + classes.inputForm} type="text" id="username"
                                   maxLength="25" name="username" onChange={this.handleChange} validations={[required]}
                                    title="Please enter a User Name less than 25 characters"/>
                        </div>
                        <div className={"form-group " + classes.inputDiv}>
                            <label htmlFor="firstName" className={classes.label}>First Name*</label>
                            <Input className={"form-control " + classes.inputForm} type="text" id="firstName"
                                   maxLength="25" name="firstName" onChange={this.handleChange} validations={[required]}
                                    title="Please enter a First Name less than 25 characters"/>
                        </div>
                        <div className={"form-group " + classes.inputDiv}>
                            <label htmlFor="lastName" className={classes.label}>Last Name*</label>
                            <Input className={"form-control " + classes.inputForm} type="text" id="lastName"
                                   maxLength="25" name="lastName" onChange={this.handleChange} validations={[required]}
                                    title="Please enter a Last Name less than 25 characters"/>
                        </div>
                        <div className={"form-group " + classes.inputDiv}>
                            <label htmlFor="phoneNumber" className={classes.label}>Phone Number*</label>

                            <Input className={"form-control " + classes.inputForm} id="phoneNumber" type="tel"
                                   name="phoneNumber" onChange={this.handleChange} validations={[required, vphone]}
                                   title="Please enter a valid phone number (Format: 123-456-7890)"/>
                            <small className={"mt-1 " + classes.label}>Format: 123-456-7890</small>
                        </div>
                        <button type="submit"
                                className="btn btn-primary btn-block mt-5">Next Step
                        </button>
                        <CheckButton
                            style={{display: "none"}}
                            ref={(c) => {
                                this.checkBtn = c;
                            }}
                        />
                    </Form>
                </div>
            </div>
        </div>)
    }
}

const mapState = (state) => ({
    user: state.authWithEmail.user
});

export default connect(mapState, {registerStepOne})(UserSignUpProfile);