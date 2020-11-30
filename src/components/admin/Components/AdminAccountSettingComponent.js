import React from "react";

const AdminAccountSettingComponent = () =>
    <div>
        <div>
            <h2>Edit admin credential</h2>
            <br/>
            <div className="form-group row">
                <label htmlFor="change-email" className="col-sm-3 col-form-label">
                    Email
                </label>
                <div className="col-sm-9">
                    <input id="change-email" className="form-control" placeholder="admin@admin.com"/>
                </div>
            </div>
            <div className='form-group row'>
                <label htmlFor="change-password" className="col-sm-3 col-form-label">
                    Password
                </label>
                <div className="col-sm-9">
                    <input type="password" className="form-control" id="change-password"/>
                </div>

            </div>
            <div className="float-right">
                <button className="btn btn-danger m-2">Cancel</button>
                <button className="btn btn-success m-2">Save</button>
            </div>
        </div>
    </div>


export default AdminAccountSettingComponent
