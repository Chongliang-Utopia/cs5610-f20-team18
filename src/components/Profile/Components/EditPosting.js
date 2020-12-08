import React from "react";
import classes from "../../bookDetail/lendingSummary/LendingSummary.module.css";
import {TiHeart} from "react-icons/ti";

const EditPosting = ({
                         book,
                         cancelEdit,
                         newCondition,
                         updatePosting,
                         updateBookCondition}) => {

    const renderCondition =(condtion) => {
        switch (condtion) {
            case "LIKE_NEW":
                return <span>Like New</span>
            case "VERY_GOOD":
                return <span>Very Good</span>
            case "GOOD":
                return <span>Good</span>
            case "ACCEPTABLE":
                return <span>Acceptable</span>
            default:
                return null
        }
    }

    return (
    <div className={classes.LendingSummary}>
        <div className={classes.heading}>
            <h1>BayBookClub</h1>
            <div className={classes.line}>
                <span className="bg-white p-2"><TiHeart color="red"/></span>
            </div>
            <h4>{book.title}</h4>
            <div>Status: Lent</div>
            <div>Condition: {renderCondition(book.condition)}</div>
            <label htmlFor="bookCondition" className="center-text mt-3">Book Condition:</label>
            <select className="form-control" id="bookCondition" onChange={e => updateBookCondition(e.target.value)}>
                <option disabled value="">Choose the condition of the book</option>
                <option value="LIKE_NEW">Like New</option>
                <option value="VERY_GOOD">Very Good</option>
                <option value="GOOD">Good</option>
                <option value="ACCEPTABLE">Acceptable</option>
            </select>
            {/*<br/>*/}
            {/*<div>*/}
            {/*    <label>Upload new images</label>*/}
            {/*    <button className="add-left-margin">Upload</button>*/}
            {/*</div>*/}
            <br/>
            <div className>
                <button className="btn btn-danger mr-3" onClick={() => cancelEdit()}>Cancel</button>
                <button className="btn btn-success" onClick={() => {
                    updatePosting({
                        ...book,
                        condition: newCondition
                    })
                    cancelEdit()
                }}>Save
                </button>

            </div>
        </div>
    </div>)
}



export default EditPosting
