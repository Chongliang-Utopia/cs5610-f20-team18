import React from "react";
import classes from "./LendingSummary.module.css";
import {TiHeart} from "react-icons/ti";
import ImageCard from "../../UI/imageCard/ImageCard";

const LendingSummary = ({title, imageUrl}) =>
    <div className={classes.LendingSummary}>
        <div className={classes.heading}>
        <h1>BayBookClub</h1>
            <div className={classes.line}>
                <span className="bg-white p-2"><TiHeart color="red"/></span>
            </div>
        <p>Thank you for offering to lend your copy of {title}. When
            someone asks to borrow this book, you will see a note on your profile page!</p>
        </div>
        <div className="row mt-5">
            <div className="col-md-4">
                <ImageCard src={imageUrl}/>
            </div>
            <div className="col-md-8">
                <h5>{title}</h5>
                <div className="from-group mb-5">
                <label htmlFor="bookCondition" className={classes.condtionLabel} >Book Condition:</label>
                <select className="form-control" id="bookCondition">
                    <option>Like New</option>
                    <option>Very Good</option>
                    <option>Good</option>
                    <option>Acceptable</option>
                </select>
                </div>
                <div className="float-right">
                <button className="btn btn-danger mr-3">Cancel</button>
                <button className="btn btn-success">Confirm</button>
                </div>
            </div>
        </div>
    </div>


export default LendingSummary;