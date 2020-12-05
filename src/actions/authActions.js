import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_MESSAGE, GOOGLE_REGISTER, RECORD_LOCATION,
} from "./types/authTypes";
import history from "../history"

import AuthService from "../services/AuthService";


export const register = (email, password) => (dispatch) => {
    return AuthService.register(email, password).then(
        (data) => {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: {user: data}
            });

            history.push("/signupprofile")

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

export const loginWithGoogle = (idToken) => (dispatch) => {
    return AuthService.loginWithGoogle(idToken).then(
        (data) => {
            if (data.message === "registered") {
                dispatch({
                    type: GOOGLE_REGISTER,
                    payload: {user: data.user},
                })

            } else {
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: {user: data.user},
                });

            }
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

export const requestLoginWithThunk = (location) => (dispatch) => {
    dispatch({
        type: RECORD_LOCATION,
        location
    })
    history.push("/login")
}

export const requestLogin = (dispatch, location) => {
    dispatch({
        type: RECORD_LOCATION,
        location
    })
    history.push("/login")
}



