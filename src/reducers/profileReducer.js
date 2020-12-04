import {
    CLOSE_REPORT,
    CREATE_FOLLOW,
    DELETE_FOLLOW,
    DELETE_POSTING,
    DELETE_TRANSACTION,
    OPEN_REPORT,
    SWITCH_SECTION,
    UPDATE_POSTING,
    UPDATE_REVIEW,
    APPROVE_TRANSACTION,
    DECLINE_TRANSACTION,
    RETURN_TRANSACTION,
    CREATE_REVIEW_AS_LENDER,
    CREATE_REVIEW_AS_BORROWER,
    UPDATE_USERINFO,
    DELETE_FROMREADINGLIST
} from "../actions/types";
import {ADD_TO_READING_LIST, GET_FOLLOWINGS_READING_LIST} from "../actions/types/userTypes";
import {LOGOUT} from "../actions/types/authTypes";

const INTIAL_STATE = {
    user:  {
        "rating": 0,
        "numOfReviews": 0,
        "_id": "5fc82fd8afbc1294a5503741",
        "city": "SF",
        "profilePicture": "url",
        "signature": "hello",
        "state": "CA",
        "username": "a",
        "email": "a@bbc.com",
        "password": "afdsafdsffa"
    },
    authenticated: true,
    section: "",
    report: false,
    selectedReview: {},
    bookPostings: [
        {
            "isAvailable": true,
            "author": [
                "Margaret Atwood"
            ],
            "isActive": true,
            "_id": "5fc3f66b91b3aa84d9e9f9e7",
            "user": "5fc82fd8afbc1294a5503741",
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
            "user": "5fc82fd8afbc1294a5503741",
            "googleBookId": "f280CwAAQBAJ",
            "title": "Harry Potter: The Complete Collection (1-7)",
            "picture": "http://books.google.com/books/content?id=f280CwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE71acOWBSMUg424KwYb2VMrlM28WJKS6VrJ0zk-IYm6v9Z4ru4lNMY18O200PEiAO77ieOW5jgyLgrQUgpECeXnKD655JK7ROh0UWnz-Vr9yyOO4mSJJrCuPU7tAEgxT00zJEGbz&source=gbs_api",
            "rating": 4.5,
            "description": "All seven eBooks in the multi-award winning, internationally bestselling Harry Potter series, available as one download with stunning cover art by Olly Moss. Enjoy the stories that have captured the imagination of millions worldwide.",
            "condition": "ACCEPTABLE",
        }

    ],
    UserBorrowings: [
        {
            "lenderReview": "5fc864b1fce6bf0e672cb250",
            "borrowerReview": {
                "rating": 4.5,
                "_id": "5fc860aa00778d0e030fde20",
                "reviewer": "5fc82fd8afbc1294a5503741",
                "reviewee": "5fc2da3767a1ea31cc0850b3",
                "book": "5fc45bebd09b89aa95f9c445",
                "comments": "This book is great",
                "reviewerIsLender": false,
                "createdAt": "2020-12-03T03:51:06.895Z",
                "updatedAt": "2020-12-03T03:51:06.895Z",
                "__v": 0
            },
            "_id": "1",
            "lender": {
                "rating": 4.083333333333333,
                "_id": "5fc2da3767a1ea31cc0850b3",
                "username": "fadf",
                "city": "fdfda",
                "state": "Arizona"
            },
            "borrower": "5fc82fd8afbc1294a5503741",
            "book": {
                "isAvailable": true,
                "author": [
                    "J.K. Rowling"
                ],
                "isActive": true,
                "_id": "5fc45bebd09b89aa95f9c445",
                "user": "5fc2da3767a1ea31cc0850b3",
                "googleBookId": "f280CwAAQBAJ",
                "title": "Harry Potter: The Complete Collection (1-7)",
                "picture": "http://books.google.com/books/content?id=f280CwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE71acOWBSMUg424KwYb2VMrlM28WJKS6VrJ0zk-IYm6v9Z4ru4lNMY18O200PEiAO77ieOW5jgyLgrQUgpECeXnKD655JK7ROh0UWnz-Vr9yyOO4mSJJrCuPU7tAEgxT00zJEGbz&source=gbs_api",
                "rating": 4.5,
                "description": "All seven eBooks in the multi-award winning, internationally bestselling Harry Potter series, available as one download with stunning cover art by Olly Moss. Enjoy the stories that have captured the imagination of millions worldwide.",
                "condition": "ACCEPTABLE",
                "__v": 0
            },
            "startDate": "2020-11-29T00:00:00.000Z",
            "endDate": "2021-01-29T00:00:00.000Z",
            "transactionDate": "2020-11-29T00:00:00.000Z",
            "status": "DECLINED",
            "__v": 0,
            "createdAt": "2020-12-03T04:08:17.493Z",
            "updatedAt": "2020-12-03T03:51:06.895Z",
        },
        {
            "lenderReview": "5fc864b1fce6bf0e672cb250",
            "borrowerReview": {
                "rating": 4.5,
                "_id": "5fc860aa00778d0e030fde20",
                "reviewer": "5fc82fd8afbc1294a5503741",
                "reviewee": "5fc2da3767a1ea31cc0850b3",
                "book": "5fc45bebd09b89aa95f9c445",
                "comments": "This book is great",
                "reviewerIsLender": false,
                "createdAt": "2020-12-03T03:51:06.895Z",
                "updatedAt": "2020-12-03T03:51:06.895Z",
                "__v": 0
            },
            "_id": "2",
            "lender": {
                "rating": 4.083333333333333,
                "_id": "5fc2da3767a1ea31cc0850b3",
                "username": "fadf",
                "city": "fdfda",
                "state": "Arizona"
            },
            "borrower": "5fc82fd8afbc1294a5503741",
            "book": {
                "isAvailable": true,
                "author": [
                    "J.K. Rowling"
                ],
                "isActive": true,
                "_id": "5fc45bebd09b89aa95f9c445",
                "user": "5fc2da3767a1ea31cc0850b3",
                "googleBookId": "f280CwAAQBAJ",
                "title": "Harry Potter: The Complete Collection (1-7)",
                "picture": "http://books.google.com/books/content?id=f280CwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE71acOWBSMUg424KwYb2VMrlM28WJKS6VrJ0zk-IYm6v9Z4ru4lNMY18O200PEiAO77ieOW5jgyLgrQUgpECeXnKD655JK7ROh0UWnz-Vr9yyOO4mSJJrCuPU7tAEgxT00zJEGbz&source=gbs_api",
                "rating": 4.5,
                "description": "All seven eBooks in the multi-award winning, internationally bestselling Harry Potter series, available as one download with stunning cover art by Olly Moss. Enjoy the stories that have captured the imagination of millions worldwide.",
                "condition": "ACCEPTABLE",
                "__v": 0
            },
            "startDate": "2020-11-29T00:00:00.000Z",
            "endDate": "2021-01-29T00:00:00.000Z",
            "transactionDate": "2020-11-29T00:00:00.000Z",
            "status": "PENDING",
            "__v": 0,
            "createdAt": "2020-12-03T04:08:17.493Z",
            "updatedAt": "2020-12-03T03:51:06.895Z",
        },
        {
            "lenderReview": "5fc864b1fce6bf0e672cb250",
            "borrowerReview": {
                "rating": 4.5,
                "_id": "5fc860aa00778d0e030fde20",
                "reviewer": "5fc82fd8afbc1294a5503741",
                "reviewee": "5fc2da3767a1ea31cc0850b3",
                "book": "5fc45bebd09b89aa95f9c445",
                "comments": "This book is great",
                "reviewerIsLender": false,
                "createdAt": "2020-12-03T03:51:06.895Z",
                "updatedAt": "2020-12-03T03:51:06.895Z",
                "__v": 0
            },
            "_id": "3",
            "lender": {
                "rating": 4.083333333333333,
                "_id": "5fc2da3767a1ea31cc0850b3",
                "username": "fadf",
                "city": "fdfda",
                "state": "Arizona"
            },
            "borrower": "5fc82fd8afbc1294a5503741",
            "book": {
                "isAvailable": true,
                "author": [
                    "J.K. Rowling"
                ],
                "isActive": true,
                "_id": "5fc45bebd09b89aa95f9c445",
                "user": "5fc2da3767a1ea31cc0850b3",
                "googleBookId": "f280CwAAQBAJ",
                "title": "Harry Potter: The Complete Collection (1-7)",
                "picture": "http://books.google.com/books/content?id=f280CwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE71acOWBSMUg424KwYb2VMrlM28WJKS6VrJ0zk-IYm6v9Z4ru4lNMY18O200PEiAO77ieOW5jgyLgrQUgpECeXnKD655JK7ROh0UWnz-Vr9yyOO4mSJJrCuPU7tAEgxT00zJEGbz&source=gbs_api",
                "rating": 4.5,
                "description": "All seven eBooks in the multi-award winning, internationally bestselling Harry Potter series, available as one download with stunning cover art by Olly Moss. Enjoy the stories that have captured the imagination of millions worldwide.",
                "condition": "ACCEPTABLE",
                "__v": 0
            },
            "startDate": "2020-11-29T00:00:00.000Z",
            "endDate": "2021-01-29T00:00:00.000Z",
            "transactionDate": "2020-11-29T00:00:00.000Z",
            "status": "APPROVED",
            "__v": 0,
            "createdAt": "2020-12-03T04:08:17.493Z",
            "updatedAt": "2020-12-03T03:51:06.895Z",
        },
        {
            "lenderReview": "5fc864b1fce6bf0e672cb250",

            "_id": "4",
            "lender": {
                "rating": 4.083333333333333,
                "_id": "5fc2da3767a1ea31cc0850b3",
                "username": "fadf",
                "city": "fdfda",
                "state": "Arizona"
            },
            "borrower": "5fc82fd8afbc1294a5503741",
            "book": {
                "isAvailable": true,
                "author": [
                    "J.K. Rowling"
                ],
                "isActive": true,
                "_id": "5fc45bebd09b89aa95f9c445",
                "user": "5fc2da3767a1ea31cc0850b3",
                "googleBookId": "f280CwAAQBAJ",
                "title": "Harry Potter: The Complete Collection (1-7)",
                "picture": "http://books.google.com/books/content?id=f280CwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE71acOWBSMUg424KwYb2VMrlM28WJKS6VrJ0zk-IYm6v9Z4ru4lNMY18O200PEiAO77ieOW5jgyLgrQUgpECeXnKD655JK7ROh0UWnz-Vr9yyOO4mSJJrCuPU7tAEgxT00zJEGbz&source=gbs_api",
                "rating": 4.5,
                "description": "All seven eBooks in the multi-award winning, internationally bestselling Harry Potter series, available as one download with stunning cover art by Olly Moss. Enjoy the stories that have captured the imagination of millions worldwide.",
                "condition": "ACCEPTABLE",
                "__v": 0
            },
            "startDate": "2020-11-29T00:00:00.000Z",
            "endDate": "2021-01-29T00:00:00.000Z",
            "transactionDate": "2020-11-29T00:00:00.000Z",
            "status": "RETURNED",
            "__v": 0,
            "createdAt": "2020-12-03T04:08:17.493Z",
            "updatedAt": "2020-12-03T03:51:06.895Z",
        }
    ],
    UserLendings:
    [
        {
            "lenderReview": {
                "rating": 4,
                "_id": "5fc864b1fce6bf0e672cb250",
                "reviewer": "5fc82fd8afbc1294a5503741",
                "reviewee": "5fc2c4cc67a1ea31cc0850af",
                "book": "5fc45bebd09b89aa95f9c445",
                "comments": "He kept my book well",
                "reviewerIsLender": true,
                "createdAt": "2020-12-03T04:08:17.463Z",
                "updatedAt": "2020-12-03T04:08:17.463Z",
                "__v": 0
            },
            "borrowerReview": "5fc860aa00778d0e030fde20",
            "_id": "5",
            "lender": "5fc82fd8afbc1294a5503741",
            "borrower": {
                "rating": 4.25,
                "_id": "5fc2c4cc67a1ea31cc0850af",
                "username": "fad",
                "city": "",
                "state": ""
            },
            "book": {
                "isAvailable": true,
                "author": [
                    "J.K. Rowling"
                ],
                "isActive": true,
                "_id": "5fc45bebd09b89aa95f9c445",
                "user": "5fc2da3767a1ea31cc0850b3",
                "googleBookId": "f280CwAAQBAJ",
                "title": "Harry Potter: The Complete Collection (1-7)",
                "picture": "http://books.google.com/books/content?id=f280CwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE71acOWBSMUg424KwYb2VMrlM28WJKS6VrJ0zk-IYm6v9Z4ru4lNMY18O200PEiAO77ieOW5jgyLgrQUgpECeXnKD655JK7ROh0UWnz-Vr9yyOO4mSJJrCuPU7tAEgxT00zJEGbz&source=gbs_api",
                "rating": 4.5,
                "description": "All seven eBooks in the multi-award winning, internationally bestselling Harry Potter series, available as one download with stunning cover art by Olly Moss. Enjoy the stories that have captured the imagination of millions worldwide.",
                "condition": "ACCEPTABLE",
                "__v": 0
            },
            "startDate": "2020-11-29T00:00:00.000Z",
            "endDate": "2021-01-29T00:00:00.000Z",
            "transactionDate": "2020-11-29T00:00:00.000Z",
            "status": "DECLINED",
            "__v": 0,
            "createdAt": "2020-12-03T04:08:17.493Z",
            "updatedAt": "2020-12-03T03:51:06.895Z",
        },
        {
            "lenderReview": {
                "rating": 4,
                "_id": "5fc864b1fce6bf0e672cb250",
                "reviewer": "5fc82fd8afbc1294a5503741",
                "reviewee": "5fc2c4cc67a1ea31cc0850af",
                "book": "5fc45bebd09b89aa95f9c445",
                "comments": "He kept my book well",
                "reviewerIsLender": true,
                "createdAt": "2020-12-03T04:08:17.463Z",
                "updatedAt": "2020-12-03T04:08:17.463Z",
                "__v": 0
            },
            "borrowerReview": "5fc860aa00778d0e030fde20",
            "_id": "6",
            "lender": "5fc82fd8afbc1294a5503741",
            "borrower": {
                "rating": 4.25,
                "_id": "5fc2c4cc67a1ea31cc0850af",
                "username": "fad",
                "city": "",
                "state": ""
            },
            "book": {
                "isAvailable": true,
                "author": [
                    "J.K. Rowling"
                ],
                "isActive": true,
                "_id": "5fc45bebd09b89aa95f9c445",
                "user": "5fc2da3767a1ea31cc0850b3",
                "googleBookId": "f280CwAAQBAJ",
                "title": "Harry Potter: The Complete Collection (1-7)",
                "picture": "http://books.google.com/books/content?id=f280CwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE71acOWBSMUg424KwYb2VMrlM28WJKS6VrJ0zk-IYm6v9Z4ru4lNMY18O200PEiAO77ieOW5jgyLgrQUgpECeXnKD655JK7ROh0UWnz-Vr9yyOO4mSJJrCuPU7tAEgxT00zJEGbz&source=gbs_api",
                "rating": 4.5,
                "description": "All seven eBooks in the multi-award winning, internationally bestselling Harry Potter series, available as one download with stunning cover art by Olly Moss. Enjoy the stories that have captured the imagination of millions worldwide.",
                "condition": "ACCEPTABLE",
                "__v": 0
            },
            "startDate": "2020-11-29T00:00:00.000Z",
            "endDate": "2021-01-29T00:00:00.000Z",
            "transactionDate": "2020-11-29T00:00:00.000Z",
            "status": "PENDING",
            "__v": 0,
            "createdAt": "2020-12-03T04:08:17.493Z",
            "updatedAt": "2020-12-03T03:51:06.895Z",
        },
        {
            "lenderReview": {
                "rating": 4,
                "_id": "5fc864b1fce6bf0e672cb250",
                "reviewer": "5fc82fd8afbc1294a5503741",
                "reviewee": "5fc2c4cc67a1ea31cc0850af",
                "book": "5fc45bebd09b89aa95f9c445",
                "comments": "He kept my book well",
                "reviewerIsLender": true,
                "createdAt": "2020-12-03T04:08:17.463Z",
                "updatedAt": "2020-12-03T04:08:17.463Z",
                "__v": 0
            },
            "borrowerReview": "5fc860aa00778d0e030fde20",
            "_id": "7",
            "lender": "5fc82fd8afbc1294a5503741",
            "borrower": {
                "rating": 4.25,
                "_id": "5fc2c4cc67a1ea31cc0850af",
                "username": "fad",
                "city": "",
                "state": ""
            },
            "book": {
                "isAvailable": true,
                "author": [
                    "J.K. Rowling"
                ],
                "isActive": true,
                "_id": "5fc45bebd09b89aa95f9c445",
                "user": "5fc2da3767a1ea31cc0850b3",
                "googleBookId": "f280CwAAQBAJ",
                "title": "Harry Potter: The Complete Collection (1-7)",
                "picture": "http://books.google.com/books/content?id=f280CwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE71acOWBSMUg424KwYb2VMrlM28WJKS6VrJ0zk-IYm6v9Z4ru4lNMY18O200PEiAO77ieOW5jgyLgrQUgpECeXnKD655JK7ROh0UWnz-Vr9yyOO4mSJJrCuPU7tAEgxT00zJEGbz&source=gbs_api",
                "rating": 4.5,
                "description": "All seven eBooks in the multi-award winning, internationally bestselling Harry Potter series, available as one download with stunning cover art by Olly Moss. Enjoy the stories that have captured the imagination of millions worldwide.",
                "condition": "ACCEPTABLE",
                "__v": 0
            },
            "startDate": "2020-11-29T00:00:00.000Z",
            "endDate": "2021-01-29T00:00:00.000Z",
            "transactionDate": "2020-11-29T00:00:00.000Z",
            "status": "APPROVED",
            "__v": 0,
            "createdAt": "2020-12-03T04:08:17.493Z",
            "updatedAt": "2020-12-03T03:51:06.895Z",
        },
        {
            "lenderReview": {
                "rating": 4,
                "_id": "5fc864b1fce6bf0e672cb250",
                "reviewer": "5fc82fd8afbc1294a5503741",
                "reviewee": "5fc2c4cc67a1ea31cc0850af",
                "book": "5fc45bebd09b89aa95f9c445",
                "comments": "He kept my book well",
                "reviewerIsLender": true,
                "createdAt": "2020-12-03T04:08:17.463Z",
                "updatedAt": "2020-12-03T04:08:17.463Z",
                "__v": 0
            },
            "borrowerReview": "5fc860aa00778d0e030fde20",
            "_id": "8",
            "lender": "5fc82fd8afbc1294a5503741",
            "borrower": {
                "rating": 4.25,
                "_id": "5fc2c4cc67a1ea31cc0850af",
                "username": "fad",
                "city": "",
                "state": ""
            },
            "book": {
                "isAvailable": true,
                "author": [
                    "J.K. Rowling"
                ],
                "isActive": true,
                "_id": "5fc45bebd09b89aa95f9c445",
                "user": "5fc2da3767a1ea31cc0850b3",
                "googleBookId": "f280CwAAQBAJ",
                "title": "Harry Potter: The Complete Collection (1-7)",
                "picture": "http://books.google.com/books/content?id=f280CwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE71acOWBSMUg424KwYb2VMrlM28WJKS6VrJ0zk-IYm6v9Z4ru4lNMY18O200PEiAO77ieOW5jgyLgrQUgpECeXnKD655JK7ROh0UWnz-Vr9yyOO4mSJJrCuPU7tAEgxT00zJEGbz&source=gbs_api",
                "rating": 4.5,
                "description": "All seven eBooks in the multi-award winning, internationally bestselling Harry Potter series, available as one download with stunning cover art by Olly Moss. Enjoy the stories that have captured the imagination of millions worldwide.",
                "condition": "ACCEPTABLE",
                "__v": 0
            },
            "startDate": "2020-11-29T00:00:00.000Z",
            "endDate": "2021-01-29T00:00:00.000Z",
            "transactionDate": "2020-11-29T00:00:00.000Z",
            "status": "RETURNED",
            "__v": 0,
            "createdAt": "2020-12-03T04:08:17.493Z",
            "updatedAt": "2020-12-03T03:51:06.895Z",
        }
    ],
    reviewsUserReceived: [
        {
            "rating": 4.5,
            "_id": "5fc860aa00778d0e030fde20",
            "reviewer": {
                "rating": 4.25,
                "_id": "5fc2c4cc67a1ea31cc0850af",
                "username": "fad"
            },
            "reviewee": "5fc82fd8afbc1294a5503741",
            "book": {
                "isAvailable": true,
                "author": [
                    "J.K. Rowling"
                ],
                "isActive": false,
                "_id": "5fc45bebd09b89aa95f9c445",
                "user": "5fc2da3767a1ea31cc0850b3",
                "googleBookId": "f280CwAAQBAJ",
                "title": "Harry Potter: The Complete Collection (1-7)",
                "picture": "http://books.google.com/books/content?id=f280CwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE71acOWBSMUg424KwYb2VMrlM28WJKS6VrJ0zk-IYm6v9Z4ru4lNMY18O200PEiAO77ieOW5jgyLgrQUgpECeXnKD655JK7ROh0UWnz-Vr9yyOO4mSJJrCuPU7tAEgxT00zJEGbz&source=gbs_api",
                "rating": 4.5,
                "description": "All seven eBooks in the multi-award winning, internationally bestselling Harry Potter series, available as one download with stunning cover art by Olly Moss. Enjoy the stories that have captured the imagination of millions worldwide.",
                "condition": "ACCEPTABLE",
                "__v": 0
            },
            "comments": "This book is great",
            "reviewerIsLender": false,
            "createdAt": "2020-12-03T03:51:06.895Z",
            "updatedAt": "2020-12-03T03:51:06.895Z",
            "__v": 0
        },
        {
            "rating": 4.5,
            "_id": "5fc860aa00778d0e030fde20",
            "reviewer": {
                "rating": 4.25,
                "_id": "5fc2c4cc67a1ea31cc0850af",
                "username": "fad"
            },
            "reviewee": "5fc82fd8afbc1294a5503741",
            "book": {
                "isAvailable": true,
                "author": [
                    "J.K. Rowling"
                ],
                "isActive": true,
                "_id": "5fc45bebd09b89aa95f9c445",
                "user": "5fc2da3767a1ea31cc0850b3",
                "googleBookId": "f280CwAAQBAJ",
                "title": "Harry Potter: The Complete Collection (1-7)",
                "picture": "http://books.google.com/books/content?id=f280CwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE71acOWBSMUg424KwYb2VMrlM28WJKS6VrJ0zk-IYm6v9Z4ru4lNMY18O200PEiAO77ieOW5jgyLgrQUgpECeXnKD655JK7ROh0UWnz-Vr9yyOO4mSJJrCuPU7tAEgxT00zJEGbz&source=gbs_api",
                "rating": 4.5,
                "description": "All seven eBooks in the multi-award winning, internationally bestselling Harry Potter series, available as one download with stunning cover art by Olly Moss. Enjoy the stories that have captured the imagination of millions worldwide.",
                "condition": "ACCEPTABLE",
                "__v": 0
            },
            "comments": "This book is great",
            "reviewerIsLender": true,
            "createdAt": "2020-12-03T03:51:06.895Z",
            "updatedAt": "2020-12-03T03:51:06.895Z",
            "__v": 0
        },
    ],
    reviewsUserGave: [
        {
            "rating": 4,
            "_id": "5fc864b1fce6bf0e672cb250",
            "reviewer": "5fc82fd8afbc1294a5503741",
            "reviewee": {
                "rating": 4.25,
                "_id": "5fc2c4cc67a1ea31cc0850af",
                "username": "fad"
            },
            "book": {
                "isAvailable": true,
                "author": [
                    "J.K. Rowling"
                ],
                "isActive": true,
                "_id": "5fc45bebd09b89aa95f9c445",
                "user": "5fc2da3767a1ea31cc0850b3",
                "googleBookId": "f280CwAAQBAJ",
                "title": "Harry Potter: The Complete Collection (1-7)",
                "picture": "http://books.google.com/books/content?id=f280CwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE71acOWBSMUg424KwYb2VMrlM28WJKS6VrJ0zk-IYm6v9Z4ru4lNMY18O200PEiAO77ieOW5jgyLgrQUgpECeXnKD655JK7ROh0UWnz-Vr9yyOO4mSJJrCuPU7tAEgxT00zJEGbz&source=gbs_api",
                "rating": 4.5,
                "description": "All seven eBooks in the multi-award winning, internationally bestselling Harry Potter series, available as one download with stunning cover art by Olly Moss. Enjoy the stories that have captured the imagination of millions worldwide.",
                "condition": "ACCEPTABLE",
                "__v": 0
            },
            "comments": "He kept my book well",
            "reviewerIsLender": true,
            "createdAt": "2020-12-03T04:08:17.463Z",
            "updatedAt": "2020-12-03T04:08:17.463Z",
            "__v": 0
        },

        {
            "rating": 4,
            "_id": "5fc864b1fce6bf0e672cb250",
            "reviewer": "5fc82fd8afbc1294a5503741",
            "reviewee": {
                "rating": 4.25,
                "_id": "5fc2c4cc67a1ea31cc0850af",
                "username": "fad"
            },
            "book": {
                "isAvailable": true,
                "author": [
                    "J.K. Rowling"
                ],
                "isActive": true,
                "_id": "5fc45bebd09b89aa95f9c445",
                "user": "5fc2da3767a1ea31cc0850b3",
                "googleBookId": "f280CwAAQBAJ",
                "title": "Harry Potter: The Complete Collection (1-7)",
                "picture": "http://books.google.com/books/content?id=f280CwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE71acOWBSMUg424KwYb2VMrlM28WJKS6VrJ0zk-IYm6v9Z4ru4lNMY18O200PEiAO77ieOW5jgyLgrQUgpECeXnKD655JK7ROh0UWnz-Vr9yyOO4mSJJrCuPU7tAEgxT00zJEGbz&source=gbs_api",
                "rating": 4.5,
                "description": "All seven eBooks in the multi-award winning, internationally bestselling Harry Potter series, available as one download with stunning cover art by Olly Moss. Enjoy the stories that have captured the imagination of millions worldwide.",
                "condition": "ACCEPTABLE",
                "__v": 0
            },
            "comments": "He kept my book well",
            "reviewerIsLender": false,
            "createdAt": "2020-12-03T04:08:17.463Z",
            "updatedAt": "2020-12-03T04:08:17.463Z",
            "__v": 0
        },
    ],
    UserFollowings:
    [
        {
            "rating": 0,
            "_id": "5fc832970dd35f96292e58ca",
            "username": "b",
            "city": "SF",
            "profilePicture": "url",
            "signature": "hello",
            "state": "CA"
        },
        {
            "rating": 0,
            "_id": "5fc841544eaaaf974ad6284c",
            "username": "c"
        }
    ],
    UserFollowers:
    [
        {
            "rating": 0,
            "_id": "5fc832970dd35f96292e58ca",
            "username": "b",
            "city": "SF",
            "profilePicture": "url",
            "signature": "hello",
            "state": "CA"
        },
        {
            "rating": 0,
            "_id": "5fc841544eaaaf974ad6284c",
            "username": "c"
        }
    ],
    UserReadingList: [
        "ECvxEpH7VZYC",
        "f280CwAAQBAJ",
    ],
    UserReadingListBooks: [
        {
            "isAvailable": true,
            "author": [
                "Margaret Atwood"
            ],
            "isActive": true,
            "_id": "5fc3f66b91b3aa84d9e9f9e7",
            "user": "5fc82fd8afbc1294a5503741",
            "googleBookId": "ECvxEpH7VZYC",
            "title": "The Handmaid's Tale",
            "picture": "http://books.google.com/books/content?id=ECvxEpH7VZYC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE72FajBMJYgCNCTrcL1phfb3TTAS7ZdYkroMZdZH5g9tyP_tBtIzohJOBKnUTv4SL-NEPmQlJEqZp0RUoyaf4LNnoiihNmgnp5klWAO3vnm8UUkrpFP0OiqlyX4GF-XRao_nIi1z&source=gbs_api",
            "rating": 4,
            "description": "<b>An instant classic and eerily prescient cultural phenomenon, from “the patron saint of feminist dystopian fiction” (<i>New York Times</i>). Now an award-winning Hulu series starring Elizabeth Moss.</b>",
            "condition": "LIKE_NEW"
        },
        {
            "isAvailable": true,
            "author": [
                "J.K. Rowling"
            ],
            "isActive": true,
            "_id": "5fc854687c627f07fd275260",
            "user": "5fc82fd8afbc1294a5503741",
            "googleBookId": "f280CwAAQBAJ",
            "title": "Harry Potter: The Complete Collection (1-7)",
            "picture": "http://books.google.com/books/content?id=f280CwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE71acOWBSMUg424KwYb2VMrlM28WJKS6VrJ0zk-IYm6v9Z4ru4lNMY18O200PEiAO77ieOW5jgyLgrQUgpECeXnKD655JK7ROh0UWnz-Vr9yyOO4mSJJrCuPU7tAEgxT00zJEGbz&source=gbs_api",
            "rating": 4.5,
            "description": "All seven eBooks in the multi-award winning, internationally bestselling Harry Potter series, available as one download with stunning cover art by Olly Moss. Enjoy the stories that have captured the imagination of millions worldwide.",
            "condition": "ACCEPTABLE",
        }
    ],
    followingsReadingList: [],
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
        //POSTING
        case DELETE_POSTING:
            return {
                ...state,
                bookPostings: state.bookPostings.map(posting=>posting._id === action.posting._id? action.posting: posting)
            }
        case UPDATE_POSTING:
            return {
                ...state,
                bookPostings: state.bookPostings.map(posting=>posting._id === action.posting._id? action.posting: posting)
            }
        //REVIEW
        case CREATE_REVIEW_AS_LENDER:
            return {
                ...state,
                reviewsUserGave: [
                    ...state.reviewsUserGave,
                    action.review
                ]
            }
        case CREATE_REVIEW_AS_BORROWER:
            return {
                ...state,
                reviewsUserGave: [
                    ...state.reviewsUserGave,
                    action.review
                ]
            }
        case UPDATE_REVIEW:
            return {
                ...state,
                reviewsUserGave: state.reviewsUserGave.map(review=>review._id === action.review._id? action.review: review)
            }
        //TRANSACTION
        case APPROVE_TRANSACTION:
            return {
                ...state,
                UserLendings: state.UserLendings.map(lending=>lending._id === action.transaction._id? action.transaction: lending)
            }
        case DECLINE_TRANSACTION:
            return {
                ...state,
                UserLendings: state.UserLendings.map(lending=>lending._id === action.transaction._id ? action.transaction: lending)
            }
        case DELETE_TRANSACTION:
            return {
                ...state,
                UserBorrowings: state.UserBorrowings.filter(borrowing=>borrowing._id !== action.transaction._id)
            }
        case RETURN_TRANSACTION:
            return {
                ...state,
                UserLendings: state.UserLendings.map(lending=>lending._id === action.transaction._id ? action.transaction: lending),
                UserBorrowings: state.UserBorrowings.map(borrowing=>borrowing._id === action.transaction._id ? action.transaction: borrowing)
            }
        //FOLLOW
        case DELETE_FOLLOW:
            return {
                ...state,
                UserFollowings: state.UserFollowings.filter(follow=>follow._id !== action.fid)
            }
        case CREATE_FOLLOW:
            return {
                ...state,
                UserFollowings: [
                    ...state.UserFollowings,
                    action.following_body
                ]
            }
        // ACCOUNT SETTING
        case UPDATE_USERINFO:
            return {
                ...state,
                user: action.user
            }
        // READING_LIST
        case ADD_TO_READING_LIST:
            return {
                ...state,
                UserReadingList: [
                    ...state.UserReadingList,
                    action.googleBook.googleBookId
                ]
            }
        case GET_FOLLOWINGS_READING_LIST:
            return {
                ...state,
                followingsReadingList: [...action.followingsReadingList]
            }
        case DELETE_FROMREADINGLIST:
            return {
                ...state,
                UserReadingList: state.UserReadingList.filter(id=>id !== action.googleId),
                UserReadingListBooks: state.UserReadingListBooks.filter(book=>book.googleBookId !== action.googleId)
            }
        // LOGOUT
        case LOGOUT:
            return {
                ...state,
                followingsReadingList: []
            };
        default:
            return state
    }
}

export default profileReducer
