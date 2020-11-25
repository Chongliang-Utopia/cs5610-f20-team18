import React from "react";
import Card from 'react-bootstrap/Card'
import CardDeck from "react-bootstrap/CardDeck";
import classes from "../../bookDetail/lenderTable/LenderTable.module.css";
import {Link} from "react-router-dom";
import Rating from "react-rating";
import {AiFillStar, AiOutlineStar} from "react-icons/all";
import {Row, Col, Navbar, Nav, Form, FormControl, Button, Image, Carousel} from 'react-bootstrap'


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
const ProfileLandingPageComponent = ({reviews, userId}) =>
    <div>
        <h2>My activity at a glance</h2>
        <br/>
        <CardDeck>
        <Card style={{ width: '10rem' }} className="center-text" bg={"light"}>
            <Card.Body>
                <Card.Title>Postings</Card.Title>
                <Card.Text>
                    <br/>
                    <Link to={`/users/${userId}/profile/lendings`}>3</Link>
                </Card.Text>
            </Card.Body>
            </Card>
            <Card style={{ width: '10rem' }} className="center-text" bg={"light"}>
                <Card.Body>
                    <Card.Title>Pending borrowing requests</Card.Title>
                    <Card.Text>
                        <Link to={`/users/${userId}/profile/borrowings`}>2</Link>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '10rem' }} className="center-text" bg={"light"}>
                <Card.Body>
                    <Card.Title>Following</Card.Title>
                    <Card.Text>
                        <br/>
                        <Link to={`/users/${userId}/profile/followings`}>250</Link>
                    </Card.Text>
                </Card.Body>
            </Card>
        </CardDeck>
        <br/>
        <CardDeck>
            <Card style={{ width: '10rem' }} className="center-text" bg={"light"}>
                <Card.Body>
                    <Card.Title>Borrowings</Card.Title>
                    <Card.Text>
                        <br/>
                        <Link to={`/users/${userId}/profile/borrowings`}>12</Link>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '10rem' }} className="center-text" bg={"light"}>
                <Card.Body>
                    <Card.Title>Pending Lending requests</Card.Title>
                    <Card.Text>
                        <Link to={`/users/${userId}/profile/lendings`}>6</Link>
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card style={{ width: '10rem' }} className="center-text" bg={"light"}>
                <Card.Body>
                    <Card.Title>Follower</Card.Title>
                    <Card.Text>
                        <br/>
                        <Link to={`/users/${userId}/profile/followings`}>65</Link>
                    </Card.Text>
                </Card.Body>
            </Card>
        </CardDeck>
        <br/>
        <h2>Reviews I have received</h2>
        <br/>
        <div className={classes.LenderTable}>
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>User Name</th>
                    <th>Book Borrowed</th>
                    <th>Rating for me</th>
                    <th>Review</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {   reviews.map(review =>
                    <tr>
                        <td>
                            <Link to={`/users/${review.userName}/profile`} className="mr-1">{review.userName}</Link>
                        </td>
                        <td>
                            {review.bookTitle}
                        </td>
                        <td>
                            <Rating initialRating={review.userRating} readonly
                                    emptySymbol={<AiOutlineStar color="gold" className="mb-1"/>}
                                    fullSymbol={<AiFillStar color="gold" className="mb-1"/>}/>
                        </td>
                        <td>
                            <span>{review.content}</span>
                        </td>
                    </tr>)
                }
                </tbody>
            </table>
        </div>
        <h2>My Wishlist</h2>


            <Carousel indicators={false}>
                {
                    bestsellerBooksLists.map((booksList, booksListIndex) => (
                        <Carousel.Item key={booksListIndex}>
                            <Row>
                                {
                                    booksList.map((book, bookIndex) => (
                                        <Col key={bookIndex}>
                                            <Card border="light" className="rounded-0" style={{width: '10rem'}}>
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

export default ProfileLandingPageComponent
