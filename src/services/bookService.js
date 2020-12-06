import axios from "axios";
import authHeader from "./AuthHeader";

const url = 'https://www.googleapis.com/books/v1/volumes?q=';
const API_URL = 'http://localhost:8080/api';

const searchBooks = (keyword) =>
    fetch(url + keyword + "&maxResults=20")
        .then(response => response.json())

const findBookById = (id) =>
    fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
        .then(response => response.json())


const postBook = (userId, book) =>
    axios.post(`${API_URL}/users/${userId}/books`, book, {headers: authHeader()});

const deleteBook = (bookId) => {
    return axios.delete(`${API_URL}/books/${bookId}`, {headers: authHeader()});


const updateBook = (bookId, book) =>
    axios.put(`${API_URL}/books/${bookId}`, book, {headers: authHeader()});

const findAllBorrowingOptions = (googleBookId) =>
    axios.get(`${API_URL}/${googleBookId}/books`).then((response) => (
        response.data ? response.data : []
    ));

const submitBorrowingRequest = (request) =>
    axios.post(`${API_URL}/transactions`, request, {headers: authHeader()})

const getAllBooksForUser = (userId) =>
    axios.get(`${API_URL}/users/${userId}/books`, {headers: authHeader()})
        .then(response=>response.data? response.data: []);


const getAllBookPostings = () =>
    fetch(`${API_URL}/books`, {headers: authHeader()})
        .then(response => response.json())

const getBookByGoogleId = (googleBookId) =>
    axios.get(`${API_URL}/${googleBookId}/books`).then(response=>response.data? response.data: [])

export default {
    searchBooks,
    deleteBook,
    updateBook,
    findBookById,
    postBook,
    getAllBooksForUser,
    findAllBorrowingOptions,
    submitBorrowingRequest,
    getAllBookPostings
    getBookByGoogleId
}

