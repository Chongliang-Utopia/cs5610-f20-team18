import React, {Fragment} from "react";
import classes from "./BookDetail.module.css";
import {Link} from "react-router-dom";
import {FcPrevious, FcNext} from "react-icons/fc";
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

class BookDetail extends React.Component {
    state = {
        book: {
            title: '',
            image: '',
            authors: [],
            description: ''
        },
        lending: false,
        borrowing: false,
        alertVisible: false,
        lender: {}
    }

    componentDidMount() {
        this.findBook()
    }

    findBook = () => {
        const bookId = this.props.match.params.bookId
        const url = `https://www.googleapis.com/books/v1/volumes/${bookId}`
        fetch(url).then(response => response.json()).then(this.setBook)
    }

    setBook = (book) => {
        // console.log(book.volumeInfo.imageLinks)
        this.setState({
            book: {
                title: book.volumeInfo.title,
                image: book.volumeInfo.imageLinks.thumbnail,
                authors: book.volumeInfo.authors,
                description: book.volumeInfo.description,
                averageRating: book.volumeInfo.averageRating,
                ratingsCount: book.volumeInfo.ratingsCount
            }
        })
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
        this.setState({alertVisible: true}, () => {
            window.setTimeout(() => {
                this.setState({alertVisible: false})
            }, 2000)
        })
    }

    render() {
        return (
            <Fragment>
                <Modal show={this.state.lending} modalClosed={this.lendingCancelHandler}>
                    <LendingSummary title={this.state.book.title}
                    imageUrl={this.state.book.image}/>
                </Modal>
                <Modal show={this.state.borrowing} modalClosed={this.borrowingCancelHandler}>
                    <BorrowingSummary title={this.state.book.title}
                                    imageUrl={this.state.book.image}
                                    lender={this.state.lender}/>
                </Modal>
            <div className="container">
                <div className={classes.BookDetail}>
                    <div className="row">
                        <div className="col-6 mb-5">
                            <Link to="/">Home</Link> /
                            <Link to="/bookstore"> Bookstore</Link> /
                            <a> {this.state.book.title}</a>
                        </div>
                        <div className="col-6">
                        <span className="float-right">
                        <a href="#"> <FcPrevious className="mb-1"/> Prev </a>|
                        <a href="#"> Next <FcNext className="mb-1"/> </a>
                        </span>
                        </div>
                    </div>
                    <Alert className="alert alert-success text-center" role="alert" isOpen={this.state.alertVisible}>
                        Success adding to your reading list!
                    </Alert>
                    <div className="row mb-5">
                        <div className="col-sm-6">
                            <ImageCard src={this.state.book.image}/>
                        </div>
                        <div className="col-sm-6">
                            <h2>{this.state.book.title}</h2>
                            <div className="mb-3">
                            <Rating initialRating={this.state.book.averageRating} readonly
                                    emptySymbol={<AiOutlineStar color="gold" className="mb-1"/>}
                                    fullSymbol={<AiFillStar color="gold" className="mb-1"/>}/>
                            <span className={classes.ratingFont}>
                                {this.state.book.ratingsCount === undefined? 0 : this.state.book.ratingsCount} ratings
                            </span>
                            </div>
                            <h5>Authors: </h5>
                            {this.state.book.authors.map(author => <span>{author}</span>)}
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
                    <p> {ReactHtmlParser(this.state.book.description)} </p>
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

export default BookDetail;