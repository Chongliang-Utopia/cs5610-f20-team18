import React from 'react'
import {connect} from "react-redux";
import {updateUserInfo} from "../../../actions/profileActions";

class AccountSettingComponent extends React.Component {
    state = {
        // add other input fields here
        newEmail: this.props.user.email,
        newPassword: this.props.user.password,
        newSignature: this.props.user.signature
    }

    reset = () => this.setState({
        newEmail: this.props.user.email,
        newPassword: this.props.user.password,
        newSignature: this.props.user.signature
    })

    render(){
        return (
            <from>
                <h2>Edit your account info</h2>
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

                <div className="form-group row">
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
                <div className="form-group row">

                    <label htmlFor="change-signature" className="col-sm-3 col-form-label">
                        Signature
                    </label>
                    <div className="col-sm-9">
                <textarea className="form-control"
                          id="change-signature"
                          placeholder="Tell people more about you!"
                          onChange={(event)=> {
                            const userInput = event.target.value
                            this.setState(
                                prevState=>({
                                    newSignature: userInput
                                })
                            )
                          }}
                      value={this.state.newSignature}/>
                    </div>
                </div>
                <div className="form-group row">

                    <label htmlFor="change-portrait" className="col-sm-3 col-form-label">
                        Upload Portrait
                    </label>
                    <div className="col-sm-9 p-2">
                        <button className="btn btn-info btn-sm ml-2" id="change-portrait">Upload</button>
                    </div>
                </div>
                <div className="float-right">
                    <button className="btn btn-success m-2" onClick={()=>this.props.updateUserInfo({
                        ...this.props.user,
                        email: this.state.newEmail,
                        password: this.state.newPassword,
                        signature: this.state.newSignature
                    })}>Save</button>
                    <button className="btn btn-danger m-2" onClick={()=>this.reset()}>Reset</button>
                </div>
            </from>
        )
    }
}

const stateToPropertyMapper = (state) => ({
    user: state.profile.user
})

export default connect(stateToPropertyMapper, {updateUserInfo})(AccountSettingComponent)
