import React from "react";
import {connect} from "react-redux";
import classes from "./BookStoreSearchBar.module.css"
import {MdExpandMore, MdExpandLess} from "react-icons/md"
import history from '../../../history'
import {
    setAdvancedSearch,
    setSearchAuthor,
    setSearchTitle,
    setSearchISBN,
    setSearchPublisher,
    setSearchSubject,
    setSearchDefaultTerm,
    setBookSearchCriteria
} from "../../../actions/searchBookActions"

const BookStoreSearchBar = ({
    showAdvancedSearch,
    author,
    title,
    isbn,
    publisher,
    subject,
    search_default_term,

    setAdvancedSearch,
    setSearchAuthor,
    setSearchTitle,
    setSearchISBN,
    setSearchPublisher,
    setSearchSubject,
    setSearchDefaultTerm,

    }) => {

    const getCriteria = (default_term, author, title, isbn, publisher, subject) => {
        let keyword = '';
        if (default_term && default_term.length > 0) keyword += default_term;
        if (author && author.length > 0) keyword += '+inauthor:' + author
        if (title && title.length > 0) keyword += '+intitle:' + title
        if (isbn && isbn.length > 0) keyword += '+isbn:' + isbn
        if (publisher && publisher.length > 0) keyword += '+inpublisher:' + publisher
        if (subject && subject.length > 0) keyword += '+subject:' + subject
        if (keyword && keyword.length > 0 && keyword.charAt(0) === '+') {
            keyword = keyword.substring(1)
        }
        setBookSearchCriteria(keyword)
        history.push(`/books/search/${keyword}`)
    }

    return (
    <div className={classes.BookStoreSearchBar}>
        <div className = {classes.BookStoreSearchDiv}>
            <form className={classes.search}>
                <input type="text" className={classes.searchInput} placeholder="Search books"

                       value={search_default_term}
                       onChange={(e) => setSearchDefaultTerm(e.target.value)}
                       />
                <button type="submit" className={classes.searchButton}
                        onClick={(e) => {
                            e.preventDefault();
                            getCriteria(
                                search_default_term,
                                '',
                                '',
                                '',
                                '',
                                '');
                        }}>
                    <i className="fa fa-search" />
                </button>
            </form>
            {!showAdvancedSearch?
                <button onClick={() => setAdvancedSearch(true)}
                        className={classes.advancedButton}>
                    Advanced
                    <MdExpandMore/>
                </button> :
                <button onClick={() => setAdvancedSearch(false)}
                className={classes.advancedButton}>
                Hide
                <MdExpandLess />
                </button>
            }
        </div>
        {showAdvancedSearch &&
            <form className={classes.advancedSearchDiv}>
                <div className="form-group row">
                    <label htmlFor="Author" className="col-sm-3 pt-2 text-dark">Author</label>
                    <div className="col-sm-9">
                        <input type="text" className="form-control" id="Author"
                               value={author}
                               onChange={(e) => setSearchAuthor(e.target.value)}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="Title" className="col-sm-3 pt-2 text-dark">Title</label>
                    <div className="col-sm-9">
                        <input type="text" className="form-control" id="Title"
                               value={title}
                               onChange={(e) => setSearchTitle(e.target.value)}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="ISBN" className="col-sm-3 pt-2 text-dark">ISBN</label>
                    <div className="col-sm-9">
                        <input type="text" className="form-control" id="ISBN"
                               value={isbn}
                               onChange={(e) => setSearchISBN(e.target.value)}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="Publisher" className="col-sm-3 pt-2 text-dark">Publisher</label>
                    <div className="col-sm-9">
                        <input type="text" className="form-control" id="Publisher"
                               value={publisher}
                               onChange={(e) => setSearchPublisher(e.target.value)}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="Subject" className="col-sm-3 pt-2 text-dark">Subject</label>
                    <div className="col-sm-9">
                        <input type="text" className="form-control" id="Subject"
                               value={subject}
                               onChange={(e) => setSearchSubject(e.target.value)}/>
                    </div>
                </div>
                <button className="btn btn-info float-right" type="submit"
                        onClick={(e) =>{ e.preventDefault();
                            getCriteria(
                                search_default_term,
                                author,
                                title,
                                isbn,
                                publisher,
                                subject)
                        }}>
                    Search
                </button>
            </form>
        }
    </div>)
}
const stateToPropertyMapper = (state) => ({
    books: state.searchBookReducer.books,
    showAdvancedSearch: state.searchBookReducer.showAdvancedSearch,
    author: state.searchBookReducer.author,
    title: state.searchBookReducer.title,
    isbn: state.searchBookReducer.isbn,
    publisher: state.searchBookReducer.publisher,
    subject: state.searchBookReducer.subject,
    search_default_term: state.searchBookReducer.search_default_term
})

const propertyToDispatchMapper = (dispatch) => ({
    setAdvancedSearch: (showAdvancedSearch) => setAdvancedSearch(dispatch, showAdvancedSearch),
    setSearchAuthor: (author) => setSearchAuthor(dispatch, author),
    setSearchTitle: (title) => setSearchTitle(dispatch, title),
    setSearchISBN: (isbn) => setSearchISBN(dispatch, isbn),
    setSearchPublisher: (publisher) => setSearchPublisher(dispatch, publisher),
    setSearchSubject: (subject) => setSearchSubject(dispatch, subject),
    setSearchDefaultTerm: (term) => setSearchDefaultTerm(dispatch, term),
    setBookSearchCriteria: (criteria) => setBookSearchCriteria(criteria)
})

export default connect(stateToPropertyMapper, propertyToDispatchMapper)
(BookStoreSearchBar)

// export default BookStoreSearchBar;
