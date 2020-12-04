import {FIND_BOOK, POST_A_BOOK, UPDATE_BOOK} from "../actions/types/bookTypes";

const initialState = {
    book: {}
};

const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case FIND_BOOK:
            return {...state, book: action.book}
        case UPDATE_BOOK:
            return {...state, book: action.book}
        case POST_A_BOOK:
            return {...state, book: action.book}
        default:
            return state;
    }
}

export default bookReducer;