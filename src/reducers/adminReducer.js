import {
    CHANGE_EMAIL,
    CHANGE_PASSWORD,
    CLOSE_REPORT, DELETE_REVIEW, DELETE_TICKET, DELETE_USER,
    FETCH_ADMINUSER,
    OPEN_REPORT,
    SWITCH_SECTION, UPDATE_USERINFO
} from "../actions/types";

const INTIAL_STATE = {
    numberOfMembers: 0,
    numberOfPosts: 0,
    numberOfTickets: 0,
    report: false,
    section: '',
    tickets: [
        {
            _id: "1",
            reviewId: "r1",
            reporterId: "melanie12",
            bookTitle: "How to fake your application to graduate school",
            reviewerId: "phoebe23",
            revieweeId: "harry67",
            description: "this book is teaching people how to fake their application. " +
                "Please delete this book. It's a highly unethical thing to do!!!!",
        },
        {
            _id: "2",
            reviewId: "r2",
            reporterId: "mel89",
            reviewerId: "phoebe23",
            revieweeId: "harry67",
            bookTitle: "1587, a year of no significance",
            description: "phoebe23 insulted harry67 by saying \"go to hell, you suck! \"" +
                "I think this is highly inappropriate. Please warn phoebe23."
        },
        {
            _id: "3",
            reviewId: "r3",
            reporterId: "april419",
            reviewerId: "phoebe23",
            revieweeId: "harry67",
            bookTitle: "Python for Dummies",
            description: "phoebe23 said the book owner is an idiot for no reason. Please" +
                " ban phoebe23",
        }
    ],
    users: [
        {
            _id: "u1",
            username: "april",
            status: "ACTIVE"
        },
        {
            _id: "u2",
            username: "phoebe23",
            status: "INACTIVE"
        },
        {
            _id: "u3",
            username: "melanie89",
            status: "ACTIVE"
        }
    ],
    adminUser: {
        email: "admin@bbc.com",
        password: "fdsafsdfsfdf"
    }
};

const adminReducer = (state = INTIAL_STATE, action) => {
    switch (action.type) {
        case OPEN_REPORT:
            return {...state, report: true};
        case CLOSE_REPORT:
            return {...state, report: false};
        case SWITCH_SECTION:
            return {...state, section: action.section}
        case CHANGE_EMAIL:
            return {
                ...state,
                adminUser: action.adminUser
            }
        case CHANGE_PASSWORD:
            return {
                ...state,
                adminUser: action.adminUser
            }
        case FETCH_ADMINUSER:
            return {
                ...state,
                adminUser: action.adminUser
            }
        case UPDATE_USERINFO:
            return {
                ...state,
                adminUser: action.adminUser
            }
        case DELETE_TICKET:
            return {
                ...state,
                tickets: state.tickets.filter(ticket => ticket._id !== action.tid)
            }
        case DELETE_USER:
            return {
                ...state,
                users: state.users.filter(user => user._id !== action.uid)
            }
        default:
            return state;
    }
};

export default adminReducer
