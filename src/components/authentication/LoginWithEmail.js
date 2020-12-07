import React, {Component} from "react";
import classes from "./Authentication.module.css";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import {isEmail} from "validator";
import {login} from "../../actions/authActions";
import history from "../../history";
import { clearMessage } from "../../actions/message";

const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
}

const vemail = (value) => {
    if (!isEmail(value)) {
        return (
            <div className="alert alert-danger" role="alert">
                This is not a valid email.
            </div>
        );
    }
};

class LoginWithEmail extends Component {

    componentDidMount() {
        history.listen((location) => {
            this.props.dispatch(clearMessage()); // clear message when changing location
        });
    }

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            loginAsAdmin: false,
            loading: false,
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange(e) {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({loading: true});
        this.form.validateAll();

        const {dispatch} = this.props;

        if (this.checkBtn.context._errors.length === 0) {
            dispatch(login(this.state.email, this.state.password))
                .then(() => {
                    if (this.state.loginAsAdmin) {
                        history.push("/admin");
                    } else {
                        history.push(this.props.preLocation);
                        //window.location.reload();
                    }
                })
                .catch(() => {
                    this.setState({
                        loading: false
                    });
                });
        } else {
            this.setState({
                loading: false,
            });
        }
    }

    render() {
        const {message} = this.props;
        const {email, password, loading} = this.state;

        return (
            <Form onSubmit={this.handleSubmit} ref={(c) => {
                this.form = c;
            }}>
                <div className={"form-group " + classes.inputDiv}>
                    <label htmlFor="email" className={classes.label}>Email*</label>
                    <Input className={"form-control " + classes.inputForm} type="text" id="email" name="email"
                           value={email} validations={[required, vemail]}
                           onChange={this.handleChange}/>
                </div>
                <div className={"form-group " + classes.inputDiv}>
                    <label htmlFor="password" className={classes.label}>Password*</label>
                    <Input className={"form-control " + classes.inputForm} type="password" id="password" name="password"
                           value={password} validations={[required]}
                           onChange={this.handleChange}/>
                </div>
                {/*<div className="input-group">*/}
                {/*    <input className="mt-1 mr-2" type="checkbox" id="admin" name="loginAsAdmin" value={true}*/}
                {/*           onChange={(e) => this.handleChange(e)}/>*/}
                {/*    <label htmlFor="admin" className={classes.label}>Login as Admin</label>*/}
                {/*</div>*/}
                {/*<div className={classes.forgotPassword}>*/}
                {/*    <Link to="/createpassword">Forgot password?</Link>*/}
                {/*</div>*/}
                <button disabled={loading}
                        className="btn btn-primary btn-block mt-5">
                    {loading && (<span className="spinner-border spinner-border-sm"></span>)}
                    Log In
                </button>
                {message && (
                    <div className="form-group">
                        <div className="alert alert-danger mt-3" role="alert">
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

const stateToPropertyMapper = (state) => ({
    isLoggedIn: state.auth.isLoggedIn,
    message: state.message.message,
    preLocation: state.auth.preLocation
})

export default connect(stateToPropertyMapper)(LoginWithEmail);

