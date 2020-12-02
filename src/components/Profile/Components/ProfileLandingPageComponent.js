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


const bestsellerBooksLists = [
    [
        "/books/book1.webp",
        "/books/book2.webp",
        "/books/book3.webp",
        "/books/book4.webp",
        "/books/book5.webp",
        "/books/book6.webp",
    ],
    [
        "/books/book7.webp",
        "/books/book8.webp",
        "/books/book9.webp",
        "/books/book10.webp",
        "/books/book11.webp",
        "/books/book12.webp",
    ],
]
const ProfileLandingPageComponent = ({
         reviewsUserReceived,
         user,
         bookPostings,
         transactions,
         openReport,
         closeReport,
         report,
         follows
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
                        <Card.Title>Postings</Card.Title>

                    </Card.Body>
                    <Card.Footer style={{"background": "none", "border-top": "none"}}>
                        <br/>
                        <Link to={`/users/${user._id}/profile/lendings`}>{bookPostings.length}</Link>
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
                        <Link to={`/users/${user._id}/profile/followings`}>{follows.filter(follow=>follow.followerId === user._id).length}</Link>
                    </Card.Footer>
                </Card>
            </CardDeck>
            <br/>
            <CardDeck>
                <Card style={{width: '10rem'}} className="center-text" bg={"light"}>
                    <Card.Body>
                        <Card.Title>Borrowings</Card.Title>
                    </Card.Body>
                    <Card.Footer style={{"background": "none", "border-top": "none"}}>
                        <br/>
                        <Link to={`/users/${user._id}/profile/borrowings`}>
                            {transactions.filter(transaction=>transaction.status === "approved" && transaction.borrowerId === user._id).length}</Link>
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
                        <Link to={`/users/${user._id}/profile/followings`}>{follows.filter(follow=>follow.followeeId === user._id).length}</Link>
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
                    {reviewsUserReceived.map(review =>
                        <tr>
                            <td>
                                <Link to={`/users/${review.reviewerId}/profile`} className="mr-1">{review.reviewer.username}</Link>
                            </td>
                            <td>
                                {review.transaction.bookTitle}
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
        <div className="mb-3">
            <h2>My Reading list</h2>
            <Carousel indicators={false}>
                {
                    bestsellerBooksLists.map((booksList, booksListIndex) => (
                        <Carousel.Item key={booksListIndex}>
                            <Row>
                                {
                                    booksList.map((book, bookIndex) => (
                                        <Col key={bookIndex}>
                                            <Card border="light" className="rounded-0" style={{width: '13rem'}}>
                                                <Card.Img variant="top" src={book}/>
                                            </Card>
                                        </Col>
                                    ))
                                }
                            </Row>
                        </Carousel.Item>
                    ))
                }
            </Carousel>
        </div>
    </div>

const StateToPropertyMapper = (state) => ({
    report: state.profile.report,
    bookPostings:state.profile.bookPostings,
    transactions: state.profile.transactions,
    user: state.profile.user,
    reviewsUserReceived: state.profile.reviewsUserReceived,
    follows: state.profile.follows
});

export default connect(StateToPropertyMapper, {openReport, closeReport})(ProfileLandingPageComponent);
