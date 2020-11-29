import {SIGN_IN, SIGN_OUT} from "../actions/types";

const INTIAL_STATE = {
    isSignedIn: null,
    userId: null,
    authInstance: null,
    user: {}
};

const authReducer = (state = INTIAL_STATE, action) => {
    switch (action.type) {
        case SIGN_IN:
            return {...state, isSignedIn: true, userId: action.authInstance.currentUser.get().getId(), authInstance: action.authInstance};
        case SIGN_OUT:
            return {...state, isSignedIn: false};
        default:
            return state;
    }
};

export default authReducer;
