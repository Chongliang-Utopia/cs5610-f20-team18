import React from 'react'
import {connect} from "react-redux";
import UserActions from "../../../actions/userActions";
import {Alert} from "reactstrap";
import {Field, reduxForm} from "redux-form";
import USStates from "../../../assets/data/states.json"

class AccountSettingComponent extends React.Component {

    // const {email, username, firstName, lastName, phoneNumber, signature, streetAddress, city, state, zipCode} = this.props.user

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

    renderInput = ({input, label, type, placeholder, id, meta}) => {
        return (
            <div className="form-group row">
                <label className="col-sm-3 col-form-label" htmlFor={id}>
                    {label}
                </label>
                <div className="col-sm-9">
                    <input {...input} className="form-control" type={type} placeholder={placeholder} id={id}/>
                    {this.renderError(meta)}
                </div>
            </div>
        )
    }

    renderTextarea = ({input, label, type, placeholder, id, meta}) => {
        return (
            <div className="form-group row">
                <label className="col-sm-3 col-form-label" htmlFor={id}>
                    {label}
                </label>
                <div className="col-sm-9">
                    <textarea {...input} className="form-control" placeholder={placeholder} id={id}/>
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
                <h2>Edit your account info</h2>
                <form onSubmit={handleSubmit(this.onSubmit)}>
                    <br/>
                    <Field name="email" component={this.renderInput} label="Email*" type="email"
                           placeholder="user@user.com" id="email"/>
                    <Field name="password" component={this.renderInput} label="Password" type="password"
                           placeholder="Enter New Password" id="password"/>
                    <br/>
                    <h4>Profile</h4>
                    <Field name="username" component={this.renderInput} label="User Name*" type="text"
                           placeholder="Username" id="username"/>
                    <Field name="firstName" component={this.renderInput} label="First Name*" type="text"
                           placeholder="First Name" id="firstName"/>
                    <Field name="lastName" component={this.renderInput} label="Last Name*" type="text"
                           placeholder="Last Name" id="lastName"/>
                    <Field name="phoneNumber" component={this.renderInput} label="Phone Number" type="tel"
                           placeholder="123-456-7890" id="phoneNumber"/>
                    <Field name="signature" component={this.renderTextarea} label="Signature"
                           placeholder="Tell people more about you!" id="signature"/>
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
                    <Field name="streetAddress" component={this.renderInput} label="Street" type="text"
                           placeholder="Street Address" id="streetAddress"/>
                    <Field name="city" component={this.renderInput} label="City*" type="text"
                           placeholder="City" id="city"/>
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

const stateToPropertyMapper = (state) => ({
    initialValues: state.profile.user,
})

export default connect(stateToPropertyMapper)(reduxForm({
    form: 'adminAccountSettingComponent',
    enableReinitialize: true,
})(AccountSettingComponent))
