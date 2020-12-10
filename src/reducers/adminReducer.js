import {
    DELETE_POSTING_FROM_ADMIN,
    DELETE_TICKET,
    FETCH_ADMINUSER, FETCH_ALLPOSTINGS, FETCH_ALLTICKETS, FETCH_ALLUSERS,
    SWITCH_SECTION,
    UPDATE_ADMININFO,
    DELETE_REVIEW, FIND_ALL_SUBSCRIPTIONS, UNSUBSCRIBE, ADD_SUBSCRIPTION
} from "../actions/types";

const INTIAL_STATE = {
    // numberOfMembers: 0,
    // numberOfPosts: 0,
    // numberOfTickets: 0,
    section: '',
    tickets: [
        {
            "_id": "5fc863d47bcd2599b85b8ed8",
            "review": {
                "rating": 0,
                "_id": "5fc863ad7bcd2599b85b8ed7",
                "reviewer": {
                    "_id": "5fc832970dd35f96292e58ca",
                    "username": "b"
                },
                "reviewee": {
                    "_id": "5fc82fd8afbc1294a5503741",
                    "username": "a"
                },
                "book": {
                    "isAvailable": true,
                    "author": [],
                    "_id": "5fc863607bcd2599b85b8ed5",
                    "user": "5fc82fd8afbc1294a5503741",
                    "googleBookId": "googleBookId",
                    "title": "a's lending book1",
                    "__v": 0
                },
                "reviewerIsLender": false,
                "comments": "hahaha",
                "createdAt": "2020-12-03T04:03:57.270Z",
                "updatedAt": "2020-12-03T04:03:57.270Z",
                "__v": 0
            },
            "reporter": {
                "_id": "5fc82fd8afbc1294a5503741",
                "username": "a"
            },
            "reason": "I am reporting this bad review",
            "createdAt": "2020-12-03T04:04:36.338Z",
            "updatedAt": "2020-12-03T04:04:36.338Z",
            "__v": 0
        },
    ],
    users: [
        {
            _id: "u1",
            username: "april",
        },
        {
            _id: "u2",
            username: "phoebe23",
        },
        {
            _id: "u3",
            username: "melanie89",
        }
    ],
    adminUser: {
        email: "admin@bbc.com",
        password: "fdsafsdfsfdf"
    },
    // // AllPostings store a list of googleBooksId
    // AllPostings: [
    //     "ECvxEpH7VZYC",
    //     "f280CwAAQBAJ"
    // ],
    // AllBooks store list of books generated by googleBooksId
    AllBooks: [
        {
            "isAvailable": true,
            "author": [
                "Margaret Atwood"
            ],
            "isActive": true,
            "_id": "5fc3f66b91b3aa84d9e9f9e7",
            "user": {
                "rating": 4.25,
                "_id": "5fc2c4cc67a1ea31cc0850af",
                "username": "fad",
                "city": "",
                "state": ""
            },
            "googleBookId": "ECvxEpH7VZYC",
            "title": "The Handmaid's Tale",
            "picture": "http://books.google.com/books/content?id=ECvxEpH7VZYC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE72FajBMJYgCNCTrcL1phfb3TTAS7ZdYkroMZdZH5g9tyP_tBtIzohJOBKnUTv4SL-NEPmQlJEqZp0RUoyaf4LNnoiihNmgnp5klWAO3vnm8UUkrpFP0OiqlyX4GF-XRao_nIi1z&source=gbs_api",
            "rating": 4,
            "description": "<b>An instant classic and eerily prescient cultural phenomenon, from “the patron saint of feminist dystopian fiction” (<i>New York Times</i>). Now an award-winning Hulu series starring Elizabeth Moss.</b>",
            "condition": "LIKE_NEW"
        }
        ,
        {
            "isAvailable": true,
            "author": [
                "J.K. Rowling"
            ],
            "isActive": true,
            "_id": "5fc854687c627f07fd275260",
            "user": {
                "rating": 4.25,
                "_id": "5fc2c4cc67a1ea31cc0850af",
                "username": "fad",
                "city": "",
                "state": ""
            },
            "googleBookId": "f280CwAAQBAJ",
            "title": "Harry Potter: The Complete Collection (1-7)",
            "picture": "http://books.google.com/books/content?id=f280CwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE71acOWBSMUg424KwYb2VMrlM28WJKS6VrJ0zk-IYm6v9Z4ru4lNMY18O200PEiAO77ieOW5jgyLgrQUgpECeXnKD655JK7ROh0UWnz-Vr9yyOO4mSJJrCuPU7tAEgxT00zJEGbz&source=gbs_api",
            "rating": 4.5,
            "description": "All seven eBooks in the multi-award winning, internationally bestselling Harry Potter series, available as one download with stunning cover art by Olly Moss. Enjoy the stories that have captured the imagination of millions worldwide.",
            "condition": "ACCEPTABLE",
        }
    ],
    subscriptions: []
};

const adminReducer = (state = INTIAL_STATE, action) => {
    switch (action.type) {
        case SWITCH_SECTION:
            return {...state, section: action.section}
        case FETCH_ALLUSERS:
            return {...state, users: action.users}
        // Admin Info from here.
        case FETCH_ADMINUSER:
            return {
                ...state,
                adminUser: action.adminUser
            }
        case UPDATE_ADMININFO:
            return {
                ...state,
                adminUser: action.adminUser
            }
        // Ticket from here...
        case DELETE_TICKET:
            return {
                ...state,
                tickets: state.tickets.filter(ticket => ticket._id !== action.tid)
            }
        case FETCH_ALLTICKETS:
            return {
                ...state,
                tickets: action.tickets
            }
        // Book posting from here...
        case FETCH_ALLPOSTINGS:
            return {
                ...state,
                AllBooks: action.books
            }
        case DELETE_POSTING_FROM_ADMIN:
            let updatedBook = action.book;
            updatedBook.isActive = false;
            return {
                ...state,
                AllBooks: state.AllBooks.filter(book=>book._id!==action.book._id)
            }
        case ADD_SUBSCRIPTION:
            return {
                ...state,
                subscriptions: [...state.subscriptions, action.newSubscription]
            }
        case FIND_ALL_SUBSCRIPTIONS:
            return {
                ...state,
                subscriptions: action.subscriptions
            }
        case UNSUBSCRIBE:
            return {
                ...state,
                subscriptions: state.subscriptions.filter(subscription => subscription._id !== action.subscriptionId)
            }
        default:
            return state;
    }
};

export default adminReducer
