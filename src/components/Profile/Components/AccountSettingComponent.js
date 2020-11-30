import React from 'react'

const AccountSettingComponent = () =>
    <from>
        <h2>Edit your account info</h2>
        <br/>
        <div className="form-group row">
            <label htmlFor="change-email" className="col-sm-3 col-form-label">
                Email
            </label>
            <div className="col-sm-9">
                <input className="form-control" id="change-email" placeholder="user@user.com"/>
            </div>
        </div>

        <div className="form-group row">
            <label htmlFor="change-password" className="col-sm-3 col-form-label">
                Password
            </label>
            <div className="col-sm-9">
                <input className="form-control" type="password" id="change-password"/>
            </div>
        </div>
        <div className="form-group row">

            <label htmlFor="change-signature" className="col-sm-3 col-form-label">
                Signature
            </label>
            <div className="col-sm-9">
            <textarea className="form-control" id="change-signature"
                      placeholder="Tell people more about you!"/>
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
            <button className="btn btn-danger m-2">Cancel</button>
            <button className="btn btn-success m-2" type="submit">Save</button>
        </div>
    </from>


export default AccountSettingComponent
