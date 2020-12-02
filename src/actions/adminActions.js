import {
    CHANGE_EMAIL,
    CHANGE_PASSWORD,
    CREATE_TICKET,
    DELETE_TICKET,
    DELETE_USER,
    SWITCH_SECTION,
    UPDATE_USERINFO
} from "./types";


export const switchSections = (section) => {
    return  {
        type: SWITCH_SECTION,
        section: section
    };
};

export const changeAdminEmail = (adminUser) => {
    return {
        type: CHANGE_EMAIL,
        adminUser: adminUser
    }
}

export const changeAdminPassword = (adminUser) => {
    return {
        type: CHANGE_PASSWORD,
        adminUser: adminUser
    }
}

export const deleteTicket = (tid) => {
    // TODO: delete request to server then back
    return  {
        type: DELETE_TICKET,
        tid: tid
    }
}

export const deleteUser = (uid) => {
    // TODO: delete request to server then back
    return  {
        type: DELETE_USER,
        uid: uid
    }
}

export const updateAdminInfo = (adminUser) => {
    // TODO: send data to server and then back
    return {
        type: UPDATE_USERINFO,
        adminUser: adminUser
    }
}

// send to service and create a new user ticket
export const createTicket = (newTicket) => {
    // TODO: send data to server and then back
    return {
        type: CREATE_TICKET,
        newTicket: newTicket
    }
}


//TODO
export const fetchMemberNumber = () => {}
export const fetchPostingNumber = () => {}
export const fetchTicketNumber = () => {}
export const fetchUserTickets = () => {}
export const fetchAdminUser = () => {}
export const fetchAllUsers = () => {}


