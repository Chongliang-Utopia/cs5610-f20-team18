import React, {Fragment} from "react";
import ImageCard from "../../UI/imageCard/ImageCard";
import {RiEdit2Line} from "react-icons/ri";
import {MdDeleteSweep} from "react-icons/md"
import Modal from "../../UI/modal/Modal";
import DeletePosting from "./DeletePosting";
import EditPosting from "./EditPosting";
import ConfirmReturn from './ConfirmReturn';
import EditReview from "./EditReview";
import classes from "../../bookDetail/lenderTable/LenderTable.module.css";
import {Link} from "react-router-dom";
import Rating from "react-rating";
import {AiFillStar, AiOutlineStar} from "react-icons/all";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Button from "react-bootstrap/Button";
import {Tooltip} from "react-bootstrap";
import {connect} from "react-redux";
import {updatePosting, updateTransaction} from "../../../actions/profileActions";


class LendingComponent extends React.Component {
    state = {
        deleting: false,
        editing: false,
        bookBeingEdited: {},
        newCondition: "",
        confirm: false,
        transactionBeingConfirmed: {},
        editReview: false,
        reviewBeingEdited: {}
    }

    deletePosting = (book) => {
        this.setState({
            deleting: true,
            bookBeingEdited: book
        })
    }

    cancelDelete = () => {
        this.setState({
            deleting: false,
            bookBeingEdited: {}
        })
    }

    editPosting = (book) => {
        this.setState({
            editing: true,
            bookBeingEdited: book
        })
    }

    cancelEdit = () => {
        this.setState({
            editing: false,
            bookBeingEdited: {}
        })
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

    updateBookCondition = (condition) => {
        this.setState(prevState=>({
            newCondition: condition
            }))
    }

    confirmReturning = (transaction) => {
        this.setState({
            confirm: true,
            transactionBeingConfirmed: transaction
        })
    }

    cancelConfirm = () => {
        this.setState({
            confirm: false,
            transactionBeingConfirmed: {}
        })
    }

    renderConfirmTooltip = (props) =>
        <Tooltip {...props}>
            Confirm borrower has returned the book
        </Tooltip>

    render() {
        return (

            <div>
                <div className="mb-5">
                    <h2>
                        Your Postings
                    </h2>
                    <Modal show={this.state.deleting} modalClosed={this.cancelDelete}>
                        <DeletePosting
                            book={this.state.bookBeingEdited}
                            cancelDelete={this.cancelDelete}
                        />
                    </Modal>
                    <Modal show={this.state.editing} modalClosed={this.cancelEdit}>
                        <EditPosting
                            book={this.state.bookBeingEdited}
                            cancelEdit={this.cancelEdit}
                            updateBookCondition={this.updateBookCondition}
                            newCondition={this.state.newCondition}
                            updatePosting={this.props.updatePosting}
                        />
                    </Modal>
                    <Modal show={this.state.confirm} modalClosed={this.cancelConfirm}>
                        <ConfirmReturn
                            transaction={this.state.transactionBeingConfirmed}
                            finishReturning={this.finishReturning}
                            cancelConfirm={this.cancelConfirm}
                        />
                    </Modal>
                    <Modal show={this.state.editReview} modalClosed={this.cancelReview}>
                        <EditReview
                            cancelReview={this.cancelReview}
                            review={this.state.reviewBeingEdited}
                        />
                    </Modal>
                    {
                        this.props.bookPostings.map(book =>
                            <div className="ImageCard">
                                <ImageCard src={book.src}/>
                                <div className="center-text">{book.bookTitle}</div>
                                <div className="center-text">
                                    <RiEdit2Line size={"1.5em"} onClick={() => this.editPosting(book)}/>
                                    <MdDeleteSweep size={"1.5em"} onClick={() => this.deletePosting(book)}/>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className="mb-3">
                    <h2>Lending requests</h2>
                    <div className={classes.LenderTable}>
                        <table className="table table-hover">
                            <thead>
                            <tr>
                                <th>User Name</th>
                                <th>Rating</th>
                                <th>Location</th>
                                <th>Book</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.props.transactions.filter(
                                transaction=>
                                    transaction.status!=="returned" && transaction.lenderId === this.props.user._id
                                ).map(transaction =>
                                <tr>
                                    <td>
                                        <Link to={`/users/${transaction.borrower.username}/profile`}
                                              className="mr-1">{transaction.borrower.username}</Link>
                                    </td>
                                    <td>
                                        <Rating initialRating={transaction.borrower.rating} readonly
                                                emptySymbol={<AiOutlineStar color="gold" className="mb-1"/>}
                                                fullSymbol={<AiFillStar color="gold" className="mb-1"/>}/>
                                    </td>
                                    <td>
                                        <span>{transaction.borrower.city}</span>
                                    </td>
                                    <td>
                                        <span>{transaction.bookTitle}</span>
                                    </td>
                                    <td>
                                        {
                                            transaction.status === "pending" &&
                                           <div>
                                                <button className="btn btn-sm btn-danger m-1 float-right"
                                                        onClick={()=>this.props.updateTransaction({
                                                            ...transaction,
                                                            status: "declined"
                                                        })}>Decline</button>
                                                <button className="btn btn-sm btn-success m-1 float-right"
                                                        onClick={()=>this.props.updateTransaction({
                                                            ...transaction,
                                                            status: "approved"
                                                        })}>Approve</button>
                                           </div>
                                        }
                                        {
                                            transaction.status === "declined" &&
                                            <button className="btn btn-sm btn-warning m-1 float-right" disabled>Declined</button>
                                        }
                                        {
                                            transaction.status === "approved" &&
                                            <button className="btn btn-sm btn-success m-1 float-right" disabled>Approved</button>
                                        }
                                    </td>
                                </tr>)
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="mb-3">
                    <h2>Active Lendings</h2>
                    <div className={classes.LenderTable}>
                        <table className="table table-hover">
                            <thead>
                            <tr>
                                <th>Borrower</th>
                                <th>Due Date</th>
                                <th>Book</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.props.transactions.filter(transaction=>transaction.status==="approved" && transaction.lenderId===this.props.user._id).map(transaction =>
                                <tr>
                                    <td>
                                        <Link to={`/users/${transaction.borrower.username}/profile`}
                                              className="mr-1">{transaction.borrower.username}</Link>
                                    </td>
                                    <td>
                                        <span>{transaction.endDate}</span>
                                    </td>
                                    <td>
                                        <span>{transaction.bookTitle}</span>
                                    </td>
                                    <td>
                                        <OverlayTrigger
                                            placement="top"
                                            delay={{show: 250, hide: 400}}
                                            overlay={this.renderConfirmTooltip}>
                                            <button className="btn btn-sm btn-success m-1 float-right"
                                                    onClick={() => this.confirmReturning(transaction)}>Confirm</button>
                                        </OverlayTrigger>
                                    </td>
                                </tr>)
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="mb-3">
                    <h2>My Lending History</h2>
                    <div className={classes.LenderTable}>
                        <table className="table table-hover">
                            <thead>
                            <tr>
                                <th>Borrower</th>
                                <th>Rating given</th>
                                <th>Borrow Duration</th>
                                <th>Book Title</th>
                                <th>Your review</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.props.transactions.filter(transaction=>transaction.status==="returned" && transaction.lenderId===this.props.user._id).map(transaction =>
                                    <tr>
                                        <td>
                                            <Link to={`/users/${transaction.borrower.username}/profile`}
                                                  className="mr-1">{transaction.borrower.username}</Link>
                                        </td>
                                        <td>
                                            <Rating initialRating={this.props.reviewsUserGave.find(review=>review.transactionId===transaction._id).rating} readonly
                                                    emptySymbol={<AiOutlineStar color="gold" className="mb-1"/>}
                                                    fullSymbol={<AiFillStar color="gold" className="mb-1"/>}/>
                                        </td>
                                        <td>
                                            <span>{transaction.startDate} ~ {transaction.endDate}</span>
                                        </td>
                                        <td>
                                            <span>{transaction.bookTitle}</span>
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
                                            }
                                        </td>
                                    </tr>
                                )
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


export default connect(stateToPropertyMapper, {updatePosting, updateTransaction})(LendingComponent)
