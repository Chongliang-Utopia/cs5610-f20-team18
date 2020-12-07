import React from "react";
import ImageCard from "../../UI/imageCardForSearch/ImageCardForSearch";
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
import {Tooltip} from "react-bootstrap";
import {connect} from "react-redux";
import {updatePosting, approveTransaction, declineTransaction, deletePosting} from "../../../actions/profileActions";


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

    deleteBook = (book) => {
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
        console.log(this.props.UserLendings)
        return (
            <div>
                <div className="mb-5">
                    <h2>
                        My Postings
                    </h2>
                    <Modal show={this.state.deleting} modalClosed={this.cancelDelete}>
                        <DeletePosting
                            book={this.state.bookBeingEdited}
                            cancelDelete={this.cancelDelete}
                            deletePosting={this.props.deletePosting}
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
                    <Modal show={this.state.confirm}>
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
                        this.props.bookPostings.filter(book=>book.isActive).map(book =>
                            <div className="ImageCard">
                                <Link title={book.title}
                                      to={`/books/${book.googleBookId}`}>
                                    <ImageCard
                                        src={book.picture? book.picture:
                                            "https://uh.edu/pharmacy/_images/directory-staff/no-image-available.jpg"}
                                        alt={book.title} />
                                    <div className="center-text">
                                        {
                                            book.title.length > 15 && book.title.substring(0, 15)
                                        }
                                        {
                                            book.title.length > 15 && "..."
                                        }
                                        {
                                            book.title.length <= 15 && book.title
                                        }
                                    </div>
                                </Link>
                                <div className="center-text">
                                    <RiEdit2Line size={"1.5em"} onClick={() => this.editPosting(book)}/>
                                    <MdDeleteSweep size={"1.5em"} onClick={() => this.deleteBook(book)}/>
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
                                <th>Borrower</th>
                                <th>Rating</th>
                                <th>Email</th>
                                <th>Location</th>
                                <th>Book</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.props.UserLendings.filter(
                                lending=>lending.status!=="RETURNED").map(lending =>
                                <tr>
                                    <td>
                                        <Link to={`/users/${lending.borrower._id}/profile`}
                                              className="mr-1">{lending.borrower.username}</Link>
                                    </td>
                                    <td>
                                        <Rating initialRating={lending.borrower.rating} readonly
                                                emptySymbol={<AiOutlineStar color="gold" className="mb-1"/>}
                                                fullSymbol={<AiFillStar color="gold" className="mb-1"/>}/>
                                    </td>
                                    <td>
                                        <span>{lending.borrower.email}</span>

                                    </td>
                                    <td>
                                        <span>{lending.borrower.city + ", " + lending.borrower.state}</span>
                                    </td>
                                    <td>
                                        <Link to={`/books/${lending.book.googleBookId}`} className="mr-1">{lending.book.title}</Link>
                                    </td>
                                    <td>
                                        {
                                            lending.status === "PENDING" &&
                                           <div>
                                                <button className="btn btn-sm btn-danger m-1 float-right"
                                                        onClick={()=>this.props.declineTransaction({
                                                            ...lending,
                                                            status: "DECLINED"
                                                        })}>Decline</button>
                                                <button className="btn btn-sm btn-success m-1 float-right"
                                                        onClick={()=>{
                                                            this.props.approveTransaction({
                                                                ...lending,
                                                                status: "APPROVED"
                                                            })
                                                            this.props.updatePosting({
                                                                ...lending.book,
                                                                isAvailable: false
                                                            })
                                                        }}>Approve</button>
                                           </div>
                                        }
                                        {
                                            lending.status === "DECLINED" &&
                                            <button className="btn btn-sm btn-warning m-1 float-right" disabled>Declined</button>
                                        }
                                        {
                                            lending.status === "APPROVED" &&
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
                                <th>Email</th>
                                <th>Due Date</th>
                                <th>Book</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.props.UserLendings.filter(lending=>lending.status==="APPROVED").map(lending =>
                                <tr>
                                    <td>
                                        <Link to={`/users/${lending.borrower._id}/profile`}
                                              className="mr-1">{lending.borrower.username}</Link>
                                    </td>
                                    <td>
                                        <span>{lending.borrower.email}</span>
                                    </td>
                                    <td>
                                        <span>{lending.endDate.slice(0, 10)}</span>
                                    </td>
                                    <td>
                                        <Link to={`/books/${lending.book.googleBookId}`} className="mr-1">{lending.book.title}</Link>
                                    </td>
                                    <td>
                                        <OverlayTrigger
                                            placement="top"
                                            delay={{show: 250, hide: 400}}
                                            overlay={this.renderConfirmTooltip}>
                                            <button className="btn btn-sm btn-success m-1 float-right"
                                                    onClick={() => this.confirmReturning(lending)}>Returned</button>
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
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.props.UserLendings.filter(lending=>lending.status==="RETURNED").map(lending =>
                                    <tr>
                                        <td>
                                            <Link to={`/users/${lending.borrower._id}/profile`}
                                                  className="mr-1">{lending.borrower.username}</Link>
                                        </td>
                                        <td>
                                            <Rating initialRating={lending.lenderReview == null? 0: lending.lenderReview.rating} readonly
                                                    emptySymbol={<AiOutlineStar color="gold" className="mb-1"/>}
                                                    fullSymbol={<AiFillStar color="gold" className="mb-1"/>}/>
                                        </td>
                                        <td>
                                            <span>{lending.startDate.slice(0, 10)} ~ {lending.endDate.slice(0, 10)}</span>
                                        </td>
                                        <td>
                                            <Link to={`/books/${lending.book.googleBookId}`} className="mr-1">{lending.book.title}</Link>
                                        </td>
                                        <td>
                                            <span>{lending.lenderReview == null? "": lending.lenderReview.comments}</span>
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
    UserLendings: state.profile.UserLendings,
    reviewsUserGave: state.profile.reviewsUserGave,
    user: state.profile.user
})


export default connect(stateToPropertyMapper, {updatePosting, approveTransaction, declineTransaction, deletePosting})(LendingComponent)
