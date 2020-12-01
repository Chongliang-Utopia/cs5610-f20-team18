import React from "react";
import ProfileHeading from "./profileHeading/ProfileHeading";
import ReportForm from "./ReportForm";
import Modal from "../UI/modal/Modal";
import {closeReport, openReport} from "../../actions/adminActions";
import {connect} from "react-redux";
import classes from "./PublicProfile.module.css";
import PublicProfilePosts from "./PublicProfilePosts";


const PublicProfile = ({section, userId, userRating, bookPostings, reviews}) =>

    <div className="container">
        <ProfileHeading user={userId}/>
        <div className={classes.PublicProfile}>
                <PublicProfilePosts bookPostings={bookPostings} userId={userId} reviews={reviews}/>
        </div>
    </div>
export default PublicProfile;

