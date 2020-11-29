import {RESET_PASSWORD, UPDATE_USER} from "./types/userTypes";
import UserService from "../services/UserService";

export const resetPassword = (userId, user) => (dispatch) => {
    return UserService.resetPassword(userId, user)
}

export const updateUser = (userId, user) => (dispatch) => {
    return UserService.updateUser(userId, user)
        .then(status => {
            dispatch({
                type: UPDATE_USER,
                payload: {user: user}
            })
        })
}

export const updateLocalUser = (user) => (dispatch) => {
    dispatch({
        type: UPDATE_USER,
        payload: {user: user}
    })
}


