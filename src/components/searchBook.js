import React from "react"
import { Link } from "react-router-dom";


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
                <h2>Search Books</h2>
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
                <h2>Results</h2>
                <ul className="list-group">
                    {
                        this.state.books.map(book =>
                        <li className="list-group-item" key={book.id}>
                            <Link to={`/books/${book.id}`}>
                                {book.volumeInfo.title}
                            </Link>
                        </li>)
                    }
                </ul>
            </div>

    )
    }
}
export default SearchBook
