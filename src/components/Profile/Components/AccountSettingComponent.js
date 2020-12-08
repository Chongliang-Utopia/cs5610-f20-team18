import React from 'react'
import {connect} from "react-redux";
import UserActions from "../../../actions/userActions";
import {Alert} from "reactstrap";
import {Field, reduxForm} from "redux-form";
import USStates from "../../../assets/data/states.json"

class AccountSettingComponent extends React.Component {

    state = {
        alertVisible: false
    }

    renderError({error, touched}) {
        if (touched && error) {
            return (
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>)
        }
    }

    renderInput = ({input, label, type, placeholder, id, maxLength, meta}) => {
        return (
            <div className="form-group row">
                <label className="col-sm-3 col-form-label" htmlFor={id}>
                    {label}
                </label>
                <div className="col-sm-9">
                    <input {...input} className="form-control" type={type} placeholder={placeholder} id={id} maxLength={maxLength}/>
                    {this.renderError(meta)}
                </div>
            </div>
        )
    }

    renderTextarea = ({input, label, placeholder, id, maxLength, meta}) => {
        return (
            <div className="form-group row">
                <label className="col-sm-3 col-form-label" htmlFor={id}>
                    {label}
                </label>
                <div className="col-sm-9">
                    <textarea {...input} className="form-control" placeholder={placeholder} id={id} maxLength={maxLength}/>
                    {this.renderError(meta)}
                </div>
            </div>
        )
    }

    renderSelect = ({input, label, type, placeholder, id, meta}) => {
        return (
            <div className="form-group row">
                <label className="col-sm-3 col-form-label" htmlFor={id}>
                    {label}
                </label>
                <div className="col-sm-9">
                    <select {...input} className="form-control" placeholder={placeholder} id={id}>
                        <option value="" disabled>Select a state</option>
                        {USStates.map(state =>
                        <option key={state.abbreviation} value={state.abbreviation}>{state.name}</option>)}
                    </select>
                    {this.renderError(meta)}
                </div>
            </div>
        )
    }


    onSubmit = (formValues) => {
        const user = {email: formValues.email, username: formValues.username, firstName: formValues.firstName,
            lastName: formValues.lastName, phoneNumber: formValues.phoneNumber, signature: formValues.signature,
            streetAddress: formValues.streetAddress, city: formValues.city, state: formValues.state,
            zipCode: formValues.zipCode}
        if (formValues.password) {
            user.password = formValues.password;
        }
        this.props.dispatch(UserActions.updateUser(this.props.initialValues._id, user))
            .then(this.setState({alertVisible: true}, () => {
                window.setTimeout(() => {
                    this.setState({alertVisible: false})
                }, 2000)
            }))
    }

    render() {
        const {handleSubmit, pristine, reset, submitting} = this.props

        return (
            <div>
                <Alert className="alert alert-success text-center" role="alert"
                       isOpen={this.state.alertVisible}>
                    Success updating your account!
                </Alert>
                <h2>Edit my account info</h2>
                <form onSubmit={handleSubmit(this.onSubmit)}>
                    <br/>
                    <Field name="email" component={this.renderInput} label="Email*" type="email"
                           placeholder="user@user.com" id="email"/>
                    <Field name="password" component={this.renderInput} label="Password" type="password"
                           placeholder="Enter New Password" id="password" maxLength="40"/>
                    <br/>
                    <h4>Profile</h4>
                    <Field name="username" component={this.renderInput} label="User Name*" type="text"
                           placeholder="Username" id="username" maxLength="25"/>
                    <Field name="firstName" component={this.renderInput} label="First Name*" type="text"
                           placeholder="First Name" id="firstName" maxLength="25"/>
                    <Field name="lastName" component={this.renderInput} label="Last Name*" type="text"
                           placeholder="Last Name" id="lastName" maxLength="25"/>
                    <Field name="phoneNumber" component={this.renderInput} label="Phone Number" type="tel"
                           placeholder="123-456-7890" id="phoneNumber"/>
                    <Field name="signature" component={this.renderTextarea} label="Signature"
                           placeholder="Tell people more about you!" id="signature" maxLength="200"/>
                    {/*<div className="form-group row">*/}
                    {/*    <label htmlFor="change-portrait" className="col-sm-3 col-form-label">*/}
                    {/*        Upload Portrait*/}
                    {/*    </label>*/}
                    {/*    <div className="col-sm-9">*/}
                    {/*        <button className="btn btn-info btn-sm mt-2" id="change-portrait">Upload</button>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <br/>
                    <h4>Address</h4>
                    <Field name="streetAddress" component={this.renderInput} label="Street" type="text"
                           placeholder="Street Address" id="streetAddress" maxLength="50"/>
                    <Field name="city" component={this.renderInput} label="City*" type="text"
                           placeholder="City" id="city" maxLength="25"/>
                    <Field name="state" component={this.renderSelect} label="State*" id="state"/>
                    <Field name="zipCode" component={this.renderInput} label="Zip Code*" type="text"
                           placeholder="Zip Code" id="zipCode"/>
                    <div className="float-right">
                        <button className="btn btn-danger m-2" type="button" disabled={pristine || submitting}
                                onClick={reset}>Reset
                        </button>
                        <button className="btn btn-success m-2" type="submit" disabled={pristine || submitting}>Save
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

const validate = (formValues) => {
    const errors = {};
    const {email, password, username, firstName, lastName, phoneNumber, city, state, zipCode} = formValues;
    if (!email) {
        errors.email = "This field is required!"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
        errors.email = "Invalid email address!"
    }

    if (password && (password.length < 6 || password.length > 40)) {
        errors.password = "The password must be between 6 and 40 characters."
    }

    if (!username) {
        errors.username = "This field is required!"
    }
    if (!firstName) {
        errors.firstName = "This field is required!"
    }
    if (!lastName) {
        errors.lastName = "This field is required!"
    }
    if (!city) {
        errors.city = "This field is required!"
    }
    if (!state) {
        errors.state = "This field is required!"
    }
    if (!zipCode) {
        errors.zipCode = "This field is required!"
    } else if (!/(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zipCode)) {
        errors.zipCode = "Please enter a valid zip code! (Format: 12345-6789)"
    }

    if (phoneNumber && (!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(phoneNumber))) {
        errors.phoneNumber = "Please enter a valid phone number! (Format: 123-456-7890)"
    }

    return errors;
}

const stateToPropertyMapper = (state) => ({
    initialValues: state.profile.user,
})

export default connect(stateToPropertyMapper)(reduxForm({
    form: 'adminAccountSettingComponent',
    validate,
    enableReinitialize: true,
})(AccountSettingComponent))
