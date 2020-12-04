import {
    DELETE_TICKET,
    DELETE_USER,
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
        type: UPDATE_ADMININFO,
        adminUser: adminUser
    }
}



//TODO
export const fetchMemberNumber = () => {}
export const fetchPostingNumber = () => {}
export const fetchTicketNumber = () => {}
export const fetchUserTickets = () => {}
export const fetchAdminUser = () => {}
export const fetchAllUsers = () => {}


