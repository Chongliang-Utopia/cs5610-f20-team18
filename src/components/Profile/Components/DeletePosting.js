import React from "react";
import classes from "../../bookDetail/lendingSummary/LendingSummary.module.css";
import {TiHeart} from "react-icons/ti";
import {connect} from "react-redux";
import {deletePosting} from "../../../actions/profileActions";


const DeletePosting = ({book, cancelDelete, deletePosting}) =>
    <div className={classes.LendingSummary}>
        <div className={classes.heading}>
            <h1>BayBookClub</h1>
            <div className={classes.line}>
                <span className="bg-white p-2"><TiHeart color="red"/></span>
            </div>
            <p>Are you sure you want to delete this posting?</p>
            <div>
                <button className="btn btn-danger mr-3" onClick={()=>cancelDelete()}>Cancel</button>
                <button className="btn btn-success" onClick={()=>{
                    deletePosting(book)
                    cancelDelete()
                }}>Confirm</button>
            </div>
        </div>
    </div>

const stateToPropertyMapper = (state) => ({
    bookPostings: state.profile.bookPostings
})

export default connect(stateToPropertyMapper, {deletePosting})(DeletePosting)
