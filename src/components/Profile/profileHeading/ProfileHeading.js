import React from "react";
import Rating from "react-rating";
import {AiFillStar, AiOutlineStar} from "react-icons/all";
import classes from "./ProfileHeading.module.css";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {createFollow, deleteFollow} from "../../../actions/profileActions";

const ProfileHeading = ({
                            isLoggedIn,
                            LoggedInUser,
                            user,
                            bookPostings,
                            UserFollowings,
                            UserFollowers,
                            createFollow,
                            deleteFollow
                        }) => {
    // TODO: ask yewen how to retrieve logged in user id to create new following
    return (
        <div className={"mt-5 add-15-padding row " + classes.ProfileHeading}>
            <div className={"col-lg-2 " + classes.profileImage}>
                <img
                    src="https://img1.looper.com/img/gallery/the-despicable-me-minions-were-originally-supposed-to-look-much-different/intro-1587406973.jpg"
                    alt="profile"/>
            </div>
            <div className="pt-3 col-9">
                <div className="form-inline">
                    <h2 className="pl-3">
                        {user.username}
                    </h2>
                    {
                        isLoggedIn && UserFollowers.find(follower=>follower._id === LoggedInUser._id) === undefined &&
                        <button className="btn btn-info mb-3  ml-3"
                                              onClick={()=>{createFollow(user._id, LoggedInUser._id, user)}}>Follow</button>
                    }
                    {
                        isLoggedIn && UserFollowers.find(follower=>follower._id === LoggedInUser._id) !== undefined &&
                        <button className="btn btn-info mb-3  ml-3" onClick={()=>{deleteFollow(LoggedInUser._id, user._id)}}>Unfollow</button>
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
    LoggedInUser: state.auth.user
})

export default connect(stateToPropertyMapper, {createFollow, deleteFollow})(ProfileHeading);
