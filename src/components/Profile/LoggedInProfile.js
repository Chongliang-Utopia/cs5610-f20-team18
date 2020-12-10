import React from "react";
import './Profile.css'
import AccountSettingComponent from "./Components/AccountSettingComponent";
import LendingComponent from "./Components/LendingComponent";
import {Link} from "react-router-dom";
import ProfileLandingPageComponent from "./Components/ProfileLandingPageComponent";
import FollowingComponent from "./Components/FollowingComponent";
import BorrowingComponent from "./Components/BorrowingComponent";
import {AiFillStar, AiOutlineStar} from "react-icons/all";
import Rating from "react-rating";
import classes from "./LoggedInProfile.module.css"
import {BsCaretRightFill} from "react-icons/bs";
import {connect} from "react-redux";


const LoggedInProfile = ({
                             section,
                             user,
                             reviewsUserReceived}) => {
    return (
        <div className={"container " + classes.LogInProfile}>
            <div className="mt-5 add-15-padding font-size-25-italic row">
                <div className="col-lg-2">
                    <img className="image"
                         src={user.profilePicture === undefined? "https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-and-shapes-3/177800/130-512.png": user.profilePicture}
                         alt="profile-image"
                    />
                </div>
                <div className="add-left-margin add-15-top-margin col-lg-5">
                    <span>
                        Welcome back, {user.username}!
                    </span>
                    <div className={classes.LogInProfile}>
                        <Rating initialRating={user.rating} readonly
                                emptySymbol={<AiOutlineStar color="gold" className="mb-1"/>}
                                fullSymbol={<AiFillStar color="gold" className="mb-1"/>}/>
                        <span className={classes.ratingFont}>
                                {reviewsUserReceived.length === 0 ? "No" : reviewsUserReceived.length} ratings
                            </span>
                    </div>
                </div>
            </div>

            <div className={"row " + classes.profileDiv}>
                <div className={"col-md-4 col-lg-3 " + classes.leftSideBar}>
                    <div className="nav flex-column nav-pills">
                        <li className="nav-item">
                            <Link to={`/profile/sections/home`} className="nav-link">
                                {(!section || section === "home") &&<BsCaretRightFill className="mb-1 mr-1"/>}
                                Profile Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={`/profile/sections/settings`} className="nav-link">
                                {section === "settings" &&<BsCaretRightFill className="mb-1 mr-1"/>}
                                Account Settings
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={`/profile/sections/lendings`} className="nav-link">
                                {section === "lendings" &&<BsCaretRightFill className="mb-1 mr-1"/>}
                                My Lendings
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={`/profile/sections/borrowings`} className="nav-link">
                                {section === "borrowings" &&<BsCaretRightFill className="mb-1 mr-1"/>}
                                My borrowings
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={`/profile/sections/followings`} className="nav-link">
                                {section === "followings" &&<BsCaretRightFill className="mb-1 mr-1"/>}
                                My followings
                            </Link>
                        </li>
                    </div>
                </div>

                <div className={"col-md-8 col-lg-9 pr-4 " + classes.contentDiv}>
                    {
                        (section === undefined || section === "home") &&
                        <ProfileLandingPageComponent/>
                    }
                    {
                        section === "settings" &&
                        <AccountSettingComponent/>
                    }
                    {
                        section === "lendings" &&
                        <LendingComponent/>
                    }
                    {
                        section === "borrowings" &&
                        <BorrowingComponent/>
                    }
                    {
                        section === "followings" &&
                        <FollowingComponent/>
                    }
                </div>
            </div>
        </div>
    )
}

const stateToPropertyMapper = (state) => ({
    user: state.profile.user,
    section: state.profile.section,
    reviewsUserReceived: state.profile.reviewsUserReceived

})
export default connect(stateToPropertyMapper)(LoggedInProfile)
