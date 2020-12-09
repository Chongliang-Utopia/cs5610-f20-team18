import React from "react";
import classes from "./LendingSummary.module.css";
import {TiHeart} from "react-icons/ti";
import ImageCard from "../../UI/imageCard/ImageCard";
import {connect} from "react-redux";
import BookActions from "../../../actions/bookActions";

const LendingSummary = ({book, cancel, updateBook, postBook, user}) =>
    <div className={classes.LendingSummary}>
        <div className={classes.heading}>
            <h1>BayBookClub</h1>
            <div className={classes.line}>
                <span className="bg-white p-2"><TiHeart color="red"/></span>
            </div>
            <p>Thank you for offering to lend your copy of {book.title}. When
                someone asks to borrow this book, you will see a note on your profile page!</p>
        </div>
        <div className="row mt-5">
            <div className="col-md-4">
                <ImageCard src={book.picture}/>
            </div>
            <div className="col-md-8">
                <h5>{book.title}</h5>
                <div className="from-group mb-5">
                    <label htmlFor="bookCondition" className={classes.condtionLabel}>Book Condition:</label>
                    <select className="form-control" id="bookCondition"
                            onChange={e => updateBook({...book, condition: e.target.value})}>
                        <option value="LIKE_NEW">Like New</option>
                        <option value="VERY_GOOD">Very Good</option>
                        <option value="GOOD">Good</option>
                        <option value="ACCEPTABLE">Acceptable</option>
                    </select>
                </div>
                <div className="float-right">
                    <button className="btn btn-danger mr-3" onClick={cancel}>Cancel</button>
                    <button className="btn btn-success" onClick={() => {
                        postBook(user._id, book)
                        cancel()
                    }}>Post Book
                    </button>
                </div>
            </div>
        </div>
    </div>


const stateToPropertyMapper = (state) => ({
    book: state.bookDetail.book,
    user: state.auth.user
})

const propertyToDispatchMapper = (dispatch) => ({
    updateBook: (book) => BookActions.updateBook(dispatch, book),
    postBook: (userId, book) => BookActions.postBook(dispatch, userId, book),
})

export default connect(stateToPropertyMapper, propertyToDispatchMapper)(LendingSummary);
