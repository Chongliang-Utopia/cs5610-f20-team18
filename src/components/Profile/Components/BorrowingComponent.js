import React from "react";
import classes from "../../bookDetail/lenderTable/LenderTable.module.css";
import Rating from "react-rating";
import {AiFillStar, AiOutlineStar} from "react-icons/all";
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";

const BorrowingComponent = ({requests}) =>
    <div>
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
                    {requests.filter(() => requests.status !== "returned").map(request =>
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
                                    <button className="btn btn-sm btn-danger m-1 float-right">Cancel Request</button>
                                }
                                {
                                    request.status === "declined" &&
                                    <button className="btn btn-sm btn-danger m-1 float-right" disabled>Declined</button>
                                }
                                {
                                    request.status === "approved" &&
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
                    {requests.map(request =>
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

export default BorrowingComponent
