import React from "react";
import classes from "../../bookDetail/lenderTable/LenderTable.module.css";
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";

const UserAccountsComponent =
    ({
         users=[]
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
                    users.filter(user => user.status === "ACTIVE")
                        .map(user=>
                            <tr>
                                <td>
                                    <Link to={`/users/${user}/profile`} className="mr-1">{user.username}</Link>
                                </td>
                                <td>
                                    {user.userRating}
                                </td>
                                <td>
                                    <Button variant="danger float-right btn-sm">Delete User</Button>
                                </td>
                            </tr>
                )}
                </tbody>
            </table>
        </div>
    </div>

export default UserAccountsComponent
