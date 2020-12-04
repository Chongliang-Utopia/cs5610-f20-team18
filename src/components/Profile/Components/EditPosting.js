import React from "react";
import classes from "../../bookDetail/lendingSummary/LendingSummary.module.css";
import {TiHeart} from "react-icons/ti";

const EditPosting = ({
                         book,
                         cancelEdit,
                         newCondition,
                         updatePosting,
                         updateBookCondition}) =>
            <div className={classes.LendingSummary}>
                <div className={classes.heading}>
                    <h1>BayBookClub</h1>
                    <div className={classes.line}>
                        <span className="bg-white p-2"><TiHeart color="red"/></span>
                    </div>
                    <h4>{book.title}</h4>
                    <div>status: Lent</div>
                    <div>condition: {book.condition}</div>
                    <label htmlFor="bookCondition" className={classes.condtionLabel} >Book Condition:</label>
                    <select className="form-control" id="bookCondition">
                        <option>Choose the condition of the book</option>
                        <option onClick={()=>updateBookCondition("LIKE_NEW")}>Like New</option>
                        <option onClick={()=>updateBookCondition("VERY_GOOD")}>Very Good</option>
                        <option onClick={()=>updateBookCondition("GOOD")}>Good</option>
                        <option onClick={()=>updateBookCondition("ACCEPTABLE")}>Acceptable</option>
                    </select>
                    <br/>
                    <div>
                        <label>Upload new images</label>
                        <button className="add-left-margin">Upload</button>
                    </div>
                    <br/>
                    <div className>
                        <button className="btn btn-success mr-3" onClick={()=>{
                            updatePosting({
                                ...book,
                                condition: newCondition
                            })
                            cancelEdit()
                        }}>Confirm</button>
                        <button className="btn btn-danger" onClick={()=>cancelEdit()}>Cancel</button>
                    </div>
                </div>
            </div>



export default EditPosting
