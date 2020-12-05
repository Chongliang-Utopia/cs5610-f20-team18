import React from 'react'
import {connect} from "react-redux";
import classes from "../../authentication/Authentication.module.css";
import StateSelector from "../../authentication/StateSelector";
import UserActions from "../../../actions/userActions";
import {Alert} from "reactstrap";

class AccountSettingComponent extends React.Component {

    constructor(props) {
        super(props);

        const {email, username, firstName, lastName, phoneNumber, signature, streetAddress, city, state, zipCode} = this.props.user

        this.state = {
            user: {
                email: email,
                username: username,
                firstName: firstName,
                lastName: lastName,
                phoneNumber: phoneNumber,
                signature: signature,
                streetAddress: streetAddress,
                city: city,
                state: state,
                zipCode: zipCode,
                password: ""
            },
            alertVisible: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(UserActions.findUserById(this.props.user._id))
    }

    handleChange(e) {
        const {name, value} = e.target;
        this.setState(prevState => ({user: {...prevState.user, [name]: value}}));
    }

    handleSubmit(e) {
        e.preventDefault();

        const user = this.state.user
        if (user.password === "") {
            delete user.password;
        }
        this.props.dispatch(UserActions.updateUser(this.props.user._id, user))
            .then(this.setState({alertVisible: true}, () => {
                window.setTimeout(() => {
                    this.setState({alertVisible: false})
                }, 2000)
            }))

    }

    reset = () => this.setState({
        user: this.props.user,
        password: ""
    })

    render() {
        const {email, password, username, firstName, lastName, phoneNumber, signature, streetAddress, city, state, zipCode} = this.state.user


        return (
            <div>
                <Alert className="alert alert-success text-center" role="alert"
                       isOpen={this.state.alertVisible}>
                    Success updating your account!
                </Alert>
                <h2>Edit your account info</h2>
                <form onSubmit={this.handleSubmit}>
                    <br/>
                    <div className="form-group row">
                        <label htmlFor="change-email" className="col-sm-3 col-form-label">
                            Email*
                        </label>
                        <div className="col-sm-9">
                            <input required
                                   className="form-control"
                                   id="change-email"
                                   placeholder="user@user.com"
                                   name="email"
                                   value={email}
                                   onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="change-password" className="col-sm-3 col-form-label">
                            Password
                        </label>
                        <div className="col-sm-9">
                            <input className="form-control"
                                   id="change-password"
                                   type="password"
                                   name="password"
                                   placeholder="Enter New Password"
                                   value={password}
                                   onChange={this.handleChange}/>
                        </div>
                    </div>
                    <br/>
                    <h4>Profile</h4>
                    <div className="form-group row">
                        <label htmlFor="username" className="col-sm-3 col-form-label">User Name*</label>
                        <div className="col-sm-9">
                            <input className="form-control"
                                   type="text"
                                   id="username"
                                   required
                                   value={username}
                                   maxLength="25"
                                   name="username"
                                   onChange={this.handleChange}
                                   title="Please enter a User Name less than 25 characters"/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="firstName" className="col-sm-3 col-form-label">First Name*</label>
                        <div className="col-sm-9">
                            <input className="form-control"
                                   type="text"
                                   id="firstName"
                                   value={firstName}
                                   required
                                   maxLength="25"
                                   name="firstName"
                                   onChange={this.handleChange}
                                   title="Please enter a First Name less than 25 characters"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="lastName" className="col-sm-3 col-form-label">Last Name*</label>
                        <div className="col-sm-9">
                            <input className="form-control"
                                   type="text"
                                   id="lastName"
                                   required
                                   value={lastName}
                                   maxLength="25"
                                   name="lastName"
                                   onChange={this.handleChange}
                                   title="Please enter a Last Name less than 25 characters"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="phoneNumber" className="col-sm-3 col-form-label">Phone Number</label>
                        <div className="col-sm-9">
                            <input className="form-control"
                                   id="phoneNumber"
                                   type="tel"
                                   value={phoneNumber}
                                   name="phoneNumber"
                                   onChange={this.handleChange}
                                   title="Please enter a valid phone number (Format: 123-456-7890)"/>
                            <small className={"mt-1 " + classes.label}>Format: 123-456-7890</small>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="change-signature" className="col-sm-3 col-form-label">
                            Signature
                        </label>
                        <div className="col-sm-9">
                        <textarea className="form-control"
                                  id="change-signature"
                                  placeholder="Tell people more about you!"
                                  name="signature"
                                  onChange={this.handleChange}
                                  value={signature}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="change-portrait" className="col-sm-3 col-form-label">
                            Upload Portrait
                        </label>
                        <div className="col-sm-9">
                            <button className="btn btn-info btn-sm mt-2" id="change-portrait">Upload</button>
                        </div>
                    </div>
                    <br/>
                    <h4>Address</h4>
                    <div className="form-group row">
                        <label htmlFor="streetAddress" className="col-sm-3 col-form-label">Street</label>
                        <div className="col-sm-9">
                            <input className="form-control"
                                   type="text"
                                   id="streetAddress"
                                   maxLength="35"
                                   name="streetAddress"
                                   onChange={this.handleChange}
                                   value={streetAddress}
                                   title="Please enter a valid address"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="city" className="col-sm-3 col-form-label">City*</label>
                        <div className="col-sm-9">
                            <input className="form-control"
                                   type="text"
                                   id="city"
                                   maxLength="25"
                                   name="city"
                                   onChange={this.handleChange}
                                   value={city}
                                   title="Please enter a valid City" pattern="^\S.+"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="state" className="col-sm-3 col-form-label">State*</label>
                        <div className="col-sm-9">
                            <StateSelector name="state" value={state} handleChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="zipCode" className="col-sm-3 col-form-label">Zip Code*</label>
                        <div className="col-sm-9">
                            <input className="form-control"
                                   id="zipCode"
                                   type="text"
                                   name="zipCode"
                                   onChange={this.handleChange}
                                   value={zipCode}
                                   title="Please enter a valid post code (e.g., 12345-6789)"/>
                            <small className={"mt-1 " + classes.label}>Format: 12345-6789</small>
                        </div>
                    </div>
                    <div className="float-right">
                        <button className="btn btn-danger m-2" type="button" onClick={this.reset}>Cancel</button>
                        <button className="btn btn-success m-2" type="submit">Save</button>
                    </div>
                </form>
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({
    user: state.auth.user,
})

export default connect(stateToPropertyMapper)(AccountSettingComponent)
