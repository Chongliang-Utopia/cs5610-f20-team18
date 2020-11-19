import React from "react";
import './Profile.css'
import AccountSettingComponent from "./Components/AccountSettingComponent";
import BookPostingsComponent from "./Components/BookPostingsComponent";
import {Link} from "react-router-dom";
import ProfileLandingPage from "./Components/ProfileLandingPage";
import FollowingComponent from "./Components/FollowingComponent";
import RequestManageComponent from "./Components/RequestManageComponent";

const LoggedInProfile = ({section, userId, bookPostings, requests}) => {
    return (
        <div className="container">
            <div className="add-top-margin add-15-padding font-size-25-italic">
                <span>
                    Welcome back, {userId}!
                </span>
                <span className="add-left-margin">
                    <img className="image" src="https://is2-ssl.mzstatic.com/image/thumb/Podcasts124/v4/54/b0/5d/54b05d73-57bf-6e94-d06f-dfc2ceb4f771/mza_1054230007255374421.jpg/1200x1200bb.jpg"/>
                </span>
            </div>
            <br/>
            <div className="row">
                <div className="col-4">
                    <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <Link to ={`/users/${userId}/profile`} className="nav-link">
                            Profile Home
                        </Link>
                        <Link to ={`/users/${userId}/profile/settings`} className="nav-link">
                            Account Setting
                        </Link>
                        <Link to ={`/users/${userId}/profile/postings`} className="nav-link">
                            Manage Postings
                        </Link>
                        <Link to ={`/users/${userId}/profile/requests`} className="nav-link">
                            Manage Requests
                        </Link>
                        <Link to ={`/users/${userId}/profile/followings`} className="nav-link">
                            My followings
                        </Link>
                    </div>
                </div>
                <div className="col-8">
                    {
                        typeof section === 'undefined' &&
                            <ProfileLandingPage/>
                    }
                    {
                        section === "settings" &&
                            <AccountSettingComponent/>
                    }
                    {
                        section === "postings" &&
                            <BookPostingsComponent
                                bookPostings={bookPostings}/>

                    }
                    {
                        section === "requests" &&
                            <RequestManageComponent requests={requests}/>
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
