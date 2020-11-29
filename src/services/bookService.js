const url = 'https://www.googleapis.com/books/v1/volumes?q=';

const searchBooks = (keyword) =>
    fetch(url + keyword + "&maxResults=20")
        .then(response => response.json())

const findBookById = (id) =>
    fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
        .then(response => response.json())

export default {searchBooks, findBookById}
