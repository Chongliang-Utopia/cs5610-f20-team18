import React from "react"
import { Link } from "react-router-dom";
import ImageCard from "../UI/imageCardForSearch/ImageCardForSearch";
import classes from "./searchBook.module.css"
import {AiFillStar, AiOutlineStar} from "react-icons/all";
import Rating from "react-rating";
import BookStoreSearchBar from "./bookStoreSearchBar/BookStoreSearchBar";
import {connect} from "react-redux";
import {searchBook} from "../../actions/searchBookActions"

class SearchBook extends React.Component {

    // state = {
    //     books: []
    // }

    componentDidMount() {
        this.props.searchBook('Harry potter', '', '', '', '', '')
    }

    render() {
        return (
            <div  className={`${classes.SearchBook}`}>
                <BookStoreSearchBar/>
                {/*{JSON.stringify(this.props.books)}*/}
                <div className={`row`}>
                    {   this.props.books &&
                        this.props.books.map(book =>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xm-12 mb-5">
                            <Link
                                to={`/books/${book.id}`}
                                className={`${classes.imageCard}`}>
                                <ImageCard
                                    src={book.volumeInfo.imageLinks? book.volumeInfo.imageLinks.thumbnail:
                                    "https://uh.edu/pharmacy/_images/directory-staff/no-image-available.jpg"}/>
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
})

const propertyToDispatchMapper = (dispatch) => ({
    searchBook: (search_default_term, author, title, isbn, publisher, subject) =>
        searchBook(dispatch, search_default_term, author, title, isbn, publisher, subject)
})
// export default SearchBook
export default connect(stateToPropertyMapper, propertyToDispatchMapper)
(SearchBook)
