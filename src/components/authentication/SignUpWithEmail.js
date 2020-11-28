import React, {Component} from "react";
import classes from "./Authentication.module.css";
import {connect} from "react-redux";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import {isEmail} from "validator";
import {register} from "../../actions/authWithEmailActions";

const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

const vemail = (value) => {
    if (!isEmail(value)) {
        return (
            <div className="alert alert-danger" role="alert">
                This is not a valid email.
            </div>
        );
    }
};

const vpassword = (value, props, components) => {
    if (value.length < 6 || value.length > 40) {
        return (
            <div className="alert alert-danger" role="alert">
                The password must be between 6 and 40 characters.
            </div>
        );
    }
};

const cpassword = (value, props, components) => {
    if (value !== components['password'][0].value) {
        return (
            <div className="alert alert-danger" role="alert">
                Passwords are not equal.
            </div>
        );
    }
};



class SignUpWithEmail extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            email: "",
            password: "",
            verifyPassword: "",
            successful: false,
        };
    }

    handleChange(e) {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({
            successful: false,
        });

        this.form.validateAll();

        if (this.checkBtn.context._errors.length === 0) {
            this.props
                .dispatch(
                    register(this.state.email, this.state.password)
                )
                .then(() => {
                    this.setState({
                        successful: true,
                    });
                })
                .catch(() => {
                    this.setState({
                        successful: false,
                    });
                });
        }
    }

    render() {
        const {message} = this.props;
        const {email, password, verifyPassword, successful} = this.state;

        return (
            <Form onSubmit={this.handleSubmit}
                  ref={(c) => {
                      this.form = c;
                  }}>
                <div className={"form-group " + classes.inputDiv}>
                    <label htmlFor="email" className={classes.label}>Email</label>
                    <Input className={"form-control " + classes.inputForm} type="text" id="email" name="email"
                           value={email} validations={[required, vemail]}
                           onChange={this.handleChange}/>
                </div>
                <div className={"form-group " + classes.inputDiv}>
                    <label htmlFor="password" className={classes.label}>Password</label>
                    <Input className={"form-control " + classes.inputForm} type="password" id="password" name="password"
                           value={password} validations={[required, vpassword]}
                           onChange={this.handleChange}/>
                </div>
                <div className={"form-group " + classes.inputDiv}>
                    <label htmlFor="verifyPassword" className={classes.label}>Verify Password</label>
                    <Input className={"form-control " + classes.inputForm} type="password" id="verifyPassword" name="verifyPassword"
                           value={verifyPassword} validations={[required, cpassword]}
                           onChange={this.handleChange}/>
                </div>
                <button className="btn btn-primary btn-block mt-5">
                    Sign Up
                </button>
                {message && (
                    <div className="form-group">
                        <div className={ successful ? "alert alert-success mt-3" : "alert alert-danger mt-3" } role="alert">
                            {message}
                        </div>
                    </div>
                )}
                <CheckButton
                    style={{ display: "none" }}
                    ref={(c) => {
                        this.checkBtn = c;
                    }}
                />
            </Form>)
    }
}

const mapState = (state) => ({
    message: state.message.message
});

export default connect(mapState)(SignUpWithEmail);