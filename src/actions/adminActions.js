import {
    DELETE_POSTING_FROM_ADMIN,
    DELETE_TICKET,
    FETCH_ADMINUSER, FETCH_ALLPOSTINGS, FETCH_ALLTICKETS, FETCH_ALLUSERS,
    SWITCH_SECTION,
    UPDATE_ADMININFO,
    DELETE_REVIEW, FIND_ALL_SUBSCRIPTIONS, UNSUBSCRIBE
} from "./types";

import ReportService from '../services/ReportService'
import UserService from '../services/UserService'
import BookService from '../services/bookService'
import ReviewService from '../services/ReviewService'
import EmailSubscriptionService from "../services/EmailSubscriptionService";

export const switchSections = (section) => {
    return  {
        type: SWITCH_SECTION,
        section: section
    };
};

export const deleteTicket = (tid) => (dispatch) => {
    // TODO: delete request to server then back
    ReportService.deleteReport(tid)
        .then(status => dispatch({
            type: DELETE_TICKET,
            tid: tid
        }))
    // return  {
    //     type: DELETE_TICKET,
    //     tid: tid
    // }
}

export const deleteReview = (rid) => (dispatch) => {
    // TODO: call service's delete review, no need going to reducer
    console.log(rid)
    ReviewService.deleteReview(rid)
        .then(status => {}
        )
}

export const deletePosting = (book) => (dispatch) => {
    BookService.deleteBook(book._id)
        .then(status => dispatch({
            type: DELETE_POSTING_FROM_ADMIN,
            book
        }))

    // return {
    //     type: DELETE_POSTING_FROM_ADMIN,
    //     book
    // }
}
export const updateAdminInfo = (adminUser) => {
    // TODO: send data to server and then back
    return {
        type: UPDATE_ADMININFO,
        adminUser: adminUser
    }
}


//TODO: add service call
export const fetchUserTickets = () => (dispatch) => {
    ReportService.getAllReports().then(tickets => {
        dispatch({
            type: FETCH_ALLTICKETS,
            tickets
        })
    })
    //service.getAllTickets.then(tickets=>
    // return {
    //  type: FETCH_ALLTICKETS,
    //  tickets
    // })
}
export const fetchAdminUser = (currentUser) => {
    //service.getUser.then(adminUser=>
    return {
     type: FETCH_ADMINUSER,
     adminUser: currentUser
    }
}
export const fetchAllUsers = () => (dispatch) => {
    UserService.findAllUsers().then(users => {
        dispatch({
            type: FETCH_ALLUSERS,
            users
        })
    })
    //service.getAllUsers.then(users=>
    // return {
    //   type: FETCH_ALLUSERS
    //   users
    // }
}
export const fetchAllPostings = () => (dispatch) => {
    BookService.getAllBookPostings().then(books => {
        dispatch({
            type: FETCH_ALLPOSTINGS,
            books
        })
    })
}
    //service.getAllPostings.then(postings=>
    //  service.getBooksByGoogleId.then(books=>
    //      return {
    //          type: FETCH_ALLPOSTINGS
    //          books
    //      }

export const findAllSubscriptions = () => (dispatch) => {
    EmailSubscriptionService.findAllSubscriptions()
        .then(subscriptions => {
            dispatch ({
                type: FIND_ALL_SUBSCRIPTIONS,
                subscriptions
            })
        })
}

export const unsubscribe = (subscriptionId) => (dispatch) => {
    EmailSubscriptionService.unSubscribe(subscriptionId)
        .then(status => {
            dispatch({
                type: UNSUBSCRIBE,
                subscriptionId
            })
        })
}