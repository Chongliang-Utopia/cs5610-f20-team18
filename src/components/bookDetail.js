import React from "react"
import ReactHtmlParser from 'react-html-parser';

class BookDetail extends React.Component {
    state = {
        book: { title: '',
                image: '',
                authors: [],
                description: ''}
    }

    componentDidMount() {
        this.findBook()
    }

    findBook = () => {
        const bookId = this.props.match.params.bookId
        const url = `https://www.googleapis.com/books/v1/volumes/${bookId}`
        fetch(url).then(response => response.json()).then(this.setBook)
    }

    setBook = (book) => {
        // console.log(book.volumeInfo.imageLinks)
        this.setState({book: {
                title: book.volumeInfo.title,
                image: book.volumeInfo.imageLinks.thumbnail,
                authors: book.volumeInfo.authors,
                description: book.volumeInfo.description
            }})
    }

    render() {
        return (
            <div className="container">
                <br/>
                <div className="row">
                    <div className="col-sm-3">
                        <img src={this.state.book.image}/>
                    </div>
                    <div className="col-sm-9">
                        <h2>{this.state.book.title}</h2>
                    </div>
                </div>
                <br/>
                <h4>Authors: </h4>
                {this.state.book.authors.map(author => <p>{author}</p>)}
                <h4>Description: </h4>
                <div> { ReactHtmlParser (this.state.book.description) } </div>
            </div>
        )
    }
}

export default BookDetail
