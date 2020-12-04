import React from "react";
import Card from 'react-bootstrap/Card'
import CardDeck from "react-bootstrap/CardDeck";
import classes from "../../bookDetail/lenderTable/LenderTable.module.css";
import {Link} from "react-router-dom";
import Rating from "react-rating";
import {AiFillStar, AiOutlineStar} from "react-icons/all";
import {Row, Col, Button, Carousel} from 'react-bootstrap'
import {RiErrorWarningLine} from "react-icons/ri";
import ReportForm from "../ReportForm";
import Modal from "../../UI/modal/Modal";
import {closeReport, openReport} from "../../../actions/profileActions";
import {connect} from "react-redux";


const ProfileLandingPageComponent = ({
         reviewsUserReceived,
         user,
         bookPostings,
         UserBorrowings,
         openReport,
         closeReport,
         report,
         UserFollowings,
         UserFollowers,
         UserReadingList
    }) =>
    <div>
        <Modal show={report} modalClosed={closeReport}>
            <ReportForm/>
        </Modal>
        <div className="mb-5">
            <h2>My activity at a glance</h2>
            <br/>
            <CardDeck>
                <Card style={{width: '10rem'}} className="center-text" bg={"light"}>
                    <Card.Body>
                        <Card.Title>Active Postings</Card.Title>

                    </Card.Body>
                    <Card.Footer style={{"background": "none", "border-top": "none"}}>
                        <br/>
                        <Link to={`/users/${user._id}/profile/lendings`}>{bookPostings.filter(posting=>posting.isActive).length}</Link>
                    </Card.Footer>
                </Card>
                {/*<Card style={{ width: '10rem' }} className="center-text" bg={"light"}>*/}
                {/*    <Card.Body>*/}
                {/*        <Card.Title>Pending borrowing requests</Card.Title>*/}
                {/*        <Card.Text>*/}
                {/*            <Link to={`/users/${userId}/profile/borrowings`}>2</Link>*/}
                {/*        </Card.Text>*/}
                {/*    </Card.Body>*/}
                {/*</Card>*/}
                <Card style={{width: '10rem'}} className="center-text" bg={"light"}>
                    <Card.Body>
                        <Card.Title>Following</Card.Title>
                    </Card.Body>
                    <Card.Footer style={{"background": "none", "border-top": "none"}}>
                        <br/>
                        <Link to={`/users/${user._id}/profile/followings`}>{UserFollowings.length}</Link>
                    </Card.Footer>
                </Card>
            </CardDeck>
            <br/>
            <CardDeck>
                <Card style={{width: '10rem'}} className="center-text" bg={"light"}>
                    <Card.Body>
                        <Card.Title>Active Borrowings</Card.Title>
                    </Card.Body>
                    <Card.Footer style={{"background": "none", "border-top": "none"}}>
                        <br/>
                        <Link to={`/users/${user._id}/profile/borrowings`}>
                            {UserBorrowings.filter(borrrowing=>borrrowing.status === "APPROVED").length}</Link>
                    </Card.Footer>
                </Card>
                {/*<Card style={{ width: '10rem' }} className="center-text" bg={"light"}>*/}
                {/*    <Card.Body>*/}
                {/*        <Card.Title>Pending Lending requests</Card.Title>*/}
                {/*        <Card.Text>*/}
                {/*            <Link to={`/users/${userId}/profile/lendings`}>6</Link>*/}
                {/*        </Card.Text>*/}
                {/*    </Card.Body>*/}
                {/*</Card>*/}

                <Card style={{width: '10rem'}} className="center-text" bg={"light"}>
                    <Card.Body>
                        <Card.Title>Follower</Card.Title>
                    </Card.Body>
                    <Card.Footer style={{"background": "none", "border-top": "none"}}>
                        <br/>
                        <Link to={`/users/${user._id}/profile/followings`}>{UserFollowers.length}</Link>
                    </Card.Footer>
                </Card>
            </CardDeck>
        </div>

        <div className="mb-3">
            <h2>Reviews I have received</h2>
            <br/>
            <div className={classes.LenderTable}>
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th>User Name</th>
                        <th>Book Borrowed</th>
                        <th>Rating for me</th>
                        <th>Review</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        reviewsUserReceived.map(review =>
                        <tr>
                            <td>
                                <Link to={`/users/${review.reviewer._id}/profile`} className="mr-1">{review.reviewer.username}</Link>
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
                                <Button variant="warning" size="sm" className="transparent" title="Report"
                                        onClick={()=>openReport(review)}>
                                    <RiErrorWarningLine/>
                                </Button>
                            </td>
                        </tr>)
                    }
                    </tbody>
                </table>
            </div>
        </div>
        {/*<div className="mb-3">*/}
        {/*    <h2>My Reading list</h2>*/}
        {/*    <Carousel indicators={false}>*/}
        {/*        {*/}
        {/*            UserReadingList.map((booksList, booksListIndex) => (*/}
        {/*                <Carousel.Item key={booksListIndex}>*/}
        {/*                    <Row>*/}
        {/*                        {*/}
        {/*                            booksList.map((book, bookIndex) => (*/}
        {/*                                <Col key={bookIndex}>*/}
        {/*                                    <Card border="light" className="rounded-0" style={{width: '13rem'}}>*/}
        {/*                                        <Card.Img variant="top" src={book}/>*/}
        {/*                                    </Card>*/}
        {/*                                </Col>*/}
        {/*                            ))*/}
        {/*                        }*/}
        {/*                    </Row>*/}
        {/*                </Carousel.Item>*/}
        {/*            ))*/}
        {/*        }*/}
        {/*    </Carousel>*/}
        {/*</div>*/}
    </div>

const StateToPropertyMapper = (state) => ({
    report: state.profile.report,
    bookPostings:state.profile.bookPostings,
    UserBorrowings: state.profile.UserBorrowings,
    user: state.profile.user,
    reviewsUserReceived: state.profile.reviewsUserReceived,
    UserFollowings: state.profile.UserFollowings,
    UserFollowers: state.profile.UserFollowers,
    UserReadingList: state.profile.UserReadinglist
});

export default connect(StateToPropertyMapper, {openReport, closeReport})(ProfileLandingPageComponent);
