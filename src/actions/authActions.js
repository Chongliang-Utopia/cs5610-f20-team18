import {SIGN_IN, SIGN_OUT} from "./types";

export const signIn = (authInstance) => {
    return {
        type: SIGN_IN,
        authInstance
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};

