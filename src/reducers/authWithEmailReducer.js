import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT, REGISTER_STEP_ONE, REGISTER_STEP_TWO,
} from "../actions/types/authTypes";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = user? {isLoggedIn: true, user: user} : {isLoggedIn: false, user: {}};

const authWithEmailReducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case REGISTER_STEP_ONE:
            return {...state, user: {...state.user, username: payload.username, firstName: payload.firstName,
                    lastName: payload.lastName, phoneNumber: payload.phoneNumber}};
        case REGISTER_STEP_TWO:
            return {...state, user: {...state.user, username: payload.streetAddress, firstName: payload.city,
                    lastName: payload.state, phoneNumber: payload.zipCode}};
        case REGISTER_SUCCESS:
            return {
                ...state,
                isLoggedIn: false,
                user: payload.user
            };
        case REGISTER_FAIL:
            return {
                ...state,
                isLoggedIn: false,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                user: payload.user,
            };
        case LOGIN_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                user: null,
            };
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                user: null,
            };
        default:
            return state;
    }
}

export default authWithEmailReducer;