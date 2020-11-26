import React from "react"
import { Link } from "react-router-dom";
import ImageCard from "../UI/imageCardForSearch/ImageCardForSearch";
import classes from "./searchBook.module.css"
import {AiFillStar, AiOutlineStar} from "react-icons/all";
import Rating from "react-rating";
import BookStoreSearchBar from "./bookStoreSearchBar/BookStoreSearchBar";

class SearchBook extends React.Component {

    state = {
        keyword: '',
        criteria: '',
        additionalKeyword: '',
        books: []
    }

    componentDidMount() {
        let url = `https://www.googleapis.com/books/v1/volumes?q=harry potter`;
        fetch(url).then(response => response.json()).then(this.renderBooks)
    }

    handleKeywordChange = (event) => {
        this.setState(
            {keyword: event.target.value})
    }

    handleAdditionalKeywordChange = (event) => {
        this.setState(
            {additionalKeyword: event.target.value})

    }

    handleCriteriaChange = (event) => {
        this.setState(
            {criteria: event.target.value})
    }

    searchBook = () => {
        let url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.keyword}`;
        if (this.state.additionalKeyword.length > 0 && this.state.criteria.length > 0) {
            url += "+" + this.state.criteria + ":" + this.state.additionalKeyword
        }
        fetch(url).then(response => response.json()).then(this.renderBooks)
    }
    renderBooks = (response) => {
        this.setState({books: response.items})
    }


    render() {
        return (
            <div  className={`${classes.SearchBook}`}>
                {/*<div className={`input-group ${classes.searchBar}`}>*/}
                {/*    <input value={this.state.keyword}*/}
                {/*           onChange={this.handleKeywordChange}*/}
                {/*           className="form-control"*/}
                {/*           placeholder="Keyword..."/>*/}
                {/*    <div className="input-group-append">*/}
                {/*        <button*/}
                {/*            onClick={this.searchBook}*/}
                {/*            className="btn btn-primary">*/}
                {/*            <i className="fa fa-search"/>*/}
                {/*        </button>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className={`input-group ${classes.searchBar}`}>*/}
                {/*    <input value={this.state.additionalKeyword}*/}
                {/*           onChange={this.handleAdditionalKeywordChange}*/}
                {/*           className="form-control"*/}
                {/*           placeholder="Additional keyword (optional)..."/>*/}
                {/*    <select className="custom-select"*/}
                {/*            onChange={this.handleCriteriaChange}>*/}
                {/*        <option selected>criteria</option>*/}
                {/*        <option value="inauthor">author</option>*/}
                {/*        <option value="subject">category</option>*/}
                {/*        <option value="isbn">isbn</option>*/}
                {/*    </select>*/}
                {/*</div>*/}
                <BookStoreSearchBar/>
                <div className={`row`}>
                    {   this.state.books &&
                        this.state.books.map(book =>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xm-12 mb-5">
                            <Link
                                to={`/books/${book.id}`}
                                className={`${classes.imageCard}`}>
                                <ImageCard
                                    src={book.volumeInfo.imageLinks.thumbnail}/>
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
                            {/*<div className={classes.hide}>*/}
                            {/*    <Link to={`/books/${book.id}`}*/}
                            {/*          className={`btn btn-primary btn-block ${classes.detailButton}`}>*/}
                            {/*        View More...*/}
                            {/*    </Link>*/}
                            {/*</div>*/}
                        </div>)
                    }
                    {
                        !this.state.books &&
                        <h4>No results available, please search again...</h4>
                    }
                </div>
            </div>

    )
    }
}
export default SearchBook
