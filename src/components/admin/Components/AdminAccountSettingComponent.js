import React from "react";
import {connect} from "react-redux";
<<<<<<< HEAD
import {updateAdminInfo} from "../../../actions/adminActions";

class AdminAccountSettingComponent extends React.Component{
    state = {
        // add other input fields here
        newEmail: this.props.adminUser.email,
        newPassword: this.props.adminUser.password,
    }

    reset = () => this.setState({
        newEmail: this.props.adminUser.email,
        newPassword: this.props.adminUser.password,
    })

    render() {
        return(
            <form>
                <h2>Edit admin credential</h2>
                <br/>
                <div className="form-group row">
                    <label htmlFor="change-email" className="col-sm-3 col-form-label">
                        Email
                    </label>
                    <div className="col-sm-9">
                        <input className="form-control"
                               id="change-email"
                               placeholder="user@user.com"
                               onChange={(event)=> {
                                   const userInput = event.target.value
                                   this.setState(
                                       prevState=>({
                                           newEmail: userInput
                                       })
                                   )
                               }}
                               value={this.state.newEmail}
                        />
                    </div>
                </div>
                <div className='form-group row'>
                    <label htmlFor="change-password" className="col-sm-3 col-form-label">
                        Password
                    </label>
                    <div className="col-sm-9">
                        <input className="form-control"
                               type="password"
                               id="change-password"
                               onChange={(event)=> {
                                   const userInput = event.target.value
                                   this.setState(
                                       prevState=>({
                                           newPassword: userInput
                                       })
                                   )
                               }}
                               value={this.state.newPassword}
                        />
                    </div>
                </div>
                <div className="float-right">
                    <button className="btn btn-danger m-2" type={"button"} onClick={()=>this.reset()}>Reset</button>
                    <button className="btn btn-success m-2" type={"button"} onClick={()=>this.props.updateAdminInfo({
                        ...this.props.adminUser,
                        email: this.state.newEmail,
                        password: this.state.newPassword,
                    })}>Save</button>
                </div>
            </form>)
    }

=======
import UserActions from "../../../actions/userActions";
import {Alert} from "reactstrap";


class AdminAccountSettingComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            user: {
                email: this.props.user.email,
                password: "",
            },
            alertVisible: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const {name, value} = e.target;
        this.setState({user: {[name]: value}});
    }

    handleSubmit(e) {
        e.preventDefault();


        const user = this.state.user;
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
        user: {
            email: this.props.user.email,
            password: ""
        }
    })

    render() {
        const {email, password} = this.state.user;

        return (
            <div>
                <h2>Edit admin credential</h2>
                <Alert className="alert alert-success text-center" role="alert"
                       isOpen={this.state.alertVisible}>
                    Success updating your account!
                </Alert>
                <form onSubmit={this.handleSubmit}>
                    <br/>
                    <div className="form-group row">
                        <label htmlFor="change-email" className="col-sm-3 col-form-label">
                            Email
                        </label>
                        <div className="col-sm-9">
                            <input className="form-control"
                                   id="change-email"
                                   placeholder="user@user.com"
                                   type="email" name="email"
                                   value={email}
                                   onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className='form-group row'>
                        <label htmlFor="change-password" className="col-sm-3 col-form-label">
                            Password
                        </label>
                        <div className="col-sm-9">
                            <input className="form-control"
                                   type="password"
                                   id="change-password"
                                   name="password"
                                   placeholder="Enter New Password"
                                   value={password}
                                   onChange={this.handleChange}
                            />
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
>>>>>>> master
}

const stateToPropertyMapper = (state) => ({
    user: state.auth.user,
})

<<<<<<< HEAD
export default connect (stateToPropertyMapper, {updateAdminInfo})(AdminAccountSettingComponent)
=======
export default connect(stateToPropertyMapper)(AdminAccountSettingComponent)
>>>>>>> master
