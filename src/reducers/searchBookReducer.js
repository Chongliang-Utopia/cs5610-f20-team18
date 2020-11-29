import {SET_ADVANCED_SEARCH, FETCH_BOOKS, SET_SEARCH_AUTHOR, SET_SEARCH_TITLE, SET_SEARCH_ISBN,

    SET_SEARCH_PUBLISHER, SET_SEARCH_SUBJECT,
    SET_SEARCH_DEFAULT_TERM, FILTER_BOOK_BY_RATING,
    SORT_BOOK_BY_RATING_HIGH_TO_LOW, SORT_BOOK_BY_PUBLISHER_DATE,
    CLEAR_BOOKS, BOOK_ADDER} from '../actions/searchBookActions'

const INITIAL_STATE = {
    books: [],
    minRating: 0,
    showAdvancedSearch: false,
    search_default_term: '',
    author: '',
    title: '',
    isbn: '',
    publisher: '',
    subject: ''
};

const searchBookReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_ADVANCED_SEARCH:
            return {...state, showAdvancedSearch: action.showAdvancedSearch};
        case FETCH_BOOKS:
            return {...state, books: action.books, minRating: 0};
        case  SET_SEARCH_DEFAULT_TERM:
            return {...state, search_default_term: action.search_default_term}
        case SET_SEARCH_AUTHOR:
            return {...state, author: action.author};
        case SET_SEARCH_TITLE:
            return {...state, title: action.title};
        case SET_SEARCH_ISBN:
            return {...state, isbn: action.isbn};
        case SET_SEARCH_PUBLISHER:
            return {...state, publisher: action.publisher};
        case SET_SEARCH_SUBJECT:
            return {...state, subject: action.subject};
        case FILTER_BOOK_BY_RATING:
            return {...state, minRating: action.minRating}
        case SORT_BOOK_BY_RATING_HIGH_TO_LOW:
            let bookSorted = [...state.books]
            bookSorted.sort((a, b) => {
                let ratingA = a.volumeInfo.averageRating ? a.volumeInfo.averageRating : -1;
                let ratingB = b.volumeInfo.averageRating ? b.volumeInfo.averageRating : -1;
                return ratingB - ratingA >= 0 ? 1 : -1;
            })
            return {...state, books: bookSorted}
        case SORT_BOOK_BY_PUBLISHER_DATE:
            let bookSortedByPublisher = [...state.books]
            bookSortedByPublisher.sort((a, b) => {
                let dateA = Date.parse(a.volumeInfo.publishedDate);
                let dateB = Date.parse(b.volumeInfo.publishedDate);
                return dateB - dateA;
            })
            return {...state, books: bookSortedByPublisher}
        case CLEAR_BOOKS:
            return {...state, books:[]};
        case BOOK_ADDER:
            let curBooks = [...state.books]
            curBooks.push(action.book)
            return {...state, books: curBooks}
        default:
            return state;
    }
};

export default searchBookReducer;
