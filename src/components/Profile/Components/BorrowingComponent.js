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
        borrowingBeingEdited: {}
    }

    editReview = (borrowing) => {
        this.setState({
            editReview: true,
            borrowingBeingEdited: borrowing
        })
    }

    cancelReview = () => {
        this.setState({
            editReview: false,
            borrowingBeingEdited: {}
        })
    }
    render(){
        return (
            <div>
                <Modal show={this.state.editReview}>
                    <EditReview
                        cancelReview={this.cancelReview}
                        borrowingBeingEdited={this.state.borrowingBeingEdited}
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
                            {this.props.UserBorrowings.filter(borrowing => borrowing.status!=="RETURNED").map(borrowing =>
                                <tr>
                                    <td>
                                        <Link to={`/users/${borrowing.lender._id}/profile`}
                                              className="mr-1">{borrowing.lender.username}</Link>
                                    </td>
                                    <td>
                                        <span>{borrowing.createdAt.slice(0, 10)}</span>
                                    </td>
                                    <td>
                                        <span>{borrowing.lender.city + ", " + borrowing.lender.state}</span>
                                    </td>
                                    <td>
                                        <span>{borrowing.book.title}</span>
                                    </td>
                                    <td>
                                        {
                                            borrowing.status === "PENDING" &&
                                            <button className="btn btn-sm btn-danger m-1 float-right"
                                                    onClick={()=>this.props.deleteTransaction(borrowing)}
                                            >Cancel Request</button>
                                        }
                                        {
                                            borrowing.status === "DECLINED" &&
                                            <button className="btn btn-sm btn-warning m-1 float-right" disabled>Declined</button>
                                        }
                                        {
                                            borrowing.status === "APPROVED" &&
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
                            {this.props.UserBorrowings.filter(borrowing => borrowing.status==="APPROVED").map(borrowing =>
                                <tr>
                                    <td>
                                        <Link to={`/users/${borrowing.lender._id}/profile`}
                                              className="mr-1">{borrowing.lender.username}</Link>
                                    </td>
                                    <td>
                                        <span>{borrowing.endDate.slice(0, 10)}</span>
                                    </td>
                                    <td>
                                        <span>{borrowing.lender.city + ", " + borrowing.lender.state}</span>
                                    </td>
                                    <td>
                                        <span>{borrowing.book.title}</span>
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
                                <th>Rating</th>
                                <th>Borrow Duration</th>
                                <th>Book Title</th>
                                <th>My Review</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.props.UserBorrowings.filter(borrowing => borrowing.status==="RETURNED").map(borrowing =>
                                <tr>
                                    <td>
                                        <Link to={`/users/${borrowing.lender._id}/profile`}
                                              className="mr-1">{borrowing.lender.username}</Link>
                                    </td>
                                    <td>
                                        <Rating initialRating={borrowing.borrowerReview===undefined?0:borrowing.borrowerReview.rating} readonly
                                                emptySymbol={<AiOutlineStar color="gold" className="mb-1"/>}
                                                fullSymbol={<AiFillStar color="gold" className="mb-1"/>}/>
                                    </td>
                                    <td>
                                        <span>{borrowing.startDate.slice(0, 10)} ~ {borrowing.endDate.slice(0, 10)}</span>
                                    </td>
                                    <td>
                                        <span>{borrowing.book.title}</span>
                                    </td>
                                    <td>
                                        {
                                            borrowing.borrowerReview === undefined &&
                                            <button className="btn btn-sm btn-info m-1 float-right" onClick={()=>this.editReview(borrowing)}>
                                                Edit Review</button>
                                        }
                                        {
                                            borrowing.borrowerReview !== undefined &&
                                            <span>{borrowing.borrowerReview.comments}</span>
                                        }
                                    </td>
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
    UserBorrowings: state.profile.UserBorrowings,
    user: state.profile.user
})


export default connect(stateToPropertyMapper, {deleteTransaction})(BorrowingComponent)
