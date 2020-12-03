import bookService from "../services/bookService";
import bestsellerBooksLists from '../assets/data/bestsellerBooksLists.json'

export const SET_ADVANCED_SEARCH = "SET_ADVANCED_SEARCH"
export const FETCH_BOOKS = "FETCH_BOOKS"
export const SET_SEARCH_DEFAULT_TERM = "SET_SEARCH_DEFAULT_TERM"
export const SET_SEARCH_AUTHOR = "SET_SEARCH_AUTHOR"
export const SET_SEARCH_TITLE = "SET_SEARCH_TITLE"
export const SET_SEARCH_ISBN = "SET_SEARCH_ISBN"
export const SET_SEARCH_PUBLISHER = "SET_SEARCH_PUBLISHER"
export const SET_SEARCH_SUBJECT = "SET_SEARCH_SUBJECT"

export const FILTER_BOOK_BY_RATING = "FILTER_BOOK_BY_RATING"
export const SORT_BOOK_BY_RATING_HIGH_TO_LOW = "SORT_BOOK_BY_RATING_HIGH_TO_LOW"
export const SORT_BOOK_BY_PUBLISHER_DATE = "SORT_BOOK_BY_PUBLISHER_DATE"

export const CLEAR_BOOKS = "CLEAR_BOOKS"
export const BOOK_ADDER = "BOOK_ADDER"

export const SET_CURRENT_INDEX= "SET_CURRENT_INDEX"

export const sortBookHighToLow = (dispatch) =>
    dispatch({
        type: SORT_BOOK_BY_RATING_HIGH_TO_LOW
    })
export const sortBookPublisherDate = (dispatch) =>
    dispatch({
        type: SORT_BOOK_BY_PUBLISHER_DATE
    })

export const filterBookByRating = (dispatch, minRating) =>
    dispatch({
        type: FILTER_BOOK_BY_RATING, minRating: minRating
    })

export  const setAdvancedSearch = (dispatch, showAdvancedSearch) =>
    dispatch({
        type: SET_ADVANCED_SEARCH, showAdvancedSearch: showAdvancedSearch
    })
export const searchBook = (dispatch, default_term, author, title, isbn, publisher, subject) => {
    let keyword = '';
    if (default_term.length > 0) keyword += default_term;
    if (author.length > 0) keyword += '+inauthor:' + author
    if (title.length > 0) keyword += '+intitle:' + title
    if (isbn.length > 0) keyword += '+isbn:' + isbn
    if (publisher.length > 0) keyword += '+inpublisher:' + publisher
    if (subject.length > 0) keyword += '+subject:' + subject
    if (keyword.length > 0 && keyword.charAt(0) === '+') {
        keyword = keyword.substring(1)
    }
    bookService.searchBooks(keyword)
        .then(books => dispatch({
            type: FETCH_BOOKS, books: books.items ? books.items : []
        }))
}
export const getRecommendedBooks = (dispatch) => {
    dispatch({
        type: CLEAR_BOOKS
    })
    getRecommendedBooksAdder(dispatch)
}
const getRecommendedBooksAdder = (dispatch) => {
    const ids = []
    let pair;
    for (pair of bestsellerBooksLists) {
        ids.push(pair.id)
    }
    let id;
    for (id of ids) {
        bookService.findBookById(id)
            .then(book => dispatch({
                type: BOOK_ADDER,
                book
            }))
    }
}


export const setSearchDefaultTerm = (dispatch, search_default_term) =>
    dispatch({
        type: SET_SEARCH_DEFAULT_TERM,
        search_default_term: search_default_term
    })

export const setSearchAuthor = (dispatch, author) =>
    dispatch({
            type: SET_SEARCH_AUTHOR, author: author
    })
export const setSearchTitle = (dispatch, title) =>
    dispatch({
        type: SET_SEARCH_TITLE, title: title
    })
export const setSearchISBN = (dispatch, isbn) =>
    dispatch({
        type: SET_SEARCH_ISBN, isbn: isbn
    })
export const setSearchPublisher = (dispatch, publisher) =>
    dispatch({
        type: SET_SEARCH_PUBLISHER, publisher: publisher
    })
export const setSearchSubject = (dispatch, subject) =>
    dispatch({
        type: SET_SEARCH_SUBJECT, subject: subject
    })

export const setCurrentIndex = (dispatch, index) =>
    dispatch({
        type: SET_CURRENT_INDEX,
        index
    })
