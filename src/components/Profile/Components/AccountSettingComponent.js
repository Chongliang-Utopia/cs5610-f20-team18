import React from 'react'

const AccountSettingComponent = () =>
    <div>
        <h4>Edit your account info</h4>
        <br/>
        <div className="row">
            <label htmlFor="change-email" className="col-3">
                Email
            </label>
            <input className="add-left-margin col-8" id="change-email" placeholder="user@user.com"/>
        </div>
        <br/>
        <div className='row'>
            <label htmlFor="change-password" className="col-3">
                Password
            </label>
            <input className="add-left-margin col-8" type="password" id="change-password"/>
        </div>
        <br/>
        <div className='row'>
            <label htmlFor="change-signature" className="col-3">
                Signature
            </label>
            <textarea className="add-left-margin col-8" id="change-signature" placeholder="Tell people more about you!"/>
        </div>
        <br/>
        <div className='row'>
            <label htmlFor="change-portrait" className="col-3">
                Upload Portrait
            </label>
            <div className="col-8">
                <button className="btn btn-success" id="change-portrait">Upload</button>
            </div>
        </div>
        <div className="row">
            <div className="col-3"> </div>
            <div className="col-8 add-35-left-margin">
                <button className="btn btn-success pull-right">Save</button>
                <button className="btn btn-danger pull-right">Cancel</button>
            </div>
        </div>
    </div>


export default AccountSettingComponent
