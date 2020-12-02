import {
    CLOSE_REPORT, CREATE_FOLLOW,
    CREATE_REVIEW, DELETE_FOLLOW,
    DELETE_POSTING, DELETE_TRANSACTION,
    OPEN_REPORT,
    SWITCH_SECTION,
    UPDATE_POSTING, UPDATE_REVIEW,
    UPDATE_TRANSACTION
} from "./types";

export const fetchUser = (uid) => {};

export const switchSection = (section) => {
    return  {
        type: SWITCH_SECTION,
        section: section
    };
}

export const closeReport = () => {
    return {
        type: CLOSE_REPORT
    };
};

export const openReport = (review) => {
    return {
        type: OPEN_REPORT,
        review: review
    };
};

export const deletePosting = (posting) => {
    //TODO: send to server and back
    return {
        type: DELETE_POSTING,
        posting
    }
}

export const updatePosting = (posting) => {
    //TODO: send to server and back
    return {
        type: UPDATE_POSTING,
        posting
    }
}

export const createNewReview = (review) => {
    //TODO: send to server and back
    return {
        type: CREATE_REVIEW,
        review
    }
}

export const updateReview = (review) => {
    //TODO: send to server and back
    return {
        type: UPDATE_REVIEW,
        review
    }
}

export const updateTransaction = (transaction) => {
    //TODO: send to server and back
    return {
        type: UPDATE_TRANSACTION,
        transaction
    }
}

export const deleteTransaction = (transaction) => {
    //TODO: send to server and back
    return {
        type: DELETE_TRANSACTION,
        transaction
    }
}

export const createFollow = (follow) => {
    //TODO: send to server and back
    return {
        type: CREATE_FOLLOW,
        follow
    }

}

export const deleteFollow = (fid) => {
    //TODO: send to server and back
    return {
        type: DELETE_FOLLOW,
        fid: fid
    }
}


//TODO, haven't set up the type and reducer for following methods

// list of book inventory objects
export const fetchBookPostingsForUser = (uid) => {}

// userId as lender userId and borrower userId, list of transactions object
export const fetchTransactionsForUser = (uid) => {}

// the user as the reviewee, list of review object
export const fetchReviewsUserReceived = (uid) => {}

// the user as the reviewee, list of review object
export const fetchReviewsUserGave = (uid) => {}

// the user as the follower, list of follows object
export const fetchFollowings = (uid) => {}

// the user as the followee, list of follows object
export const fetchFollowers = (uid) => {}


