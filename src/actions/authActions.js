import {SIGN_IN, SIGN_OUT, SIGN_UP_WITH_EMAIL} from "./types";

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

export const signUpWithEmail = (user) => {
    return {
        type: SIGN_UP_WITH_EMAIL,
        user
    }

}


