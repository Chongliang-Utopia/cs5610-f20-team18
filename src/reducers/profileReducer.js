import {
    CLOSE_REPORT,
    CREATE_REVIEW,
    DELETE_POSTING,
    OPEN_REPORT,
    SWITCH_SECTION,
    UPDATE_POSTING,
    UPDATE_REVIEW,
    UPDATE_TRANSACTION
} from "../actions/types";

const INTIAL_STATE = {
    user: {
        _id: "user1",
        username: "Tom Riddle",
        email: "tom.riddle@gmail.com",
        city: "San Jose",
        state: "California",
        zipCode: "94040",
        phoneNumber: "6507989687",
        signature: "Huge Harry Potter fan!",
        rating: 4
    },
    authenticated: true,
    section: "",
    report: false,
    selectedReview: {},
    bookPostings: [
        {
            _id: "b1",
            bookTitle: "Harry Potter and the chamber of Secrets",
            bookCondition: "Good",
            userId: "user1",
            src: "/books/book1.webp",
            bookStatus: "lent"
        },
        {
            _id: "b2",
            bookTitle: "Harry Potter and the Goblet of Fire",
            bookCondition: "Like New",
            userId: "user1",
            src: "/books/book2.webp",
            bookStatus: "available"
        }
    ],
    transactions: [
        {
            _id: "ts1",
            lenderId: "user1",
            lender: {
                _id: "user1",
                username: "Tom Riddle",
                rating: 4
            },
            borrowerId: "user22",
            borrower: {
                username: "LazyReader54",
                rating: 1,
                city: "MTV"
            },
            startDate: "",
            endDate: "",
            transactionTime: "11-13-2020",
            bookTitle:"harry potter",
            status: "pending"
        },
        {
            _id: "ts12",
            lenderId: "user1",
            lender: {
                _id: "user1",
                username: "Tom Riddle",
                rating: 4
            },
            borrowerId: "user22",
            borrower: {
                username: "LazyReader54",
                rating: 1,
                city: "MTV"
            },
            startDate: "11-16-2020",
            endDate: "12-16-2020",
            transactionTime: "11-13-2020",
            bookTitle:"computer science rocks",
            status: "approved"
        },
        {
            _id: "ts2",
            lenderId: "user33",
            lender: {
                _id: "user33",
                username: "WoloaHope",
                rating: 4,
                city: "MTV"

            },
            borrowerId: "user1",
            borrower: {
                username: "Tom Riddle",
                rating: 4
            },
            startDate: "11-16-2020",
            endDate: "12-16-2020",
            transactionTime: "11-13-2020",
            bookTitle:"1587, a year of no significance",
            status: "approved"
        },
        {
            _id: "ts3",
            lenderId: "user33",
            lender: {
                _id: "user33",
                username: "WoloaHope",
                rating: 4
            },
            borrowerId: "user1",
            borrower: {
                username: "Tom Riddle",
                rating: 4
            },
            startDate: "10-24-2020",
            endDate: "11-24-2020",
            transactionTime: "10-13-2020",
            bookTitle:"The tale of Forbidden City",
            status: "returned"
        },
        {
            _id: "ts4",
            lenderId: "user1",
            lender: {
                _id: "user1",
                username: "Tom Riddle",
                rating: 4
            },
            borrowerId: "user55",
            borrower: {
                username: "PearRepublic",
                rating: 4
            },
            startDate: "9-24-2020",
            endDate: "10-24-2020",
            transactionTime: "9-1-2020",
            bookTitle:"Love Actually",
            status: "returned"
        }


    ],
    reviewsUserReceived: [
        {
            revieweeId: "user1",
            reviewerId: "user55",
            reviewer: {
                username: "PearRepublic",
                rating: 4
            },
            isLender: true,
            transactionId: "ts4",
            transaction: {
                _id: "ts4",
                lenderId: "user1",
                lender: {
                    _id: "user1",
                    username: "Tom Riddle",
                    rating: 4
                },
                borrowerId: "user55",
                borrower: {
                    username: "PearRepublic",
                    rating: 4
                },
                startDate: "9-24-2020",
                endDate: "10-24-2020",
                transactionTime: "9-1-2020",
                bookTitle:"Love Actually",
                status: "returned"
            },
            rating: 4,
            comments: "This book is not in good condition at all. The owner should take good care of his/her books!!! I would" +
                "not borrow from this lender ever again!!!",
            date: "10-26-2020"
        },
        {
            revieweeId: "user1",
            reviewerId: "user33",
            reviewer: {
                _id: "user33",
                username: "WoloaHope",
                rating: 4
            },
            isLender: false,
            transactionId: "ts3",
            transaction: {
                _id: "ts3",
                lenderId: "user33",
                lender: {
                    _id: "user33",
                    username: "WoloaHope",
                    rating: 4
                },
                borrowerId: "user1",
                borrower: {
                    username: "Tom Riddle",
                    rating: 4
                },
                startDate: "10-24-2020",
                endDate: "11-24-2020",
                transactionTime: "10-13-2020",
                bookTitle:"The tale of Forbidden City",
                status: "returned"
            },
            rating: 1,
            comments: "This borrower is terrible",
            date: "10-26-2020"
        },
    ],
    reviewsUserGave: [
        {
            revieweeId: "user55",
            reviewee: {
                username: "PearRepublic",
                rating: 4
            },
            isLender: true,
            transactionId: "ts4",
            transaction: {
                _id: "ts4",
                lenderId: "user1",
                lender: {
                    _id: "user1",
                    username: "Tom Riddle",
                    rating: 4
                },
                borrowerId: "user55",
                borrower: {
                    username: "PearRepublic",
                    rating: 4
                },
                startDate: "9-24-2020",
                endDate: "10-24-2020",
                transactionTime: "9-1-2020",
                bookTitle:"Love Actually",
                status: "returned"
            },
            rating: 4,
            comments: "This borrower is terrible",
            date: "10-26-2020"
        },
        {
            revieweeId: "user33",
            reviewee: {
                _id: "user33",
                username: "WoloaHope",
                rating: 4
            },
            isLender: false,
            transactionId: "ts3",
            transaction: {
                _id: "ts3",
                lenderId: "user33",
                lender: {
                    _id: "user33",
                    username: "WoloaHope",
                    rating: 4
                },
                borrowerId: "user1",
                borrower: {
                    username: "Tom Riddle",
                    rating: 4
                },
                startDate: "10-24-2020",
                endDate: "11-24-2020",
                transactionTime: "10-13-2020",
                bookTitle:"The tale of Forbidden City",
                status: "returned"
            },
            rating: 1,
            comments: "This lender is terrible",
            date: "10-26-2020"
        },
    ],
    follows: [
        {
            _id: "f1",
            followerId: "user1",
            follower: {
                username: "Tom Riddle",
                rating: 4
            },
            followeeId: "user33",
            followee: {
                _id: "user33",
                username: "WoloaHope",
                rating: 4
            }
        },
        {
            _id: "f2",
            followerId: "user55",
            follower: {
                username: "PearRepublic",
                rating: 4
            },
            followeeId: "user1",
            followee: {
                username: "Tom Riddle",
                rating: 4
            }
        }
    ]
};

const profileReducer = (state = INTIAL_STATE, action) => {
    switch (action.type) {
        case OPEN_REPORT:
            return {
                ...state,
                report: true,
                selectedReview: action.review
            };
        case CLOSE_REPORT:
            return {
                ...state,
                report: false,
                selectedReview: {}
            };
        case SWITCH_SECTION:
            return {...state, section: action.section}
        case DELETE_POSTING:
            return {
                ...state,
                bookPostings: state.bookPostings.filter(posting=>posting._id!==action.posting._id)
            }
        case UPDATE_POSTING:
            return {
                ...state,
                bookPostings: state.bookPostings.map(posting=>posting._id === action.posting._id? action.posting: posting)
            }
        case CREATE_REVIEW:
            return {
                ...state,
                reviewsUserGave: [
                    ...state.reviewsUserGave,
                    action.review
                ]
            }
        case UPDATE_TRANSACTION:
            return {
                ...state,
                transactions: state.transactions.map(transaction=>transaction._id === action.transaction._id? action.transaction: transaction)
            }
        case UPDATE_REVIEW:
            return {
                ...state,
                reviewsUserGave: state.reviewsUserGave.map(review=>review._id === action.review._id? action.review: review)
            }
        default:
            return state
    }
}

export default profileReducer
