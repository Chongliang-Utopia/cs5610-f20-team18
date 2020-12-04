import React from "react";
import {connect} from "react-redux";
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

}

const stateToPropertyMapper = (state) => ({
    adminUser: state.admin.adminUser
})

export default connect (stateToPropertyMapper, {updateAdminInfo})(AdminAccountSettingComponent)
