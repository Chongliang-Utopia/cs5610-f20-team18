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
import {Button} from "react-bootstrap";

const LoggedInProfile = ({section, userId, bookPostings, requests, userRating, reviews}) => {
    return (
        <div className="container">
            <div className="add-top-margin add-15-padding font-size-25-italic row">
                <div className="col-2">
                    <img className="image"
                         src="https://is2-ssl.mzstatic.com/image/thumb/Podcasts124/v4/54/b0/5d/54b05d73-57bf-6e94-d06f-dfc2ceb4f771/mza_1054230007255374421.jpg/1200x1200bb.jpg"
                         alt="profile-image"
                    />
                </div>
                <div className="add-left-margin add-15-top-margin col-5">
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
            <br/>
            <div className="row">
                <div className="col-3">
                    <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <Link to ={`/users/${userId}/profile`} className="nav-link">
                            Profile Home
                        </Link>
                        <Link to ={`/users/${userId}/profile/settings`} className="nav-link">
                            Account Settings
                        </Link>
                        <Link to ={`/users/${userId}/profile/lendings`} className="nav-link">
                            My Lendings
                        </Link>
                        <Link to ={`/users/${userId}/profile/borrowings`} className="nav-link">
                            My borrowings
                        </Link>
                        <Link to ={`/users/${userId}/profile/followings`} className="nav-link">
                            My followings
                        </Link>
                    </div>
                </div>
                <div className="col-9">
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
