import {
    CHANGE_EMAIL,
    CHANGE_PASSWORD,
    CLOSE_REPORT,
    DELETE_TICKET,
    DELETE_USER,
    OPEN_REPORT,
    SWITCH_SECTION,
    UPDATE_USERINFO
} from "./types";

export const closeReport = () => {
    return {
        type: CLOSE_REPORT
    };
};

export const openReport = () => {
    return {
        type: OPEN_REPORT
    };
};

export const switchSections = (section) => {
    return  {
        type: SWITCH_SECTION,
        section: section
    };
};

export const changeAdminEmail = (adminUser) => {
    // TODO: send POST to server
    return {
        type: CHANGE_EMAIL,
        adminUser: adminUser
    }
}

export const changeAdminPassword = (adminUser) => {
    // TODO: send POST to server,
    //  any special treatment needed for password?
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

//TODO
export const fetchMemberNumber = () => {}
export const fetchPostingNumber = () => {}
export const fetchTicketNumber = () => {}
export const fetchUserTickets = () => {}
export const fetchAdminUser = () => {}
export const fetchAllUsers = () => {}


