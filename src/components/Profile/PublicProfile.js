import React from "react";
import ProfileHeading from "./profileHeading/ProfileHeading";
import classes from "./PublicProfile.module.css";
import PublicProfilePosts from "./PublicProfilePosts";


const PublicProfile = () =>
    <div className="container">
        <ProfileHeading/>
        <div className={classes.PublicProfile}>
                <PublicProfilePosts/>
        </div>
    </div>

export default PublicProfile;

