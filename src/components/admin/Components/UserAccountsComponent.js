import React from "react";
import classes from "../../bookDetail/lenderTable/LenderTable.module.css";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

const UserAccountsComponent =
    ({
         users=[],
    }) =>
    <div>
        <h2>Active site users</h2>
        <div className={classes.LenderTable}>
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>user</th>
                    <th>userRatings</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {
                    users.map(user=>
                            <tr>
                                <td>
                                    <Link to={`/users/${user}/profile`} className="mr-1">{user.username}</Link>
                                </td>
                                <td>
                                    {user.rating}
                                </td>
                            </tr>
                )}
                </tbody>
            </table>
        </div>
    </div>


const stateToPropertyMapper = (state) => ({
    users: state.admin.users
})

export default connect(stateToPropertyMapper)(UserAccountsComponent)
