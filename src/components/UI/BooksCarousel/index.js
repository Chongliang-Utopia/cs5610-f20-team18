import React from "react";
import {Card, Carousel, Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import bestsellerBooksLists from '../../../assets/data/bestsellerBooksLists.json'

const BooksCarousel = ({booksLists = bestsellerBooksLists}) => (
    <Carousel indicators={false} interval={8 * 1000}>
        {
            (booksLists).map((booksList, booksListIndex) => (
                <Carousel.Item key={booksListIndex} className='px-5'>
                    <Row className='mx-5 px-5'>
                        {
                            booksList.map((book, bookIndex) => (
                                <Col key={bookIndex}>
                                    <Link to={`/books/${book.id}`}>
                                        <Card border="light" className="rounded-0 border-0 bg-light h-100">
                                            <Card.Img src={book.thumbnail} className="h-100 p-sm-0 p-md-1 p-lg-2 p-xl-3"/>
                                        </Card>
                                    </Link>
                                </Col>
                            ))
                        }
                    </Row>
                </Carousel.Item>
            ))
        }
    </Carousel>
)

export default BooksCarousel
