import React from "react";
import classes from "./PublicProfile.module.css";
import ImageCard from "../UI/imageCard/ImageCard";
import {Link} from "react-router-dom";
import Rating from "react-rating";
import {AiFillStar, AiOutlineStar} from "react-icons/all";
import {Button} from "react-bootstrap";
import {RiErrorWarningLine} from "react-icons/ri";
import ReportForm from "./ReportForm";
import Modal from "../UI/modal/Modal";
import {connect} from "react-redux";
import {closeReport, openReport} from "../../actions/profileActions";

const PublicProfilePosts = ({
        user,
        bookPostings,
        transactions,
        report,
        openReport,
        closeReport,
        reviewsUserReceived}) =>

    (
        <div>
            {/*<Modal show={report} modalClosed={closeReport}>*/}
            {/*    <ReportForm/>*/}
            {/*</Modal>*/}
            <div className="mb-5">
                <h3>
                    {user.username}'s Postings
                </h3>
                {
                    bookPostings.map(book =>
                        <div className="ImageCard">
                            <ImageCard src={book.src}/>
                            {book.bookTitle}
                        </div>
                    )
                }
            </div>
            <br/>
            <div className="mb-5">
                <h3>
                    People who lent to me says
                </h3>
                <div className={classes.tableScroll}>
                    <table className="table table-hover">
                        <thead>
                        <tr>
                            <th>Lender</th>
                            <th>Book Borrowed</th>
                            <th>Rating for {user.username}</th>
                            <th>Review</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                            {transactions.filter(transaction=>transaction.status==="returned" && transaction.borrowerId===user._id).map(transaction =>
                                <tr>
                                    <td>
                                        <Link to={`/users/${transaction.lenderId}/profile`}
                                              className="mr-1">{transaction.lender.username}</Link>
                                    </td>
                                    <td>
                                        {transaction.bookTitle}
                                    </td>
                                    <td>
                                        <Rating initialRating={reviewsUserReceived.find(review=>review.transactionId===transaction._id).rating} readonly
                                                emptySymbol={<AiOutlineStar color="gold" className="mb-1"/>}
                                                fullSymbol={<AiFillStar color="gold" className="mb-1"/>}/>
                                    </td>
                                    <td>
                                        <span>{reviewsUserReceived.find(review=>review.transactionId===transaction._id).comments}</span>
                                    </td>
                                    <td>
                                        <Button variant="warning" size="sm" className="transparent"
                                                onClick={()=>openReport(reviewsUserReceived.find(review=>review.transactionId===transaction._id))}
                                                title="Report">
                                            <RiErrorWarningLine/>
                                        </Button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
                <div className="mb-5 mt-5">
                    <h3>
                        People who borrowed from me says
                    </h3>
                    <div className={classes.tableScroll}>
                        <table className="table table-hover">
                            <thead>
                            <tr>
                                <th>Borrower</th>
                                <th>Book Borrowed</th>
                                <th>Rating for {user.username}</th>
                                <th>Review</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                                {transactions.filter(transaction=>transaction.status==="returned" && transaction.lenderId===user._id).map(transaction =>
                                    <tr>
                                        <td>
                                            <Link to={`/users/${transaction.borrowerId}/profile`}
                                                  className="mr-1">{transaction.borrower.username}</Link>
                                        </td>
                                        <td>
                                            {transaction.bookTitle}
                                        </td>
                                        <td>
                                            <Rating initialRating={reviewsUserReceived.find(review=>review.transactionId===transaction._id).rating} readonly
                                                    emptySymbol={<AiOutlineStar color="gold" className="mb-1"/>}
                                                    fullSymbol={<AiFillStar color="gold" className="mb-1"/>}/>
                                        </td>
                                        <td>
                                            <span>{reviewsUserReceived.find(review=>review.transactionId===transaction._id).comments}</span>
                                        </td>
                                        <td>
                                            <Button variant="warning" size="sm" className="transparent"
                                                    onClick={()=>openReport(reviewsUserReceived.find(review=>review.transactionId===transaction._id))}
                                                    title="Report">
                                                <RiErrorWarningLine/>
                                            </Button>
                                        </td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )




const StateToPropertyMapper = (state) => ({
    report: state.admin.report,
    bookPostings: state.profile.bookPostings,
    user: state.profile.user,
    transactions: state.profile.transactions,
    reviewsUserReceived: state.profile.reviewsUserReceived
});

export default connect(StateToPropertyMapper, {openReport, closeReport})(PublicProfilePosts);
