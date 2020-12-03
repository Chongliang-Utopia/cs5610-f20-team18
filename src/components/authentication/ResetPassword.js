import React, {Component} from "react";
import classes from "./Authentication.module.css";
import {connect} from "react-redux";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import {updateUser} from "../../actions/userActions";
import history from "../../history";

const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
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


class ResetPassword extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
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
                    updateUser(this.props.userId, {password: this.state.password})
                )
                .then(() => {
                    this.setState({
                        successful: true,
                    });
                    history.push("/signupprofile")
                })
                .catch(() => {
                    this.setState({
                        successful: false,
                    });
                });
        }
    }

    render() {
        const {message, gmail} = this.props;
        const {password, verifyPassword, successful} = this.state;

        return (
            <div className={classes.Authentication}>
                <div className={classes.titleDiv}>
                    <h1>Please set up a password for your account</h1>
                    <div className="mt-3 mb-5">
                        {/*<span>Back to <Link className="ml-1" to="/">Home</Link></span>*/}
                    </div>
                    <div className={classes.content}>
                        <div>
                            <Form onSubmit={this.handleSubmit}
                                  ref={(c) => {
                                      this.form = c;
                                  }}>
                                <div className={"form-group " + classes.inputDiv}>
                                    <label htmlFor="email" className={classes.label}>Email</label>

                                    <Input className={"form-control " + classes.inputForm} type="text" id="email"
                                           name="email"
                                           value={gmail} readOnly/>

                                </div>
                                <div className={"form-group " + classes.inputDiv}>
                                    <label htmlFor="password" className={classes.label}>New Password</label>
                                    <Input className={"form-control " + classes.inputForm} type="password" id="password"
                                           name="password"
                                           value={password} validations={[required, vpassword]}
                                           onChange={this.handleChange}/>
                                </div>
                                <div className={"form-group " + classes.inputDiv}>
                                    <label htmlFor="verifyPassword" className={classes.label}>Verify New Password</label>
                                    <Input className={"form-control " + classes.inputForm} type="password"
                                           id="verifyPassword"
                                           name="verifyPassword"
                                           value={verifyPassword} validations={[required, cpassword]}
                                           onChange={this.handleChange}/>
                                </div>
                                <button className="btn btn-primary btn-block mt-5">
                                    Submit
                                </button>
                                {message && (
                                    <div className="form-group">
                                        <div
                                            className={successful ? "alert alert-success mt-3" : "alert alert-danger mt-3"}
                                            role="alert">
                                            {message}
                                        </div>
                                    </div>
                                )}
                                <CheckButton
                                    style={{display: "none"}}
                                    ref={(c) => {
                                        this.checkBtn = c;
                                    }}
                                />
                            </Form>
                        </div>
                    </div>
                </div>
            </div>)
    }
}

const mapState = (state) => ({
    message: state.message.message,
    gmail: state.auth.user.email,
    userId: state.auth.user._id
});

export default connect(mapState)(ResetPassword);