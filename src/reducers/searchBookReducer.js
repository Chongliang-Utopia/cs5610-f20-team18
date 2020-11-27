import {SET_ADVANCED_SEARCH, FETCH_BOOKS, SET_SEARCH_AUTHOR, SET_SEARCH_TITLE, SET_SEARCH_ISBN,
    SET_SEARCH_PUBLISHER, SET_SEARCH_SUBJECT, SET_SEARCH_DEFAULT_TERM} from '../actions/searchBookActions'

const INITIAL_STATE = {
    books: [],
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
            return {...state, books: action.books};
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
        default:
            return state;
    }
};

export default searchBookReducer;
