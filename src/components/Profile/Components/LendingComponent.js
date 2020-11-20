import React, {Fragment} from "react";
import ImageCard from "../../UI/imageCard/ImageCard";
import { RiEdit2Line } from "react-icons/ri";
import { MdDeleteSweep} from "react-icons/md"
import Modal from "../../UI/modal/Modal";
import DeletePosting from "./DeletePosting";
import EditPosting from "./EditPosting";
import classes from "../../bookDetail/lenderTable/LenderTable.module.css";
import {Link} from "react-router-dom";
import Rating from "react-rating";
import {AiFillStar, AiOutlineStar} from "react-icons/all";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Button from "react-bootstrap/Button";
import {Tooltip} from "react-bootstrap";


class LendingComponent extends React.Component{
    state = {
        deleting: false,
        editing: false,
        currentBook: {}

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

    renderTooltip = (props) =>
        <Tooltip {...props}>
            Remind borrower that the book is about to overdue/ is overdue
        </Tooltip>


    render() {
        return (
        <div>
            <h2>
                Your Postings
            </h2>
            <Modal show={this.state.deleting} modalClosed={this.cancelDelete}>
                <DeletePosting book={this.state.currentBook}/>
            </Modal>
            <Modal show={this.state.editing} modalClosed={this.cancelEdit}>
                <EditPosting book={this.state.currentBook}/>
            </Modal>
            {
                this.props.bookPostings.map(book =>
                    <div className="ImageCard">
                        <ImageCard src={book.src}/>
                        <div className="center-text">{book.title}</div>
                        <div className="center-text">
                            <RiEdit2Line size={"1.5em"} onClick={()=>this.editPosting(book)}/>
                            <MdDeleteSweep size={"1.5em"} onClick={()=>this.deletePosting(book)}/>
                        </div>
                    </div>
                )
            }
            <br/>
            <br/>
            <br/>
            <h3>Lending requests</h3>
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
                                <Link to={`/users/${request.userName}/profile`} className="mr-1">{request.userName}</Link>
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
                                <button className="btn btn-success">Approve</button>
                                <button className="btn btn-danger">Decline</button>
                            </td>
                        </tr>)
                    }
                    </tbody>
                </table>
            </div>
            <h3>Active Lendings</h3>
            <div className={classes.LenderTable}>
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th>Borrower</th>
                        <th>Due Date</th>
                        <th>Location</th>
                        <th>Book</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.requests.map(request =>
                        <tr>
                            <td>
                                <Link to={`/users/${request.userName}/profile`} className="mr-1">{request.userName}</Link>
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
                                <OverlayTrigger
                                    placement="right"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={this.renderTooltip}
                                >
                                    <Button variant="warning">Send Reminder</Button>
                                </OverlayTrigger>
                            </td>
                        </tr>)
                    }
                    </tbody>
                </table>
            </div>
            <h3>My Lending History</h3>
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
                                <Link to={`/users/${request.userName}/profile`} className="mr-1">{request.userName}</Link>
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
                                <Button variant="light">Edit Review</Button>
                            </td>
                        </tr>)
                    }
                    </tbody>
                </table>
            </div>
        </div>
        )
    }

    }

export default LendingComponent
