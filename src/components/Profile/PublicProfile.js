import {Link} from "react-router-dom";
import React from "react";
import ImageCard from "../UI/imageCard/ImageCard";
// import classes from "../bookDetail/lenderTable/LenderTable.module.css";
import Rating from "react-rating";
import {AiFillStar, AiOutlineStar} from "react-icons/all";
import ProfileHeading from "./profileHeading/ProfileHeading";
import {Button} from "react-bootstrap";
import {RiErrorWarningLine} from "react-icons/ri"
import ReportForm from "./ReportForm";
import Modal from "../UI/modal/Modal";
import {closeReport, openReport} from "../../actions/adminActions";
import {connect} from "react-redux";
import classes from "./PublicProfile.module.css";
import PublicProfilePosts from "./PublicProfilePosts";
import FollowingComponent from "./Components/FollowingComponent";


const PublicProfile = ({section, userId, userRating, bookPostings, reviews, report, openReport, closeReport}) =>

    <div className="container">
        <Modal show={report} modalClosed={closeReport}>
            <ReportForm/>
        </Modal>
        <ProfileHeading user={userId}/>
        <div className={classes.PublicProfile}>

                <PublicProfilePosts bookPostings={bookPostings} userId={userId} reviews={reviews}
                                    closeReport={closeReport} report={report}/>

            {/*{*/}
            {/*    section === "followings" &&*/}
            {/*    <FollowingComponent/>*/}
            {/*}*/}
        </div>
    </div>

const StateToPropertyMapper = (state) => ({
    report: state.admin.report,
});

export default connect(StateToPropertyMapper, {openReport, closeReport})(PublicProfile);

