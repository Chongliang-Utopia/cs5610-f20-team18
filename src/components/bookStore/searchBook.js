import React from "react"
import { Link } from "react-router-dom";
import ImageCard from "../UI/imageCard/ImageCard";
import classes from "./searchBook.module.css"

class SearchBook extends React.Component {

    state = {
        keyword: '',
        books: []
    }

    handleChange = (event) => {
        this.setState(
            {keyword: event.target.value})
    }

    searchBook = () => {
        const url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.keyword}`;
        fetch(url).then(response => response.json()).then(this.renderBooks)
    }
    renderBooks = (response) => {
        this.setState({books: response.items})
    }


    render() {
        return (
            <div>
                <div className="input-group">
                    <input value={this.state.keyword}
                           onChange={this.handleChange}
                           className="form-control"
                           placeholder="keyword"/>
                    <div className="input-group-append">
                        <button
                            onClick={this.searchBook}
                            className="btn btn-primary">
                            Search
                        </button>
                    </div>
                </div>
                <div className={`${classes.SearchBook} row`}>
                    {
                        this.state.books.map(book =>
                        <div className={`col-3`}>
                            <div className={classes.searchBookResult}
                              >
                                <ImageCard
                                    className={classes.searchBookResult}
                                    src={book.volumeInfo.imageLinks.thumbnail}/>
                                    {/*<h1>Book</h1>*/}
                            </div>
                        </div>
                        )
                    }
                </div>
            </div>

    )
    }
}
export default SearchBook
