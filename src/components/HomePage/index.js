import React from "react"
import {Container, Row, Col, Navbar, Nav, Form, FormControl, Button, Image, Carousel, Card} from 'react-bootstrap'

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
    <>
        <Container fluid className='px-5 py-3'>
            <Navbar className="px-0">
                <Navbar.Brand className="mr-auto">Team 18</Navbar.Brand>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                    <Button variant="outline-primary">Search</Button>
                </Form>
                <Nav>
                    <Nav.Link href="#">Bookstore</Nav.Link>
                    <Nav.Link href="#">About</Nav.Link>
                    <Nav.Link href="#login">Login</Nav.Link>
                </Nav>
            </Navbar>
        </Container>

        <Container fluid className='px-5'>
            <div className="mb-5">
                <Image fluid src='/home.webp' />
            </div>

            <div className="pb-5" style={{background: "linear-gradient(180deg, #ffffff 140px, #0e345a 140px)"}}>
                <h1 className="text-center mb-5" style={{ color: "#0e345a" }}>BESTSELLERS</h1>
                <Carousel indicators={false}>
                    {
                        bestsellerBooksLists.map((booksList, booksListIndex) => (
                            <Carousel.Item key={booksListIndex} className='px-5'>
                                <Row className='mx-5 px-5'>
                                    {
                                        booksList.map((book, bookIndex) => (
                                            <Col key={bookIndex}>
                                                <Card border="light" className="rounded-0">
                                                    <Card.Img variant="top" src={book} />
                                                </Card>
                                            </Col>
                                        ))
                                    }
                                </Row>
                            </Carousel.Item>
                        ))
                    }

                </Carousel>

                <h1 className="text-center my-5 text-white">RECOMMENDED BOOKS</h1>

                <Carousel indicators={false}>
                    {
                        bestsellerBooksLists.map((booksList, booksListIndex) => (
                            <Carousel.Item key={booksListIndex} className='px-5'>
                                <Row className='mx-5 px-5'>
                                    {
                                        booksList.map((book, bookIndex) => (
                                            <Col key={bookIndex}>
                                                <Card border="light" className="rounded-0">
                                                    <Card.Img variant="top" src={book} />
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

            <div className="text-center my-5" style={{ color: "#0e345a" }}>
                <h1>THERE'S NO</h1>
                <h1>SUCH THING AS TOO</h1>
                <h1>MANY BOOKS</h1>
                <Button variant="outline-primary" className="mt-4">Read Our Story</Button>
            </div>
        </Container>

        <footer  style={{ backgroundColor: "#0e345a", color: "#ffffff" }}>
            <Container className="px-5 pt-4 pb-5">
                <Row className="justify-content-md-around pt-5">
                    <Col md={3}>
                        <p><b>Team 18</b></p>
                        <p>500 Terry Francois St.</p>
                        <p>San Francisco, CA 94158</p>
                    </Col>
                    <Col md={3}>
                        <p><b>Shop</b></p>
                        <p>Bookstore</p>
                        <p>Orders</p>
                    </Col>
                    <Col md={3}>
                        <p><b>Socials</b></p>
                        <p>Facebook</p>
                        <p>Twitter</p>
                    </Col>
                    <Col md={3}>
                        <p><b>Be The First To Know</b></p>
                        <Form>
                            <Form.Group>
                                <Form.Control type="text" placeholder="Enter your email here" />
                            </Form.Group>
                            <Button variant="outline-light" className="w-100">Subscribe</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </footer>
    </>
)

export default HomePage
