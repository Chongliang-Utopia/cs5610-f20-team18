import React from "react";
import classes from "../../bookDetail/lendingSummary/LendingSummary.module.css";
import {TiHeart} from "react-icons/ti";


const DeletePosting = ({book, cancelDelete, deletePosting}) =>
    <div className={classes.LendingSummary}>
        <div className={classes.heading}>
            <h1>BayBookClub</h1>
            <div className={classes.line}>
                <span className="bg-white p-2"><TiHeart color="red"/></span>
            </div>
            <p>Are you sure you want to delete this posting?</p>
            <div>
                <button className="btn btn-success mr-3" onClick={()=>cancelDelete()}>No - Cancel</button>
                <button className="btn btn-danger" onClick={()=>{
                    deletePosting({
                        ...book,
                        isActive: false
                    })
                    cancelDelete()
                }}>Yes - Delete Posting</button>
            </div>
        </div>
    </div>

export default DeletePosting
