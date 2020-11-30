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


const LoggedInProfile = ({section, userId, bookPostings, requests, userRating, reviews}) => {
    return (
        <div className={"container " + classes.LogInProfile}>
            <div className="mt-5 add-15-padding font-size-25-italic row">
                <div className="col-lg-2">
                    <img className="image"
                         src="https://is2-ssl.mzstatic.com/image/thumb/Podcasts124/v4/54/b0/5d/54b05d73-57bf-6e94-d06f-dfc2ceb4f771/mza_1054230007255374421.jpg/1200x1200bb.jpg"
                         alt="profile-image"
                    />
                </div>
                <div className="add-left-margin add-15-top-margin col-lg-5">
                    <span>
                        Welcome back, {userId}!
                    </span>
                    <div>
                        <Rating initialRating={userRating} readonly
                                emptySymbol={<AiOutlineStar color="gold" className="mb-1"/>}
                                fullSymbol={<AiFillStar color="gold" className="mb-1"/>}/>
                    </div>
                </div>
            </div>

            <div className={"row " + classes.profileDiv}>
                <div className={"col-md-4 col-lg-3 " + classes.leftSideBar}>
                    <div className="nav flex-column nav-pills">
                        <li className="nav-item">
                            <Link to={`/users/${userId}/profile`} className="nav-link">
                                {!section &&<BsCaretRightFill className="mb-1 mr-1"/>}
                                Profile Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={`/users/${userId}/profile/settings`} className="nav-link">
                                {section === "settings" &&<BsCaretRightFill className="mb-1 mr-1"/>}
                                Account Settings
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={`/users/${userId}/profile/lendings`} className="nav-link">
                                {section === "lendings" &&<BsCaretRightFill className="mb-1 mr-1"/>}
                                My Lendings
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={`/users/${userId}/profile/borrowings`} className="nav-link">
                                {section === "borrowings" &&<BsCaretRightFill className="mb-1 mr-1"/>}
                                My borrowings
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={`/users/${userId}/profile/followings`} className="nav-link">
                                {section === "followings" &&<BsCaretRightFill className="mb-1 mr-1"/>}
                                My followings
                            </Link>
                        </li>
                    </div>
                </div>
                <div className={"col-md-8 col-lg-9 pr-4 " + classes.contentDiv}>
                    {
                        typeof section === 'undefined' &&
                        <ProfileLandingPageComponent
                            reviews={reviews}
                            userId={userId}
                        />
                    }
                    {
                        section === "settings" &&
                        <AccountSettingComponent/>
                    }
                    {
                        section === "lendings" &&
                        <LendingComponent
                            bookPostings={bookPostings}
                            requests={requests}
                        />
                    }
                    {
                        section === "borrowings" &&
                        <BorrowingComponent requests={requests}/>
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


export default LoggedInProfile
