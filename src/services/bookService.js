const url = 'https://www.googleapis.com/books/v1/volumes?q=';
const API_URL = 'http://localhost:8080/api/users';

const searchBooks = (keyword) =>
    fetch(url + keyword + "&maxResults=20")
        .then(response => response.json())

const findBookById = (id) =>
    fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
        .then(response => response.json())

export default {searchBooks, findBookById}
