import React, {Fragment} from "react";
import ImageCard from "../../UI/imageCard/ImageCard";
import {RiEdit2Line} from "react-icons/ri";
import {MdDeleteSweep} from "react-icons/md"
import Modal from "../../UI/modal/Modal";
import DeletePosting from "./DeletePosting";
import EditPosting from "./EditPosting";
import ConfirmReturn from './ConfirmReturn';
import classes from "../../bookDetail/lenderTable/LenderTable.module.css";
import {Link} from "react-router-dom";
import Rating from "react-rating";
import {AiFillStar, AiOutlineStar} from "react-icons/all";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Button from "react-bootstrap/Button";
import {Tooltip} from "react-bootstrap";


class LendingComponent extends React.Component {
    state = {
        deleting: false,
        editing: false,
        currentBook: {},
        confirm: false,
        currentRequest: {}
    }

    deletePosting = (book) => {
        this.setState({
            deleting: true,
            currentBook: book
        })
    }

    editPosting = (book) => {
        this.setState({
            editing: true,
            currentBook: book
        })
    }

    confirmReturning = (request) => {
        this.setState({
            confirm: true,
            currentRequest: request
        })
    }

    finishConfirm = () => {
        this.setState({
            confirm: false,
            currentRequest: {}
        })
    }

    cancelDelete = () => {
        this.setState({
            deleting: false,
            currentBook: {}
        })
    }

    cancelEdit = () => {
        this.setState({
            editing: false,
            currentBook: {}
        })
    }

    // renderTooltip = (props) =>
    //     <Tooltip {...props}>
    //         Remind borrower that the book is about to overdue/ is overdue
    //     </Tooltip>

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
                        <DeletePosting book={this.state.currentBook}/>
                    </Modal>
                    <Modal show={this.state.editing} modalClosed={this.cancelEdit}>
                        <EditPosting book={this.state.currentBook}/>
                    </Modal>
                    <Modal show={this.state.confirm} modalClosed={this.finishConfirm}>
                        <ConfirmReturn request={this.state.currentRequest}/>
                    </Modal>

                    {
                        this.props.bookPostings.map(book =>
                            <div className="ImageCard">
                                <ImageCard src={book.src}/>
                                <div className="center-text">{book.title}</div>
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
                            {this.props.requests.map(request =>
                                <tr>
                                    <td>
                                        <Link to={`/users/${request.userName}/profile`}
                                              className="mr-1">{request.userName}</Link>
                                    </td>
                                    <td>
                                        <Rating initialRating={request.userRating} readonly
                                                emptySymbol={<AiOutlineStar color="gold" className="mb-1"/>}
                                                fullSymbol={<AiFillStar color="gold" className="mb-1"/>}/>
                                    </td>
                                    <td>
                                        <span>{request.location}</span>
                                    </td>
                                    <td>
                                        <span>{request.bookTitle}</span>
                                    </td>
                                    <td>
                                        {
                                            request.status === "pending" &&
                                           <div>
                                                <button className="btn btn-sm btn-danger m-1 float-right">Decline</button>
                                        <button className="btn btn-sm btn-success m-1 float-right">Approve</button>
                                           </div>
                                        }
                                        {
                                            request.status === "declined" &&
                                            <button className="btn btn-sm btn-warning m-1 float-right" disabled>Declined</button>
                                        }
                                        {
                                            request.status === "approved" &&
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
                            {this.props.requests.map(request =>
                                <tr>
                                    <td>
                                        <Link to={`/users/${request.userName}/profile`}
                                              className="mr-1">{request.userName}</Link>
                                    </td>
                                    <td>
                                        <Rating initialRating={request.userRating} readonly
                                                emptySymbol={<AiOutlineStar color="gold" className="mb-1"/>}
                                                fullSymbol={<AiFillStar color="gold" className="mb-1"/>}/>
                                    </td>
                                    <td>
                                        <span>{request.bookTitle}</span>
                                    </td>
                                    <td>
                                        {/*<OverlayTrigger*/}
                                        {/*    placement="top"*/}
                                        {/*    delay={{ show: 250, hide: 400 }}*/}
                                        {/*    overlay={this.renderTooltip}>*/}
                                        {/*    <Button variant="warning">Reminder</Button>*/}
                                        {/*</OverlayTrigger>*/}
                                        <OverlayTrigger
                                            placement="top"
                                            delay={{show: 250, hide: 400}}
                                            overlay={this.renderConfirmTooltip}>
                                            <button className="btn btn-sm btn-success m-1 float-right"
                                                    onClick={() => this.confirmReturning(request)}>Confirm</button>
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
                                <th>Book</th>
                                <th>Owner</th>
                                <th>Borrow Duration</th>
                                <th>Your review</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.props.requests.map(request =>
                                <tr>
                                    <td>
                                        <Link to={`/users/${request.userName}/profile`}
                                              className="mr-1">{request.userName}</Link>
                                    </td>
                                    <td>
                                        <Rating initialRating={request.userRating} readonly
                                                emptySymbol={<AiOutlineStar color="gold" className="mb-1"/>}
                                                fullSymbol={<AiFillStar color="gold" className="mb-1"/>}/>
                                    </td>
                                    <td>
                                        <span>{request.location}</span>
                                    </td>
                                    <td>
                                        <span>{request.bookTitle}</span>
                                    </td>
                                    <td>
                                        <button className="btn btn-sm btn-info m-1 float-right">Edit Review</button>
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

export default LendingComponent
