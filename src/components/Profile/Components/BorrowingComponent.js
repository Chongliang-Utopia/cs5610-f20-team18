import React from "react";
import classes from "../../bookDetail/lenderTable/LenderTable.module.css";
import Rating from "react-rating";
import {AiFillStar, AiOutlineStar} from "react-icons/all";
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";

const BorrowingComponent = ({requests}) =>
    <div>
        <h3>My borrowing requests</h3>
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
                {requests.map(request =>
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
                            <button className="btn btn-danger">Cancel Request</button>
                        </td>
                    </tr>)
                }
                </tbody>
            </table>
        </div>
        <h3>Active borrowings</h3>
        <div className={classes.LenderTable}>
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>Owner</th>
                    <th>Due Date</th>
                    <th>Location</th>
                    <th>Book</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {requests.map(request =>
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
                            <button className="btn btn-success">Return Book</button>
                        </td>
                    </tr>)
                }
                </tbody>
            </table>
        </div>
        <h3>My Borrowing History</h3>
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
                {requests.map(request =>
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

export default BorrowingComponent
