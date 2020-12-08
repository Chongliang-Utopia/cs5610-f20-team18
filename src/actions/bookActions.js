import {
    CANCEL_BORROWING,
    FIND_BOOK,
    FIND_ALL_BORROWING_OPTIONS,
    START_A_BORROWING_REQUEST,
    POST_A_BOOK,
    SUBMIT_A_BORROWING_REQUEST,
    UPDATE_BOOK
} from "./types/bookTypes";
import BookService from "../services/BookService";


class BookActions {

    findBook = (bookId) => (dispatch) => {
        const url = `https://www.googleapis.com/books/v1/volumes/${bookId}`
        return fetch(url)
            .then(response => response.json())
            .then(googleBook => {
                let book = {}
                if (googleBook && googleBook.volumeInfo) {
                    book = {
                        googleBookId: bookId,
                        title: googleBook.volumeInfo.title,
                        picture: googleBook.volumeInfo.imageLinks ?
                            googleBook.volumeInfo.imageLinks.thumbnail
                            : "https://uh.edu/pharmacy/_images/directory-staff/no-image-available.jpg",
                        author: googleBook.volumeInfo.authors,
                        publishedDate: googleBook.volumeInfo.publishedDate,
                        description: googleBook.volumeInfo.description,
                        rating: googleBook.volumeInfo.averageRating,
                        numberOfReviews: googleBook.volumeInfo.ratingsCount,
                        condition: "LIKE_NEW"
                    }
                }
                dispatch({
                    type: FIND_BOOK,
                    book
                })
            })
    }

    updateBook = (dispatch, book) => {
        dispatch({
            type: UPDATE_BOOK,
            book
        })
    }

    postBook = (dispatch, userId, book) => {
        return BookService.postBook(userId, book)
            .then(status => {
                this.findAllBorrowingOptions(dispatch, book.googleBookId)
                return dispatch({
                    type: POST_A_BOOK,
                    book
                })
            })
    }

    findAllBorrowingOptions = (dispatch, googleId) => {
        return BookService.findAllBorrowingOptions(googleId)
            .then(options => {
                dispatch({
                    type: FIND_ALL_BORROWING_OPTIONS,
                    options,
                })
            })
    }

    startABorrowingRequest = (dispatch, lender) => {
        dispatch({
            type: START_A_BORROWING_REQUEST,
            lender
        })
    }

    cancelBorrowing = (dispatch) => {
        dispatch({
            type: CANCEL_BORROWING
        })
    }

    submitBorrowingRequest = (dispatch, request) => {
        return BookService.submitBorrowingRequest(request)
            .then(status => dispatch({
                type: SUBMIT_A_BORROWING_REQUEST
            }))
    }
}

export default new BookActions();
