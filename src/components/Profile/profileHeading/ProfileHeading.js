import React from "react";
import Rating from "react-rating";
import {AiFillStar, AiOutlineStar} from "react-icons/all";
import classes from "./ProfileHeading.module.css"

const ProfileHeading = ({user}) => {
    return (
        <div className={classes.ProfileHeading}>
            <div className={classes.profileImage}>
                <img src="https://img1.looper.com/img/gallery/the-despicable-me-minions-were-originally-supposed-to-look-much-different/intro-1587406973.jpg"
                     alt="profile"/>
            </div>
            <div className="pt-3">
                <div className="form-inline">
                    <h2 >
                        {user}
                    </h2>
                    <button className="btn btn-info mb-3 ml-4">Follow</button>
                </div>
                <div className="row">
                    <Rating className="add-15-padding" initialRating={5} readonly
                            emptySymbol={<AiOutlineStar color="gold" className="mb-1"/>}
                            fullSymbol={<AiFillStar color="gold" className="mb-1"/>}/>
                </div>
                <ul className="nav">
                    <li className="nav-item">
                        <a href="#" className="nav-link pl-0"><b>100</b> posts</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link"><b>200</b> followers</a>
                    </li >
                    <li className="nav-item">
                        <a href="#" className="nav-link"><b>300</b> following</a>
                    </li>
                </ul>
                <div>
                    <p>I am a passionate reader!</p>
                </div>
            </div>
        </div>)
}

export default ProfileHeading;
