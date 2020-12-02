import React from "react";
import classes from "../../bookDetail/lenderTable/LenderTable.module.css";
import Rating from "react-rating";
import {AiFillStar, AiOutlineStar} from "react-icons/all";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {deleteTransaction} from "../../../actions/profileActions";
import EditReview from "./EditReview";
import Modal from "../../UI/modal/Modal";

class BorrowingComponent extends React.Component {

    state = {
        editReview: false,
        reviewBeingEdited: {}
    }

    editReview = (review) => {
        this.setState({
            editReview: true,
            reviewBeingEdited: review
        })
    }

    cancelReview = () => {
        this.setState({
            editReview: false,
            reviewBeingEdited: {}
        })
    }
    render(){
        return (
            <div>
                <Modal show={this.state.editReview} modalClosed={this.cancelReview}>
                    <EditReview
                        cancelReview={this.cancelReview}
                        review={this.state.reviewBeingEdited}
                    />
                </Modal>

                <div className="mt-3">
                    <h2>My borrowing requests</h2>
                    <div className={classes.LenderTable}>
                        <table className="table table-hover">
                            <thead>
                            <tr>
                                <th>Owner</th>
                                <th>Sent Date</th>
                                <th>Location</th>
                                <th>Book</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.props.transactions.filter(transaction => transaction.status!=="returned" && transaction.borrowerId===this.props.user._id).map(transaction =>
                                <tr>
                                    <td>
                                        <Link to={`/users/${transaction.lender.username}/profile`}
                                              className="mr-1">{transaction.lender.username}</Link>
                                    </td>
                                    <td>
                                        <span>{transaction.transactionTime}</span>
                                    </td>
                                    <td>
                                        <span>{transaction.lender.city}</span>
                                    </td>
                                    <td>
                                        <span>{transaction.bookTitle}</span>
                                    </td>
                                    <td>
                                        {
                                            transaction.status === "pending" &&
                                            <button className="btn btn-sm btn-danger m-1 float-right"
                                                    onClick={()=>this.props.deleteTransaction(transaction)}
                                            >Cancel Request</button>
                                        }
                                        {
                                            transaction.status === "declined" &&
                                            <button className="btn btn-sm btn-danger m-1 float-right" disabled>Declined</button>
                                        }
                                        {
                                            transaction.status === "approved" &&
                                            <button className="btn btn-sm btn-success m-1 float-right"
                                                    disabled>Approved</button>
                                        }
                                    </td>
                                </tr>)
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="mt-3">
                    <h2>Active borrowings</h2>
                    <div className={classes.LenderTable}>
                        <table className="table table-hover">
                            <thead>
                            <tr>
                                <th>Owner</th>
                                <th>Due Date</th>
                                <th>Location</th>
                                <th>Book</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.props.transactions.filter(transaction => transaction.status==="approved" && transaction.borrowerId===this.props.user._id).map(transaction =>
                                <tr>
                                    <td>
                                        <Link to={`/users/${transaction.lender.username}/profile`}
                                              className="mr-1">{transaction.lender.username}</Link>
                                    </td>
                                    <td>
                                        <span>{transaction.endDate}</span>
                                    </td>
                                    <td>
                                        <span>{transaction.lender.city}</span>
                                    </td>
                                    <td>
                                        <span>{transaction.bookTitle}</span>
                                    </td>

                                </tr>)
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="mt-3">
                    <h2>My Borrowing History</h2>
                    <div className={classes.LenderTable}>
                        <table className="table table-hover">
                            <thead>
                            <tr>
                                <th>Lender</th>
                                <th>Rating given</th>
                                <th>Borrow Duration</th>
                                <th>Book Title</th>
                                <th>Your review</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.props.transactions.filter(transaction => transaction.status==="returned" && transaction.borrowerId===this.props.user._id).map(transaction =>
                                <tr>
                                    <td>
                                        <Link to={`/users/${transaction.lender.username}/profile`}
                                              className="mr-1">{transaction.lender.username}</Link>
                                    </td>
                                    <td>
                                        <Rating initialRating={this.props.reviewsUserGave.find(review=>review.transactionId===transaction._id).rating} readonly
                                                emptySymbol={<AiOutlineStar color="gold" className="mb-1"/>}
                                                fullSymbol={<AiFillStar color="gold" className="mb-1"/>}/>
                                    </td>
                                    <td>
                                        <Link to={`/users/${transaction.lender.username}/profile`}
                                              className="mr-1">{transaction.lender.username}</Link>
                                    </td>
                                    <td>
                                        <span>{transaction.startDate} ~ {transaction.endDate}</span>
                                    </td>
                                    <td>
                                        <span>{this.props.reviewsUserGave.find(review=>review.transactionId===transaction._id).comments}</span>
                                    </td>
                                    <td>
                                    {
                                        this.props.reviewsUserGave.find(review=>review.transactionId===transaction._id).comments=== "" &&
                                        <button className="btn btn-sm btn-info m-1 float-right" onClick={()=>this.editReview(
                                            this.props.reviewsUserGave.find(review=>review.transactionId===transaction._id))}>
                                            Edit Review</button>
                                    }</td>
                                </tr>)
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}



const stateToPropertyMapper = (state) => ({
    bookPostings: state.profile.bookPostings,
    transactions: state.profile.transactions,
    reviewsUserGave: state.profile.reviewsUserGave,
    user: state.profile.user
})


export default connect(stateToPropertyMapper, {deleteTransaction})(BorrowingComponent)
