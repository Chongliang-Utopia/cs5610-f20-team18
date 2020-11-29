import {Link} from "react-router-dom";
import React from "react";
import ImageCard from "../UI/imageCard/ImageCard";
import classes from "../bookDetail/lenderTable/LenderTable.module.css";
import Rating from "react-rating";
import {AiFillStar, AiOutlineStar} from "react-icons/all";
import ProfileHeading from "./profileHeading/ProfileHeading";
import {Button} from "react-bootstrap";
import {RiErrorWarningLine} from "react-icons/ri"
import ReportForm from "./ReportForm";
import Modal from "../UI/modal/Modal";
import {closeReport, openReport} from "../../actions/adminActions";
import {connect} from "react-redux";


const UnloggedInProfile = ({userId, userRating, bookPostings, reviews, report, openReport, closeReport}) =>

            <div className="container add-top-margin">
                <Modal show={report} modalClosed={closeReport}>
                    <ReportForm/>
                </Modal>
                <ProfileHeading user={userId}/>
                <div className="add-15-padding">
                    <h3>
                        {userId}'s Postings
                    </h3>
                    {
                        bookPostings.map(book =>
                            <div className="ImageCard">
                                <ImageCard src={book.src}/>
                            </div>
                        )
                    }
                </div>
                <br/>
                <div className="add-15-padding">
                    <h3>
                        People who lent from me says
                    </h3>
                    <div className={classes.LenderTable}>
                        <table className="table table-hover">
                            <thead>
                            <tr>
                                <th>User Name</th>
                                <th>Book Borrowed</th>
                                <th>Rating for {userId}</th>
                                <th>Review</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            {   reviews.map(review =>
                                <tr>
                                    <td>
                                        <Link to={`/users/${review.userName}/profile`} className="mr-1">{review.userName}</Link>
                                    </td>
                                    <td>
                                        {review.bookTitle}
                                    </td>
                                    <td>
                                        <Rating initialRating={review.userRating} readonly
                                                emptySymbol={<AiOutlineStar color="gold" className="mb-1"/>}
                                                fullSymbol={<AiFillStar color="gold" className="mb-1"/>}/>
                                    </td>
                                    <td>
                                        <span>{review.content}</span>
                                    </td>
                                    <td>
                                        <Button variant="warning" size="sm" className="transparent" onClick={openReport}>
                                            <RiErrorWarningLine/>
                                        </Button>
                                    </td>
                                </tr>)
                            }
                            </tbody>
                        </table>
                    </div>
                    <h3>
                        People who borrowed from me says
                    </h3>
                    <div className={classes.LenderTable}>
                        <table className="table table-hover">
                            <thead>
                            <tr>
                                <th>User Name</th>
                                <th>Book Borrowed</th>
                                <th>Rating for {userId}</th>
                                <th>Review</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            {reviews.map(review =>
                                <tr>
                                    <td>
                                        <Link to={`/users/${review.userName}/profile`} className="mr-1">{review.userName}</Link>
                                    </td>
                                    <td>
                                        {review.bookTitle}
                                    </td>
                                    <td>
                                        <Rating initialRating={review.userRating} readonly
                                                emptySymbol={<AiOutlineStar color="gold" className="mb-1"/>}
                                                fullSymbol={<AiFillStar color="gold" className="mb-1"/>}/>
                                    </td>
                                    <td>
                                        <span>{review.content}</span>
                                    </td>
                                    <td>
                                        <Button variant="warning" size="sm" className="transparent" onClick={openReport}>
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

const StateToPropertyMapper = (state) => ({
    report: state.admin.report,
});

export default connect(StateToPropertyMapper, {openReport, closeReport})(UnloggedInProfile);

