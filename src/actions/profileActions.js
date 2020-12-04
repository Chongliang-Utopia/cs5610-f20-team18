import {
    APPROVE_TRANSACTION,
    CLOSE_REPORT,
    CREATE_FOLLOW,
    DELETE_FOLLOW,
    DELETE_POSTING,
    DELETE_TRANSACTION,
    OPEN_REPORT,
    SWITCH_SECTION,
    UPDATE_POSTING, CREATE_REVIEW_AS_LENDER,
    CREATE_REVIEW_AS_BORROWER,
    DECLINE_TRANSACTION, RETURN_TRANSACTION,
    UPDATE_REVIEW, UPDATE_ADMININFO, UPDATE_USERINFO
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

// Posting
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

// Review
export const createReviewAsLender = (review, lending) => {
    //TODO: send to server and back, call need lending id
    return {
        type: CREATE_REVIEW_AS_LENDER,
        review
    }
}

export const createReviewAsBorrower = (review, borrowing) => {
    //TODO: call need borrowing id
    return {
        type: CREATE_REVIEW_AS_BORROWER,
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

// Transaction
export const approveTransaction = (transaction) => {
    //TODO: send to server and back
    return {
        type: APPROVE_TRANSACTION,
        transaction
    }
}

export const declineTransaction = (transaction) => {
    return {
        type: DECLINE_TRANSACTION,
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

export const finishTransaction = (transaction) => {
    return {
        type: RETURN_TRANSACTION,
        transaction
    }
}

// Following
export const createFollow = (following_id, uid, following_body) => {
    //TODO: send to server and back
    return {
        type: CREATE_FOLLOW,
        following_body
    }

}

export const deleteFollow = (uid, fid) => {
    //TODO: send to server and back, need user id
    return {
        type: DELETE_FOLLOW,
        fid: fid
    }
}

// Account Setting
export const updateUserInfo = (user) => {
    //TODO: call server
    return {
        type: UPDATE_USERINFO,
        user
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


