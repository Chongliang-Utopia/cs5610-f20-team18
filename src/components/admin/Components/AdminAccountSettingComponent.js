import React from "react";

const AdminAccountSettingComponent = () =>
    <div>
        <div>
            <h4>Edit admin credential</h4>
            <br/>
            <div className="row">
                <label htmlFor="change-email" className="col-3">
                    Email
                </label>
                <input className="add-left-margin col-8" id="change-email" placeholder="admin@admin.com"/>
            </div>
            <br/>
            <div className='row'>
                <label htmlFor="change-password" className="col-3">
                    Password
                </label>
                <input className="add-left-margin col-8" type="password" id="change-password"/>
            </div>
            <br/>
            <br/>
            <div className="row">
                <div className="col-3"> </div>
                <div className="col-8 add-35-left-margin">
                    <button className="btn btn-success pull-right">Save</button>
                    <button className="btn btn-danger pull-right">Cancel</button>
                </div>
            </div>
        </div>
    </div>


export default AdminAccountSettingComponent
