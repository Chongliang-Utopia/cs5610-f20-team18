import {
    CANCEL_BORROWING,
    FIND_BOOK,
    FIND_ALL_BORROWING_OPTIONS,
    START_A_BORROWING_REQUEST,
    POST_A_BOOK,
    SUBMIT_A_BORROWING_REQUEST,
    UPDATE_BOOK
} from "../actions/types/bookTypes";

const initialState = {
    book: {},
    borrowingOptions: [],
    lender: {},
    borrowing: false
};

const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case FIND_BOOK:
            return {...state, book: action.book}
        case UPDATE_BOOK:
            return {...state, book: action.book}
        case POST_A_BOOK:
            return {...state, borrowingOptions: [...state.borrowingOptions, action.book]}
        case FIND_ALL_BORROWING_OPTIONS:
            return {...state, borrowingOptions: action.options}
        case START_A_BORROWING_REQUEST:
            return {...state, lender: action.lender, borrowing: true}
        case CANCEL_BORROWING:
            return {...state, lender: {}, borrowing: false}
        case SUBMIT_A_BORROWING_REQUEST:
            return {...state, lender: {}, borrowing: false}
        default:
            return state;
    }
}

export default bookReducer;