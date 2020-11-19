import React from 'react'

const AccountSettingComponent = () =>
    <div>
        <h4>Edit your account info</h4>
        <br/>
        <div className="row">
            <label htmlFor="change-email" className="col-2">
                New Email
            </label>
            <input className="add-left-margin col-8" id="change-email" placeholder="user@user.com"></input>
        </div>
        <br/>
        <div className='row'>
            <label htmlFor="change-password" className="col-2">
                New Password
            </label>
            <input className="add-left-margin col-8" type="password" id="change-password"></input>
        </div>
        <br/>
        <div className="row">
            <div className="col-5">
                <button className="btn btn-success">Save Changes</button>
            </div>
            <div className="col-5">
                <button className="btn btn-danger float-right">Clear Changes</button>
            </div>
        </div>
    </div>


export default AccountSettingComponent
