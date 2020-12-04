import React, {Component} from "react";
import classes from "./BorrowingSummary.module.css";
import {TiHeart} from "react-icons/ti";
import 'react-dates/initialize';
import {DateRangePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import ImageCard from "../../UI/imageCard/ImageCard";
import {connect} from "react-redux";
import BookActions from "../../../actions/bookActions";
import history from "../../../history"

class BorrowingSummary extends Component {

    state = {
        startDate: null,
        endDate: null,
        focusedInput: null
    }

    renderCondition(condtion) {
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

    render() {

        const {lender, book, user} = this.props;

        return <div className={classes.BorrowingSummary}>
            <div className={classes.heading}>
                <h1>BayBookClub</h1>
                <div className={classes.line}>
                    <span className="bg-white p-2"><TiHeart color="red"/></span>
                </div>
                <p>Your request to borrow {book.title} will be sent to the owner. When
                    owner confirms, you will see a note on your profile page!</p>
            </div>
            <div className="row mt-5">
                <div className="col-md-4">
                    <ImageCard src={book.picture}/>
                </div>
                <div className="col-md-8">
                    <h5>{book.title}</h5>
                    <ul>
                        <li>Lender: {lender.username}</li>
                        <li>Location: {lender.city}, {lender.state}</li>
                        <li>Condition: {this.renderCondition(lender.bookCondition)}</li>
                    </ul>
                    <div className="from-group mb-5">
                        <label htmlFor="bookCondition" className={classes.condtionLabel}>Select borrowing
                            periods:</label>
                        <DateRangePicker
                            startDate={this.state.startDate}
                            startDateId="your_unique_start_date_id"
                            endDate={this.state.endDate}
                            endDateId="your_unique_end_date_id"
                            onDatesChange={({startDate, endDate}) => this.setState({
                                startDate,
                                endDate
                            })}
                            focusedInput={this.state.focusedInput}
                            onFocusChange={focusedInput => this.setState({focusedInput})}
                            orientation="vertical" verticalHeight={368}
                        />
                    </div>
                    <div className="float-right">
                        <button className="btn btn-danger mr-3" onClick={this.props.cancelBorrowing}>Cancel</button>
                        <button className="btn btn-success"
                                onClick={() => this.props.submitBorrowingRequest({
                                    lender: lender._id,
                                    borrower: user._id,
                                    book: lender.bookId,
                                    startDate: this.state.startDate,
                                    endDate: this.state.endDate,
                                })}>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    }
}


const stateToPropertyMapper = (state) => ({
    user: state.auth.user,
    isLoggedIn: state.auth.isLoggedIn,
    lender: state.bookDetail.lender,
    book: state.bookDetail.book
})

const propertyToDispatchMapper = (dispatch) => ({
    cancelBorrowing: () => BookActions.cancelBorrowing(dispatch),
    submitBorrowingRequest: (request) => BookActions.submitBorrowingRequest(dispatch, request)
})

export default connect(stateToPropertyMapper, propertyToDispatchMapper)(BorrowingSummary);
