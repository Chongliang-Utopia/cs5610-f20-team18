import {
    APPROVE_TRANSACTION,
    CLOSE_REPORT,
    CREATE_FOLLOW,
    DELETE_FOLLOW,
    DELETE_POSTING,
    DELETE_TRANSACTION,
    OPEN_REPORT,
    SWITCH_SECTION,
    UPDATE_POSTING,
    CREATE_REVIEW_AS_LENDER,
    CREATE_REVIEW_AS_BORROWER,
    DECLINE_TRANSACTION,
    RETURN_TRANSACTION,
    UPDATE_REVIEW,
    UPDATE_USERINFO,
    CREATE_TICKET,
    DELETE_FROMREADINGLIST,
    FETCH_USER,
    ADD_BOOK,
    FETCH_ALLPOSTINGS,
    FETCH_ALLUSERBORROWINGS,
    FETCH_ALLUSERLENDINGS,
    FETCH_REVIEWSUSERRECEIVED,
    FETCH_REVIEWSUSERGAVE,
    FETCH_USERFOLLOWINGS,
    FETCH_USERFOLLOWERS,
    FETCH_USERREADINGLIST,
    AUTHENTICATE,
    FETCH_LOGGEDINUSERFOLLOWERS,
    FETCH_LOGGEDINUSERFOLLOWINGS,
    ADD_TO_LOGGEDINUSERFOLLOWINGS,
    DELETE_FROM_LOGGEDINUSERFOLLOWINGS,
    CREATE_USERFOLLOWING, DELETE_USERFOLLOWING, CREATE_USERFOLLOWER, DELETE_USERFOLLOWER

} from "./types";
import ReportService from "../services/ReportService";
import ReviewService from "../services/ReviewService";
import bookService from "../services/bookService";
import TransactionService from "../services/TransactionService";
import FollowService from "../services/FollowService";
import UserService from "../services/UserService";

// USER
export const authenticate = (userId, authUser, isLoggedIn) => (dispatch) => {
    let authenticated = false;
    if (isLoggedIn && authUser._id === userId) {
        authenticated = true
    }
    dispatch({
        type: AUTHENTICATE,
        authenticated
    })
}
// export const fetchUser = (uid) => (dispatch) => {
//     UserService.findUserById(uid)
//         .then(user => {
//             dispatch({
//                 type: FETCH_USER,
//                 user
//             })
//         })
// };

// SECTION
export const switchSection = (section) => {
    return  {
        type: SWITCH_SECTION,
        section: section
    };
}

// REPORT TO ADMIN
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

export const createReport = (report) => (dispatch) => {
    return ReportService.createReport(report)
        .then(report => {
            dispatch({
                type: CREATE_TICKET,
                report
            })
        })
}

// Posting
export const deletePosting = (book) => (dispatch)=>{
    return bookService.deleteBook(book._id, book)
        .then(status=>{
            dispatch({
                type: DELETE_POSTING,
                book
            })
        })
        // dispatch({
        //     type: DELETE_POSTING,
        //     book
        // });
}

export const updatePosting = (posting) => (dispatch) => {
    return bookService.updateBook(posting._id, posting)
        .then(()=> {
            dispatch({
                type: UPDATE_POSTING,
                posting
            })
        })
    //     dispatch({
    //         type: UPDATE_POSTING,
    //         posting
    //     })
}

// Review
export const createReviewAsLender = (review, lending) => (dispatch) => {
    return ReviewService.createReviewAsLender(lending._id, review)
        .then(review=> {
            dispatch({
                type: CREATE_REVIEW_AS_LENDER,
                review
            })
        })
}

export const createReviewAsBorrower = (review, borrowing) => (dispatch) => {
    return ReviewService.createReviewAsBorrower(borrowing._id, review)
        .then(review=> {
            dispatch({
                type: CREATE_REVIEW_AS_BORROWER,
                review
            })
        })
}

export const updateReview = (review) => (dispatch) => {
    return ReviewService.updateReview(review._id, review)
        .then(status=> {
            dispatch({
                type: UPDATE_REVIEW,
                review
            })
        })
}

// Transaction
export const approveTransaction = (transaction) => (dispatch) => {
    return TransactionService.acceptBorrowRequest(transaction._id, transaction)
        .then(status=>{
            dispatch({
                type: APPROVE_TRANSACTION,
                transaction
            })
        })
}

export const declineTransaction = (transaction) => (dispatch) => {
    return TransactionService.declineBorrowRequest(transaction._id, transaction)
        .then(status=>{
            dispatch({
                type: DECLINE_TRANSACTION,
                transaction
            })
        })
}

export const deleteTransaction = (transaction) => (dispatch) =>{
    return TransactionService.deleteBorrowRequest(transaction._id, transaction)
        .then(status=>{
            dispatch({
                type: DELETE_TRANSACTION,
                transaction
            })
        })
}

export const finishTransaction = (transaction) => (dispatch) =>{
    return TransactionService.returnBook(transaction._id, transaction)
        .then(status=> {
            dispatch({
                type: RETURN_TRANSACTION,
                transaction
            })
        })
}

// Following
export const createUserFollowing = (following_id, uid, following_body) => (dispatch) => {
    return FollowService.createFollow(uid, following_id)
        .then(status=>{
            dispatch({
                type: CREATE_USERFOLLOWING,
                following_body
            })
        })
}

export const deleteUserFollowing = (uid, fid) => (dispatch) => {
    return FollowService.unfollow(uid, fid)
        .then(status=>{
            dispatch({
                type: DELETE_USERFOLLOWING,
                following_id: fid
            })
        })
}

export const createUserFollower = (following_id, uid, follower_body) => (dispatch) => {
    return FollowService.createFollow(uid, following_id)
        .then(status=>{
            dispatch({
                type: CREATE_USERFOLLOWER,
                follower_body
            })
        })
}

export const deleteUserFollower = (uid, fid) => (dispatch) => {
    return FollowService.unfollow(uid, fid)
        .then(status=>{
            dispatch({
                type: DELETE_USERFOLLOWER,
                follower_id: uid
            })
        })
}

export const addToLoggedInUserFollowings = (following) => (dispatch) => {
    dispatch({
        type: ADD_TO_LOGGEDINUSERFOLLOWINGS,
        following
    })
}

export const deleteFromLoggedInUserFollowings = (following) => (dispatch) => {
    dispatch({
        type: DELETE_FROM_LOGGEDINUSERFOLLOWINGS,
        following
    })
}
// Account Setting
// export const updateUserInfo = (user) => {
//     return {
//         type: UPDATE_USERINFO,
//         user
//     }
// }

// READING LIST
export const deleteFromReadingList = (uid, googleId) => (dispatch) => {
    return UserService.deleteBookFromList(uid, googleId)
        .then(status=>{
            dispatch({
                type: DELETE_FROMREADINGLIST,
                googleId: googleId
            })
        })
}

export const getReadingListForUser = (uid) => (dispatch) => {
    return UserService.getReadingListForUser(uid)
        .then(readingList => {
            dispatch({
                type: FETCH_USERREADINGLIST,
                readingList
            })
            for (let id of readingList){
                bookService.findBookById(id)
                    .then(book=>
                        dispatch({
                            type: ADD_BOOK,
                            book
                }))
        }})
}

//All FETCHES
// list of book inventory objects
export const fetchBookPostingsForUser = (uid) => (dispatch) => {
    return bookService.getAllBooksForUser(uid)
        .then(books=>{
            dispatch({
                type: FETCH_ALLPOSTINGS,
                books
            })
        })
}

// userId as lender userId and borrower userId, list of transactions object
export const fetchUserBorrowings = (uid) => (dispatch) => {
    return TransactionService.getAllUserBorrowings(uid)
        .then(borrowings=>{
            dispatch({
                type: FETCH_ALLUSERBORROWINGS,
                borrowings
            })
        })
}

export const fetchUserLendings = (uid) => (dispatch) => {
    return TransactionService.getAllUserLendings(uid)
        .then(lendings=>{
            dispatch({
                type: FETCH_ALLUSERLENDINGS,
                lendings
            })
        })
}

// the user as the reviewee, list of review object
export const fetchReviewsUserReceived = (uid) => (dispatch) => {
    return ReviewService.findReviewsUserReceived(uid)
        .then(reviews=>{
            dispatch({
                type: FETCH_REVIEWSUSERRECEIVED,
                reviews
            })
        })
}

// the user as the reviewee, list of review object
export const fetchReviewsUserGave = (uid) => (dispatch) => {
    return ReviewService.findReviewsUserGave(uid)
        .then(reviews=>{
            dispatch({
                type: FETCH_REVIEWSUSERGAVE,
                reviews
            })
        })
}

// the user as the follower, list of follows object
export const fetchFollowings = (uid) => (dispatch) => {
    return FollowService.getAllFollowings(uid)
        .then(followings=>{
            dispatch({
                type: FETCH_USERFOLLOWINGS,
                followings
            })
        })
}

// the user as the followee, list of follows object
export const fetchFollowers = (uid) => (dispatch) => {
    return FollowService.getAllFollowers(uid)
        .then(followers=>{
            dispatch({
                type: FETCH_USERFOLLOWERS,
                followers
            })
        })
}

export const fetchLoggedInUserFollowings = (uid) => (dispatch) => {
    return FollowService.getAllFollowings(uid)
        .then(followings=>{
            dispatch({
                type: FETCH_LOGGEDINUSERFOLLOWINGS,
                followings
            })
        })
}


