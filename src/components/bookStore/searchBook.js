import React from "react"
import { Link } from "react-router-dom";
import ImageCard from "../UI/imageCardForSearch/ImageCardForSearch";
import classes from "./searchBook.module.css"
import {AiFillStar, AiOutlineStar} from "react-icons/all";
import Rating from "react-rating";
import BookStoreSearchBar from "./bookStoreSearchBar/BookStoreSearchBar";
import {connect} from "react-redux";
import {setCurrentIndex} from "../../actions/searchBookActions";

class SearchBook extends React.Component {


    render() {
        return (
            <div  className={`${classes.SearchBook}`}>
                <BookStoreSearchBar/>
                <div className={`row`}>
                    {   this.props.books &&
                        this.props.books.filter(book =>
                            this.props.minRating === 0 ? book :
                            book.volumeInfo.averageRating >= this.props.minRating).map((book, index) =>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xm-12 mb-5" key={index}>
                            <Link title={book.volumeInfo.title}
                                to={`/books/${book.id}`}
                                  onClick={() => this.props.dispatch(setCurrentIndex(index))}
                                className={`${classes.imageCard}`}>
                                <ImageCard
                                    src={book.volumeInfo.imageLinks? book.volumeInfo.imageLinks.thumbnail:
                                    "https://uh.edu/pharmacy/_images/directory-staff/no-image-available.jpg"}
                                alt={book.volumeInfo.title} />
                                <div className={classes.bookTitle}>
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
                                <div className={classes.bookTitle}>
                                    <Rating initialRating={book.volumeInfo.averageRating} readonly
                                            emptySymbol={<AiOutlineStar color="gold" className="mb-1"/>}
                                            fullSymbol={<AiFillStar color="gold" className="mb-1"/>}/>
                                </div>
                            </Link>
                        </div>)
                    }
                    {
                        this.props.books.length === 0 &&
                        <h4>No results available, please search again...</h4>
                    }
                </div>
            </div>
    )
    }
}


const stateToPropertyMapper = (state) => ({
    books: state.searchBookReducer.books,
    minRating: state.searchBookReducer.minRating
})

export default connect(stateToPropertyMapper)
(SearchBook)
