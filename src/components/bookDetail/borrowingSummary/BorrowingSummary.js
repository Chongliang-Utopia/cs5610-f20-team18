import React, {Component} from "react";
import classes from "./BorrowingSummary.module.css";
import {TiHeart} from "react-icons/ti";
import 'react-dates/initialize';
import { DateRangePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import ImageCard from "../../UI/imageCard/ImageCard";

class BorrowingSummary extends Component {

    state = {
            startDate: null,
            endDate: null,
            focusedInput: null
        }

        render() {
    return <div className={classes.BorrowingSummary}>
        <div className={classes.heading}>
            <h1>BayBookClub</h1>
            <div className={classes.line}>
                <span className="bg-white p-2"><TiHeart color="red"/></span>
            </div>
            <p>Your request to borrow {this.props.title} will be sent to the owner. When
                owner confirms, you will see a note on your profile page!</p>
        </div>
        <div className="row mt-5">
            <div className="col-md-4">
                <ImageCard src={this.props.imageUrl}/>
            </div>
            <div className="col-md-8">
                <h5>{this.props.title}</h5>
                <ul>
                    <li>Lender: {this.props.lender.username}</li>
                    <li>Location: {this.props.lender.city}, {this.props.lender.state}</li>
                    <li>Condition: {this.props.lender.bookCondition}</li>
                </ul>
                <div className="from-group mb-5">
                    <label htmlFor="bookCondition" className={classes.condtionLabel}>Select borrowing periods:</label>
                    <DateRangePicker
                        startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                        startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                        endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                        endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                        onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                        focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                        onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                        orientation="vertical" verticalHeight={368}
                    />
                </div>
                <div className="float-right">
                    <button className="btn btn-danger mr-3">Cancel</button>
                    <button className="btn btn-success">Submit</button>
                </div>
            </div>
        </div>
    </div>
}}


export default BorrowingSummary;