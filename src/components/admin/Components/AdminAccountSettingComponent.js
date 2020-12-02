import React from "react";
import {connect} from "react-redux";
import {changeAdminEmail, changeAdminPassword, fetchAdminUser, updateAdminInfo} from "../../../actions/adminActions";

const AdminAccountSettingComponent = ({
      adminUser,
      changeAdminEmail,
      changeAdminPassword,
      updateAdminInfo
    }) => {
    // TODO: REVISE!! construct local state to store password and email!!
    return(
        <form>
            <h2>Edit admin credential</h2>
            <br/>
            <div className="form-group row">
                <label htmlFor="change-email" className="col-sm-3 col-form-label">
                    Email
                </label>
                <div className="col-sm-9">
                    <input id="change-email"
                           className="form-control"
                           placeholder="admin@admin.com"
                           onChange={(event)=> changeAdminEmail(
                               {
                                   ...adminUser,
                                   email: event.target.value
                               }
                           )}
                           value={adminUser.email}
                    />
                </div>
            </div>
            <div className='form-group row'>
                <label htmlFor="change-password" className="col-sm-3 col-form-label">
                    Password
                </label>
                <div className="col-sm-9">
                    <input type="password"
                           className="form-control"
                           id="change-password"
                           onChange={(event)=> changeAdminPassword(
                               {
                                   ...adminUser,
                                   password: event.target.value
                               }
                           )}
                    />
                </div>
            </div>
            <div className="float-right">
                <button className="btn btn-danger m-2">Reset</button>
                <button className="btn btn-success m-2" type={"button"} onClick={()=>{updateAdminInfo(adminUser)}}>Save</button>
            </div>
        </form>)
}

const stateToPropertyMapper = (state) => ({
    adminUser: state.admin.adminUser
})

export default connect (stateToPropertyMapper, {changeAdminEmail, changeAdminPassword, updateAdminInfo})(AdminAccountSettingComponent)
