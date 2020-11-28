import React, {Component} from "react";
import classes from "./Authentication.module.css";
import {connect} from "react-redux";
import {registerStepOne} from "../../actions/authWithEmailActions";

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

        // this.form.validateAll();

        // if (this.checkBtn.context._errors.length === 0) {
        this.props.registerStepOne(this.props.user.id, {
            username: this.state.username, firstName: this.state.firstName,
            lastName: this.state.lastName, phoneNumber: this.state.phoneNumber
        });
        // }
    }


    render() {
        return (<div className={classes.Authentication}>
            <div className={classes.titleDiv}>
                <h1>Please Fill In</h1>
                <div className={classes.content}>
                    <form onSubmit={this.handleSubmit}>
                        <h2>Profile</h2>
                        <div className={"form-group " + classes.inputDiv}>
                            <label htmlFor="username" className={classes.label}>User Name*</label>
                            <input required className={"form-control " + classes.inputForm} type="text" id="username"
                                   maxLength="25" name="username" onChange={this.handleChange}
                                   pattern="^\S.{1,23}\S$" title="Please enter a User Name between 3-25 characters"/>
                        </div>
                        <div className={"form-group " + classes.inputDiv}>
                            <label htmlFor="firstName" className={classes.label}>First Name*</label>
                            <input required className={"form-control " + classes.inputForm} type="text" id="firstName"
                                   maxLength="25" name="firstName" onChange={this.handleChange}
                                   pattern="^\S.{1,23}\S$" title="Please enter a First Name between 3-25 characters"/>
                        </div>
                        <div className={"form-group " + classes.inputDiv}>
                            <label htmlFor="lastName" className={classes.label}>Last Name*</label>
                            <input required className={"form-control " + classes.inputForm} type="text" id="lastName"
                                   maxLength="25" name="lastName" onChange={this.handleChange}
                                   pattern="^\S.{1,23}\S$" title="Please enter a Last Name between 3-25 characters"/>
                        </div>
                        <div className={"form-group " + classes.inputDiv}>
                            <label htmlFor="phoneNumber" className={classes.label}>Phone Number</label>

                            <input className={"form-control " + classes.inputForm} id="phoneNumber" type="tel"
                                   pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                   name="phoneNumber" onChange={this.handleChange}
                                   title="Please enter a valid phone number (Format: 123-456-7890)"/>
                            <small className={"mt-1 " + classes.label}>Format: 123-456-7890</small>
                        </div>
                        <button type="submit"
                                className="btn btn-primary btn-block mt-5">Next Step
                        </button>
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

export default connect(mapState, {registerStepOne})(UserSignUpProfile);