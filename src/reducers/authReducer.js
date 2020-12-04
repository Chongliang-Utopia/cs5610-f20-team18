import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT, GOOGLE_REGISTER,
} from "../actions/types/authTypes";
import {UPDATE_USER} from "../actions/types/userTypes";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = user? {isLoggedIn: true, user: user} : {isLoggedIn: false, user: {}};

const authReducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case UPDATE_USER:
            return {...state , user:{...state.user, ...payload.user}}
        case REGISTER_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
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
        case GOOGLE_REGISTER:
            return {
                ...state,
                isLoggedIn: true,
                user: payload.user
            }
        default:
            return state;
    }
}

export default authReducer;
