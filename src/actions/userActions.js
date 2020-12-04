import {UPDATE_USER, ADD_TO_READING_LIST, GET_FOLLOWINGS_READING_LIST} from "./types/userTypes";
import UserService from "../services/UserService";

class UserActions {

    updateUser = (userId, user) => (dispatch) => {
        return UserService.updateUser(userId, user)
            .then(status => {
                dispatch({
                    type: UPDATE_USER,
                    payload: {user: user}
                })
            })
    }

    updateLocalUser = (user) => (dispatch) => {
        dispatch({
            type: UPDATE_USER,
            payload: {user: user}
        })
    }

    addToMyReadingList = (userId, googleBook) => (dispatch) => {
        return UserService.addToMyReadingList(userId, googleBook)
            .then(status => {
                dispatch({
                    type: ADD_TO_READING_LIST,
                    googleBook
                })
            })
    }

    getFollowingsReadingList = (userId) => (dispatch) => {
        return UserService.getFollowingsReadingList(userId)
            .then(followingsReadingList => {
                dispatch({
                    type: GET_FOLLOWINGS_READING_LIST,
                    followingsReadingList,
                })
            })
    }
}


export default new UserActions();




