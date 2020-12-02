import React from "react";
import Rating from "react-rating";
import {AiFillStar, AiOutlineStar} from "react-icons/all";
import classes from "./ProfileHeading.module.css";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

const ProfileHeading = ({user}) => {
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
                    <button className="btn btn-info mb-3  ml-3">Follow</button>
                </div>
                <div>
                    <Rating className="add-15-padding" initialRating={5} readonly
                            emptySymbol={<AiOutlineStar color="gold" className="mb-1"/>}
                            fullSymbol={<AiFillStar color="gold" className="mb-1"/>}/>
                </div>
                <div>
                    <ul className="nav">
                        <li className="nav-item">
                            <Link to={`/users/${user._id}/profile/posts`} className="nav-link"><b>100</b> posts</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={`/users/${user._id}/profile/followings`} className="nav-link"><b>200</b> followers</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={`/users/${user._id}/profile/followings`} className="nav-link"><b>300</b> following</Link>
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
    user: state.profile.user
})

export default connect(stateToPropertyMapper)(ProfileHeading);
