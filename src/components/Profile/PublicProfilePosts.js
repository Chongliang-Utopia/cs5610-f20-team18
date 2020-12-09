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
import {closeReport, openReport, createLoggedInUserFollowings, deleteLoggedInUserFollowings} from "../../actions/profileActions";
import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";
import {requestLoginWithThunk} from "../../actions/authActions";

const PublicProfilePosts = ({
            user,
            bookPostings=[],
            report,
            openReport,
            closeReport,
            reviewsUserReceived,
            isLoggedIn,
            UserFollowings,
            UserFollowers,
            LoggedInUserFollowings,
            LoggedInUser,
            createLoggedInUserFollowings,
            deleteLoggedInUserFollowings,
            requestLoginWithThunk
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
                    bookPostings.map((book, index)=>
                        <div className="ImageCard m-3" key={index}>
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
                    People who lent to {user.username} says
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
                            {reviewsUserReceived.filter(review=>review.reviewerIsLender).map((review, index) =>
                                <tr key={index}>
                                    <td>
                                        <Link to={isLoggedIn && LoggedInUser._id === review.reviewer._id ? `/profile` : `/profile/${review.reviewer._id}`}
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
                        People who borrowed from {user.username} says
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
                                {reviewsUserReceived.filter(review=>!review.reviewerIsLender).map((review, index) =>
                                    <tr key={index}>
                                        <td>
                                            <Link to={isLoggedIn &&LoggedInUser._id === review.reviewer._id ? `/profile` : `/profile/${review.reviewer._id}`}
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

                <div className="mb-5 mt-5">
                    <h3>
                        {user.username}'s followings
                    </h3>
                    <ListGroup variant="flush">
                        {
                            UserFollowings.map((follow, index)=>
                                <ListGroup.Item className="pl-0" key={index}>
                                    <Image width={40}
                                           height={32}
                                           src={follow.profilePicture === undefined ? "https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-and-shapes-3/177800/130-512.png" : follow.profilePicture}
                                           roundedCircle
                                           className="hideAtSm mr-2"
                                    />
                                    <Link to={isLoggedIn &&LoggedInUser._id === follow._id ? `/profile` : `/profile/${follow._id}`}>{follow.username}</Link>
                                    <span className="hideAtSm">
                                        <Rating className="add-15-padding" initialRating={follow.rating} readonly
                                                emptySymbol={<AiOutlineStar color="gold" className="mb-1"/>}
                                                fullSymbol={<AiFillStar color="gold" className="mb-1"/>}/>
                                    </span>
                                    {
                                        isLoggedIn && LoggedInUser._id === follow._id && ""
                                    }
                                    {
                                        !(isLoggedIn && LoggedInUser._id === follow._id) && (!isLoggedIn || LoggedInUserFollowings.find(following => following._id === follow._id) === undefined) &&
                                        <button className="btn btn-info ml-3 pull-right"
                                                onClick={() => {
                                                    if (!isLoggedIn) {
                                                        requestLoginWithThunk(window.location.pathname)
                                                    } else {
                                                        createLoggedInUserFollowings(follow._id, LoggedInUser._id, follow)
                                                    }
                                                }}>Follow</button>

                                    }
                                    {
                                        !(isLoggedIn && LoggedInUser._id === follow._id) && isLoggedIn && LoggedInUserFollowings.find(following => following._id === follow._id) !== undefined &&
                                        <button className="btn btn-outline-secondary ml-3 pull-right"
                                                onClick={() => {
                                                    deleteLoggedInUserFollowings(follow._id, LoggedInUser._id, follow)
                                                }}>Unfollow</button>
                                    }
                                </ListGroup.Item>)
                        }
                    </ListGroup>
                </div>

                <div className="mb-5 mt-5">
                    <h3>
                        {user.username}'s followers
                    </h3>
                    <ListGroup variant="flush">
                        {
                            UserFollowers.map((follow, index)=>
                                <ListGroup.Item className="pl-0" key={index}>
                                    <Image width={40}
                                           height={32}
                                           src={follow.profilePicture === undefined ? "https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-and-shapes-3/177800/130-512.png" : follow.profilePicture}
                                           roundedCircle
                                           className="hideAtSm mr-2"
                                    />
                                    <Link to={isLoggedIn && LoggedInUser._id === follow._id ? `/profile` : `/profile/${follow._id}`}>{follow.username}</Link>
                                    <span className="hideAtSm">
                                        <Rating className="add-15-padding" initialRating={follow.rating} readonly
                                                emptySymbol={<AiOutlineStar color="gold" className="mb-1"/>}
                                                fullSymbol={<AiFillStar color="gold" className="mb-1"/>}/>
                                    </span>
                                    {
                                        isLoggedIn && LoggedInUser._id === follow._id && ""
                                    }
                                    {
                                        !(isLoggedIn && LoggedInUser._id === follow._id) && (!isLoggedIn || LoggedInUserFollowings.find(following => following._id === follow._id) === undefined) &&
                                        <button className="btn btn-info ml-3 pull-right"
                                                onClick={() => {
                                                    if (!isLoggedIn) {
                                                        requestLoginWithThunk(window.location.pathname)
                                                    } else {
                                                        createLoggedInUserFollowings(follow._id, LoggedInUser._id, follow)
                                                    }
                                                }}>Follow</button>

                                    }
                                    {
                                        !(isLoggedIn && LoggedInUser._id === follow._id) && isLoggedIn && LoggedInUserFollowings.find(following => following._id === follow._id) !== undefined &&
                                        <button className="btn btn-outline-secondary ml-3 pull-right"
                                                onClick={() => {
                                                    deleteLoggedInUserFollowings(follow._id, LoggedInUser._id, follow)
                                                }}>Unfollow</button>
                                    }
                                </ListGroup.Item>)
                        }
                    </ListGroup>
                </div>
            </div>
        </div>



const StateToPropertyMapper = (state) => ({
    report: state.profile.report,
    bookPostings: state.profile.bookPostings,
    user: state.profile.user,
    reviewsUserReceived: state.profile.reviewsUserReceived,
    isLoggedIn: state.auth.isLoggedIn,
    UserFollowings: state.profile.UserFollowings,
    UserFollowers: state.profile.UserFollowers,
    LoggedInUserFollowings: state.profile.LoggedInUserFollowings,
    LoggedInUser: state.auth.user
});

export default connect(StateToPropertyMapper, {openReport, closeReport, createLoggedInUserFollowings, deleteLoggedInUserFollowings, requestLoginWithThunk})(PublicProfilePosts);
