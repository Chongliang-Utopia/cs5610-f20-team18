import {FIND_BOOK, POST_A_BOOK, UPDATE_BOOK} from "./types/bookTypes";
import bookService from "../services/bookService";


class BookActions {

    findBook = (bookId) => (dispatch) => {
        const url = `https://www.googleapis.com/books/v1/volumes/${bookId}`
        return fetch(url)
            .then(response => response.json())
            .then(googleBook => {
                const book = {
                    googleBookId: bookId,
                    title: googleBook.volumeInfo.title,
                    picture: googleBook.volumeInfo.imageLinks ?
                        googleBook.volumeInfo.imageLinks.thumbnail
                        : "https://uh.edu/pharmacy/_images/directory-staff/no-image-available.jpg",
                    author: googleBook.volumeInfo.authors,
                    description: googleBook.volumeInfo.description,
                    rating: googleBook.volumeInfo.averageRating,
                    numberOfReviews: googleBook.volumeInfo.ratingsCount,
                    condition: "LIKE_NEW"
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
        return bookService.postBook(userId, book)
            .then(status =>
            dispatch({
                type: POST_A_BOOK,
                book
            }))
    }

}

export default new BookActions();