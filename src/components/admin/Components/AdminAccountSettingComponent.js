import React from "react";
import {connect} from "react-redux";
import UserActions from "../../../actions/userActions";
import {Alert} from "reactstrap";
import {Field, reduxForm} from "redux-form";

class AdminAccountSettingComponent extends React.Component {

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

    onSubmit = (formValues) => {
        let user = {};
        user.email = formValues.email;
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
                <h2>Edit admin credential</h2>
                <Alert className="alert alert-success text-center" role="alert"
                       isOpen={this.state.alertVisible}>
                    Success updating your account!
                </Alert>
                <form onSubmit={handleSubmit(this.onSubmit)}>
                    <br/>
                    <Field name="email" component={this.renderInput} label="Email*" type="email"
                           placeholder="user@user.com" id="email"/>
                    <Field name="password" component={this.renderInput} label="Password" type="password"
                           placeholder="Enter New Password" id="password"/>
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
    const {email, password} = formValues;
    if (!email) {
        errors.email = "This field is required!"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
        errors.email = "Invalid email address!"
    }

    if (password && (password.length < 6 || password.length > 40)) {
        errors.password = "The password must be between 6 and 40 characters."
    }
    return errors;
}

const stateToPropertyMapper = (state) => ({
    initialValues: state.auth.user
})

export default connect(stateToPropertyMapper)(reduxForm({
    form: 'adminAccountSettingComponent',
    validate,
    enableReinitialize: true,
})(AdminAccountSettingComponent));



