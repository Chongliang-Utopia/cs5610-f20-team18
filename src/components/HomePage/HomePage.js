import React from "react";
import classes from "./HomePage.module.css"
import home from "../../assets/images/home.webp"
import {Container, Row, Col, Button, Carousel, Card} from 'react-bootstrap'
import AboutSection from "../aboutSection/AboutSection";

const bestsellerBooksLists = [
    [
        "/books/book1.webp",
        "/books/book2.webp",
        "/books/book3.webp",
        "/books/book4.webp",
        "/books/book5.webp",
        "/books/book6.webp",
    ],
    [
        "/books/book7.webp",
        "/books/book8.webp",
        "/books/book9.webp",
        "/books/book10.webp",
        "/books/book11.webp",
        "/books/book12.webp",
    ],
]

const HomePage = () => (

    <Container fluid className={'px-5 ' + classes.HomePage}>
        <div className={"mb-5 " + classes.coverContainer}>
            <div className={classes.coverDiv}>
                A SOFA,<br/>A GOOD<br/>BOOK,<br/>AND YOU.
            </div>
        </div>

        <div className="pb-5" style={{background: "linear-gradient(180deg, #ffffff 140px, #0e345a 140px)"}}>
            <h1 className="text-center mb-5" style={{color: "#0e345a"}}>BESTSELLERS</h1>
            <Carousel indicators={false} interval={10000}>
                {
                    bestsellerBooksLists.map((booksList, booksListIndex) => (
                        <Carousel.Item key={booksListIndex} className='px-5'>
                            <Row className='mx-5 px-5'>
                                {
                                    booksList.map((book, bookIndex) => (
                                        <Col key={bookIndex}>
                                            <Card border="light" className="rounded-0">
                                                <Card.Img variant="top" src={book}/>
                                            </Card>
                                        </Col>
                                    ))
                                }
                            </Row>
                        </Carousel.Item>
                    ))
                }
            </Carousel>

            <div className={classes.recommendBook}>
                <hr/>
                <h5>This Month's</h5>
                <h1>RECOMMENDED BOOKS</h1>
                <hr/>
            </div>
            <Carousel indicators={false} interval={10000}>
                {
                    bestsellerBooksLists.map((booksList, booksListIndex) => (
                        <Carousel.Item key={booksListIndex} className='px-5'>
                            <Row className='mx-5 px-5'>
                                {
                                    booksList.map((book, bookIndex) => (
                                        <Col key={bookIndex}>
                                            <Card border="light" className="rounded-0">
                                                <Card.Img variant="top" src={book}/>
                                            </Card>
                                        </Col>
                                    ))
                                }
                            </Row>
                        </Carousel.Item>
                    ))
                }
            </Carousel>
        </div>
        <AboutSection />
    </Container>

)

export default HomePage
