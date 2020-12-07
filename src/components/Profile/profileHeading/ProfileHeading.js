import React from "react";
import Rating from "react-rating";
import {AiFillStar, AiOutlineStar} from "react-icons/all";
import classes from "./ProfileHeading.module.css";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {createUserFollower, deleteUserFollower, addToLoggedInUserFollowings, deleteFromLoggedInUserFollowings} from "../../../actions/profileActions";

const ProfileHeading = ({
                            isLoggedIn,
                            LoggedInUser,
                            user,
                            bookPostings,
                            UserFollowings,
                            UserFollowers,
                            createUserFollower,
                            deleteUserFollower,
                            LoggedInUserFollowings,
                            addToLoggedInUserFollowings,
                            deleteFromLoggedInUserFollowings
                        }) => {
    return (
        <div className={"mt-5 add-15-padding row " + classes.ProfileHeading}>
            <div className={"col-lg-2 " + classes.profileImage}>
                <img
                    src={user.profilePicture === undefined? "https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-and-shapes-3/177800/130-512.png": user.profilePicture}
                    alt="profile"/>
            </div>
            <div className="pt-3 col-9">
                <div className="form-inline">
                    <h2 className="pl-3">
                        {user.username}
                    </h2>
                    {
                        isLoggedIn && LoggedInUserFollowings.find(following=>following._id === user._id) === undefined &&
                        <button className="btn btn-info mb-3  ml-3"
                                              onClick={()=>{
                                                  createUserFollower(user._id, LoggedInUser._id, LoggedInUser)
                                                  addToLoggedInUserFollowings(user)
                                              }}>Follow</button>
                    }
                    {
                        isLoggedIn && LoggedInUserFollowings.find(following=>following._id === user._id) !== undefined &&
                        <button className="btn btn-info mb-3  ml-3"
                                onClick={()=>{
                                    deleteUserFollower(LoggedInUser._id, user._id)
                                    deleteFromLoggedInUserFollowings(user)
                                }}>Unfollow</button>
                    }
                </div>
                <div>
                    <Rating className="add-15-padding" initialRating={user.rating} readonly
                            emptySymbol={<AiOutlineStar color="gold" className="mb-1"/>}
                            fullSymbol={<AiFillStar color="gold" className="mb-1"/>}/>
                </div>
                <div>
                    <ul className="nav">
                        <li className="nav-item">
                            <Link to={`/users/${user._id}/profile/lendings`} className="nav-link"><b>{bookPostings.length}</b> posts</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={`/users/${user._id}/profile/followings`} className="nav-link"><b>{UserFollowers.length}</b> followers</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={`/users/${user._id}/profile/followings`} className="nav-link"><b>{UserFollowings.length}</b> following</Link>
                        </li>
                    </ul>
                </div>
                <div className="pl-3">
                    {user.signature}
                </div>
            </div>
        </div>)
}

const stateToPropertyMapper = (state) =>({
    user: state.profile.user,
    bookPostings: state.profile.bookPostings,
    UserFollowings: state.profile.UserFollowings,
    UserFollowers: state.profile.UserFollowers,
    isLoggedIn: state.auth.isLoggedIn,
    LoggedInUser: state.auth.user,
    LoggedInUserFollowings: state.profile.LoggedInUserFollowings
})

export default connect(stateToPropertyMapper, {createUserFollower, deleteUserFollower, addToLoggedInUserFollowings, deleteFromLoggedInUserFollowings})(ProfileHeading);
