import React from "react";
import Card from 'react-bootstrap/Card'
import CardDeck from "react-bootstrap/CardDeck";
import classes from "../../bookDetail/lenderTable/LenderTable.module.css";
import {Link} from "react-router-dom";
import Rating from "react-rating";
import {AiFillStar, AiOutlineStar} from "react-icons/all";
import {Button} from 'react-bootstrap'
import {RiErrorWarningLine} from "react-icons/ri";
import ReportForm from "../ReportForm";
import Modal from "../../UI/modal/Modal";
import {closeReport, openReport, deleteFromReadingList} from "../../../actions/profileActions";
import {connect} from "react-redux";
import ImageCard from "../../UI/imageCard/ImageCard";
import {MdDeleteSweep} from "react-icons/md";
import DeleteFromReadingList from "./DeleteFromReadingList";
import classes2 from "../../bookStore/searchBook.module.css"


class ProfileLandingPageComponent extends React.Component {
    state = {
        deleting: false,
        bookBeingEdited: {},
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


    render() {
        console.log("readinglist")
        console.log(this.props.UserReadingList)
        console.log(this.props.UserReadingListBooks)
        return (
            <div>
                <Modal show={this.props.report} modalClosed={this.props.closeReport}>
                    <ReportForm/>
                </Modal>
                <Modal show={this.state.deleting} modalClosed={this.cancelDelete}>
                    <DeleteFromReadingList
                        book={this.state.bookBeingEdited}
                        cancelDelete={this.cancelDelete}
                        user={this.props.user}
                        deleteBookFromReadingList={this.props.deleteFromReadingList}
                    />
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
                                <Link
                                    to={`/users/${this.props.user._id}/profile/lendings`}>{this.props.bookPostings.filter(posting => posting.isActive).length}</Link>
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
                                <Link to={`/users/${this.props.user._id}/profile/followings`}>{this.props.UserFollowings.length}</Link>
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
                                <Link to={`/users/${this.props.user._id}/profile/borrowings`}>
                                    {this.props.UserBorrowings.filter(borrrowing => borrrowing.status === "APPROVED").length}</Link>
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
                                <Link to={`/users/${this.props.user._id}/profile/followings`}>{this.props.UserFollowers.length}</Link>
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
                                this.props.reviewsUserReceived.map(review =>
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
                                            <Button variant="warning" size="sm" className="transparent" title="Report"
                                                    onClick={() => this.props.openReport(review)}>
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
                    {
                        this.props.UserReadingListBooks.length===0 &&
                        <h5>No active reading list</h5>
                    }
                    {
                        this.props.UserReadingListBooks.length !==0 &&
                        this.props.UserReadingListBooks.map(book =>
                            <div className="ImageCard">
                                <Link title={book.volumeInfo.title}
                                      to={`/books/${book.id}`}>
                                    <ImageCard
                                        src={book.volumeInfo.imageLinks? book.volumeInfo.imageLinks.thumbnail:
                                            "https://uh.edu/pharmacy/_images/directory-staff/no-image-available.jpg"}
                                        alt={book.volumeInfo.title} />
                                    <div className="center-text">
                                        {
                                            book.volumeInfo.title.length > 15 && book.volumeInfo.title.substring(0, 15)
                                        }
                                        {
                                            book.volumeInfo.title.length > 15 && "..."
                                        }
                                        {
                                            book.volumeInfo.title.length <= 15 && book.volumeInfo.title
                                        }
                                    </div>
                                </Link>
                                <div className="center-text">
                                    <MdDeleteSweep size={"1.5em"} onClick={() =>{
                                        this.deleteBook(book)
                                    }}/>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>)
    }
}


const StateToPropertyMapper = (state) => ({
    report: state.profile.report,
    bookPostings:state.profile.bookPostings,
    UserBorrowings: state.profile.UserBorrowings,
    user: state.profile.user,
    reviewsUserReceived: state.profile.reviewsUserReceived,
    UserFollowings: state.profile.UserFollowings,
    UserFollowers: state.profile.UserFollowers,
    UserReadingList: state.profile.UserReadingList,
    UserReadingListBooks: state.profile.UserReadingListBooks
});

export default connect(StateToPropertyMapper,
    {openReport, closeReport, deleteFromReadingList})(ProfileLandingPageComponent);
