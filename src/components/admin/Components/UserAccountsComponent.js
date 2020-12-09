import React from "react";
import classes from "../../bookDetail/lenderTable/LenderTable.module.css";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {AiFillStar, AiOutlineStar} from "react-icons/all";
import Rating from "react-rating";

const UserAccountsComponent =
    ({
         users=[],
         loggedInUser
    }) =>
    <div>
        <h2>Active site users</h2>
        <div className={classes.LenderTable}>
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>User</th>
                    <th>User Ratings</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {
                    users.map((user, index)=>
                            <tr key={index}>
                                <td>
                                    <Link to={user._id === loggedInUser._id? "/admin": `/profile/${user._id}`} className="mr-1">{user.username}</Link>
                                </td>
                                <td>
                                    <Rating initialRating={user.rating} readonly
                                            emptySymbol={<AiOutlineStar color="gold" className="mb-1"/>}
                                            fullSymbol={<AiFillStar color="gold" className="mb-1"/>}/>
                                </td>
                            </tr>
                )}
                </tbody>
            </table>
        </div>
    </div>


const stateToPropertyMapper = (state) => ({
    users: state.admin.users,
    loggedInUser: state.auth.user

})

export default connect(stateToPropertyMapper)(UserAccountsComponent)
