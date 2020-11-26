const url = 'https://www.googleapis.com/books/v1/volumes?q=';

const searchBooks = (keyword) =>
    fetch(url + keyword)
        .then(response => response.json())

export default {searchBooks}
