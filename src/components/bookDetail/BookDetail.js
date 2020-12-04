import React, {Fragment} from "react";
import classes from "./BookDetail.module.css";
import {Link} from "react-router-dom";
import {BsChevronLeft, BsChevronRight} from "react-icons/bs";
import {HiBadgeCheck, HiHeart} from "react-icons/hi";
import {Alert} from "reactstrap";
import ReactHtmlParser from 'react-html-parser';
import LenderTable from "./lenderTable/LenderTable";
import Modal from "../UI/modal/Modal";
import LendingSummary from "./lendingSummary/LendingSummary";
import BorrowingSummary from "./borrowingSummary/BorrowingSummary";
import Rating from "react-rating";
import {AiFillStar, AiOutlineStar} from "react-icons/all";
import ImageCard from "../UI/imageCard/ImageCard";
import {connect} from "react-redux";
import {setCurrentIndex} from "../../actions/searchBookActions";
import UserActions from "../../actions/userActions";
import BookActions from "../../actions/bookActions";

class BookDetail extends React.Component {
    state = {
        lending: false,
        borrowing: false,
        alertVisible: false,
        lender: {}
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.dispatch(BookActions.findBook(this.props.match.params.bookId))
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.bookId !== prevProps.match.params.bookId) {
            this.findBook()
        }
    }

    lendingHandler = () => {
        this.setState({lending: true})
    }

    lendingCancelHandler = () => {
        this.setState({lending: false})
    }

    borrowingHandler = (lender) => {
        this.setState({borrowing: true, lender})
    }

    borrowingCancelHandler = () => {
        this.setState({borrowing: false})
    }

    addToReadingList = () => {
        this.props.dispatch(UserActions.addToMyReadingList(this.props.userId, {"googleBookId": this.props.match.params.bookId}))
            .then(this.setState({alertVisible: true}, () => {
                window.setTimeout(() => {
                    this.setState({alertVisible: false})
                }, 2000)
            }))
    }

    render() {
        const {index, books, book} = this.props
        const {lender} = this.state

        return (
            <Fragment>
                <Modal show={this.state.lending} modalClosed={this.lendingCancelHandler}>
                    <LendingSummary cancel={this.lendingCancelHandler}/>
                </Modal>
                <Modal show={this.state.borrowing} modalClosed={this.borrowingCancelHandler}>
                    <BorrowingSummary title={book.title}
                                      imageUrl={book.picture}
                                      lender={lender}/>
                </Modal>
                <div className="container">
                    <div className={classes.BookDetail}>
                        <div className="row">
                            <div className="col-6 mb-5">
                                <Link to="/">Home</Link> /
                                <Link to="/books"> Bookstore</Link> /
                                <a> {book.title}</a>
                            </div>
                            <div className="col-6">
                        <span className="float-right">
                        <Link to={(books.length > 0 && index > 0)? `/books/${books[index - 1].id}`: ""}
                              onClick={() => index > 0 && this.props.dispatch(setCurrentIndex(index - 1))}
                              className={(index === 0 || books.length === 0)? classes.disabled: ""}>
                            <BsChevronLeft
                                className={(index === 0 || books.length === 0) ? classes.navIconDisabled : classes.navIcon}
                            /> Prev
                        </Link> |
                        <Link to={(books.length > 0 && index < books.length - 1)? `/books/${books[index + 1].id}`: ""}
                              onClick={() => index < books.length - 1 && this.props.dispatch(setCurrentIndex(index + 1))}
                              className={index >= books.length - 1? classes.disabled: ""}> Next <BsChevronRight
                            className={index >= books.length - 1 ? classes.navIconDisabled : classes.navIcon}/>
                        </Link>
                        </span>
                            </div>
                        </div>
                        <Alert className="alert alert-success text-center" role="alert"
                               isOpen={this.state.alertVisible}>
                            Success adding to your reading list!
                        </Alert>
                        <div className="row mb-5">
                            <div className="col-sm-6">
                                <ImageCard src={book.picture}/>
                            </div>
                            <div className="col-sm-6">
                                <h2>{book.title}</h2>
                                <div className="mb-3">
                                    <Rating initialRating={book.rating} readonly
                                            emptySymbol={<AiOutlineStar color="gold" className="mb-1"/>}
                                            fullSymbol={<AiFillStar color="gold" className="mb-1"/>}/>
                                    <span className={classes.ratingFont}>
                                {!book.numberOfReviews ? 0 : book.numberOfReviews} ratings
                            </span>
                                </div>
                                <h5>Authors: </h5>
                                {!book.author ? <span>Anonymous</span> : book.author.map((author, i) =>
                                    <span key={i}>{author}</span>)}
                                <button className="btn btn-info btn-block mt-4"
                                        onClick={this.lendingHandler}>
                                    <HiBadgeCheck className="float-left" size="25px"/>
                                    I want to lend the book
                                </button>
                                <button className="btn btn-secondary btn-block"
                                        onClick={this.addToReadingList}>
                                    <HiHeart className="float-left" size="25px"/>
                                    Add to My Reading List
                                </button>
                            </div>
                        </div>
                        <hr/>
                        <div className="row mb-5 mt-5">
                            <h5>Description: </h5>
                            <span> {book.description && ReactHtmlParser(book.description)} </span>
                        </div>
                        <hr/>
                        <div className="row mb-5 mt-5">
                            <div className="col-12 pl-0 pb-3">
                                <h5>Borrowing Options:</h5>
                            </div>
                            <LenderTable borrowingHandler={this.borrowingHandler}/>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

const stateToPropertyMapper = (state) => ({
    index: state.searchBookReducer.currentIndex,
    books: state.searchBookReducer.books,
    userId: state.auth.user._id,
    book: state.book.book
})

export default connect(stateToPropertyMapper)(BookDetail)
