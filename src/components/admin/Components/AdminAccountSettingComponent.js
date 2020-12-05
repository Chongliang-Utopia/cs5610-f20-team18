import React from "react";
import {connect} from "react-redux";
import UserActions from "../../../actions/userActions";
import {Alert} from "reactstrap";
import {Field, reduxForm} from "redux-form";


class AdminAccountSettingComponent extends React.Component {

    state = {
        alertVisible: false
    }

    renderInput = ({input, label, type, placeholder, id}) => {
        return (
            <div className="form-group row">
                <label className="col-sm-3 col-form-label" htmlFor={id}>
                    {label}
                </label>
                <div className="col-sm-9">
                    <input {...input} className="form-control" type={type} placeholder={placeholder} id={id}/>
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
        console.log(user)
        this.props.dispatch(UserActions.updateUser(formValues._id, user))
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
                <form onSubmit={handleSubmit(this.onSubmit)} >
                    <br/>
                    <Field name="email" component={this.renderInput} label="Email*" type="email"
                           placeholder="user@user.com" id="email"/>
                    <Field name="password" component={this.renderInput} label="Password" type="password"
                           placeholder="Enter New Password" id="password"/>
                    <div className="float-right">
                        <button className="btn btn-danger m-2" type="button" disabled={pristine || submitting} onClick={reset}>Reset</button>
                        <button className="btn btn-success m-2" type="submit" disabled = {pristine || submitting}>Save</button>
                    </div>
                </form>
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({
    initialValues: state.auth.user
})

export default connect(stateToPropertyMapper)(reduxForm({
    form: 'adminAccountSettingComponent',
    enableReinitialize : true
})(AdminAccountSettingComponent));



