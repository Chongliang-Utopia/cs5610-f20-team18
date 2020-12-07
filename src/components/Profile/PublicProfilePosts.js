import React from "react";
import classes from "./PublicProfile.module.css";
import ImageCard from "../UI/imageCardForSearch/ImageCardForSearch";
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
            bookPostings=[],
            report,
            openReport,
            closeReport,
            reviewsUserReceived,
            isLoggedIn
        }) =>
        <div>
            <Modal show={report} modalClosed={closeReport}>
                <ReportForm/>
            </Modal>

            <div className="mb-5">
                <h3>
                    {user.username}'s Postings
                </h3>
                {
                    bookPostings.map(book=>
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
                            {reviewsUserReceived.filter(review=>review.reviewerIsLender).map(review =>
                                <tr>
                                    <td>
                                        <Link to={`/users/${review.reviewer._id}/profile`}
                                              className="mr-1">{review.reviewer.username}</Link>
                                    </td>
                                    <td>
                                        <Link to={`/books/${review.book.googleBookId}`} className="mr-1">{review.book.title}</Link>
                                    </td>
                                    <td>
                                        <Rating initialRating={review.rating} readonly
                                                emptySymbol={<AiOutlineStar color="gold" className="mb-1"/>}
                                                fullSymbol={<AiFillStar color="gold" className="mb-1"/>}/>
                                    </td>
                                    <td>
                                        <span>{review.comments}</span>
                                    </td>
                                    <td>
                                        {
                                            isLoggedIn &&
                                            <Button variant="warning" size="sm" className="transparent"
                                                    onClick={() => openReport(review)}
                                                    title="Report">
                                                <RiErrorWarningLine/>
                                            </Button>
                                        }
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
                                {reviewsUserReceived.filter(review=>!review.reviewerIsLender).map(review =>
                                    <tr>
                                        <td>
                                            <Link to={`/users/${review.reviewer._id}/profile`}
                                                  className="mr-1">{review.reviewer.username}</Link>
                                        </td>
                                        <td>
                                            {review.book.title}
                                        </td>
                                        <td>
                                            <Rating initialRating={review.rating} readonly
                                                    emptySymbol={<AiOutlineStar color="gold" className="mb-1"/>}
                                                    fullSymbol={<AiFillStar color="gold" className="mb-1"/>}/>
                                        </td>
                                        <td>
                                            <span>{review.comments}</span>
                                        </td>
                                        <td>
                                            {
                                                isLoggedIn &&
                                                <Button variant="warning" size="sm" className="transparent"
                                                        onClick={()=>openReport(review)}
                                                        title="Report">
                                                    <RiErrorWarningLine/>
                                                </Button>
                                            }
                                        </td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>



const StateToPropertyMapper = (state) => ({
    report: state.profile.report,
    bookPostings: state.profile.bookPostings,
    user: state.profile.user,
    reviewsUserReceived: state.profile.reviewsUserReceived,
    isLoggedIn: state.auth.isLoggedIn
});

export default connect(StateToPropertyMapper, {openReport, closeReport})(PublicProfilePosts);
