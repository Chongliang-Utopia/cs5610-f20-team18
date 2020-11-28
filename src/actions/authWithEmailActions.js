import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_MESSAGE, REGISTER_STEP_ONE, REGISTER_STEP_TWO,
} from "./types/authTypes";
import history from "../history"

import AuthService from "../services/AuthService";
import UserService from "../services/UserService";

export const register = (email, password) => (dispatch) => {
    return AuthService.register(email, password).then(
        (response) => {
            dispatch({
                type: REGISTER_SUCCESS,
            });

            history.push("/usersignupprofile")

            dispatch({
                type: SET_MESSAGE,
                payload: response.data.message,
            });

            return Promise.resolve();
        },
        (error) => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            dispatch({
                type: REGISTER_FAIL,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });

            return Promise.reject();
        }
    );
};

export const login = (email, password) => (dispatch) => {
    return AuthService.login(email, password).then(
        (data) => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: {user: data},
            });

            return Promise.resolve();
        },
        (error) => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            dispatch({
                type: LOGIN_FAIL,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });

            return Promise.reject();
        }
    );
};

export const logout = () => (dispatch) => {
    AuthService.logout();

    dispatch({
        type: LOGOUT,
    });
};

export const registerStepOne = (userId, user) => (dispatch) => {
    return UserService.updateUser(userId, user)
        .then(status => {
            history.push("/usersignupaddress")
            dispatch ({
                type: REGISTER_STEP_ONE,
                payload: user
            })
        })
}

export const registerStepTwo = (userId, user) => (dispatch) => {
    return UserService.updateUser(userId, user)
        .then(status => {
            history.push("/")
            dispatch ({
                type: REGISTER_STEP_TWO,
                payload: user
            })
        })
}

export default {
    register,
    login,
    logout
}