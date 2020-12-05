import {
    DELETE_POSTING_FROM_ADMIN,
    DELETE_TICKET,
    SWITCH_SECTION, UPDATE_ADMININFO,
} from "./types";


export const switchSections = (section) => {
    return  {
        type: SWITCH_SECTION,
        section: section
    };
};

export const deleteTicket = (tid) => {
    // TODO: delete request to server then back
    return  {
        type: DELETE_TICKET,
        tid: tid
    }
}

export const deleteReview = (rid) => {
    // TODO: call service's delete review, no need going to reducer
}

export const deletePosting = (book) => {
    return {
        type: DELETE_POSTING_FROM_ADMIN,
        book
    }
}
export const updateAdminInfo = (adminUser) => {
    // TODO: send data to server and then back
    return {
        type: UPDATE_ADMININFO,
        adminUser: adminUser
    }
}


//TODO: add service call
export const fetchUserTickets = () => {
    //service.getAllTickets.then(tickets=>
    // return {
    //  type: FETCH_ALLTICKETS,
    //  tickets
    // })
}
export const fetchAdminUser = () => {
    //service.getUser.then(adminUser=>
    // return {
    //  type: FETCH_ADMINUSER,
    //  adminUser
    // })
}
export const fetchAllUsers = () => {
    //service.getAllUsers.then(users=>
    // return {
    //   type: FETCH_ALLUSERS
    //   users
    // }
}
export const fetchAllPostings = () => {}
    //service.getAllPostings.then(postings=>
    //  service.getBooksByGoogleId.then(books=>
    //      return {
    //          type: FETCH_ALLPOSTINGS
    //          books
    //      }
