import React from "react";
import {Card, Carousel, Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

const defaultBooksLists = [
    [
        {
            id: "CQYg20lTHtMC",
            thumbnail: "http://books.google.com/books/content?id=CQYg20lTHtMC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE72gIIu_g_G-EcGfDMrrKdy3QyMSwq58eIh3i0bR1Ide-lAY6sliXjnTeMVEF4bhKgiI6apSwU39U0RbiLojbkoSsUgK04XfKigxmwPV-K2j06vgZZsqDhyYwwCyL4iTYaEe0FX-&source=gbs_api"
        },
        {
            id: "ECvxEpH7VZYC",
            thumbnail: "http://books.google.com/books/content?id=ECvxEpH7VZYC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE72I_pJNe52rdp4scaVEJaOwzOcImd_Xa6LWHXHLalu0wHvxjoAjbQuk8bKFxd-goE6r93rk7wZ8zDGXJvw-Cxi-TctEq8bhEovEtWPxO4GqvH5CFZiH0v4OlVZvBFhBho8l3BfG&source=gbs_api"
        },
        {
            id: "93q0DwAAQBAJ",
            thumbnail: "http://books.google.com/books/content?id=93q0DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE725FVQguIZl5qZBzn77RsWvpIL9839QumqsMfM426yO0PYemKPDr3pQ-nRN7N9AFGsD-_1keJsw1I69ZEC4GacS7cZfPOLGP9LPIUGernj7omqfSC4qf80jwAKMDcQN5edR5PUq&source=gbs_api"
        },
        {
            id: "RI1bDwAAQBAJ",
            thumbnail: "http://books.google.com/books/content?id=RI1bDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE71g0ExP_ATJWQXA3Vt5XNzNqSVqqoQL7aukV4CMwX2O5tVtPpIzITcKyLnDO3qb6l24qNJFNXu3YI4x-aU-5y_WhxmFVBx2Bwl3QgMSCAhsTsIZd_8F60f81yqiNJlwk0ExfKvz&source=gbs_api"
        },
        {
            id: "qZjLDwAAQBAJ",
            thumbnail: "http://books.google.com/books/content?id=qZjLDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE70KyA5GXsFcTdjOAfpLuww--QnUcf8lamP7IG_Y7z40vX1EpDhWHHAYVC2eEQSo1uuF6rYWpJqsGRe8YfmbnUKMAxHfdyLy3cH2A62KHi5OBsiWXByIXqM3aXZvY48Gq9PYTRPD&source=gbs_api"
        },
        {
            id: "Id20DwAAQBAJ",
            thumbnail: "http://books.google.com/books/content?id=Id20DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE72IUUQ0-fKVpXBFPjGPhfhpo_pqKepsNRWDSjZTH52gAs-HJp43c1XCd2wsi03eU35t9kQYYRU6Bd4GSbcBYRCwgodOGPb4t0YQwHLPeNRkJmxO40tmGv29nw-cH0ClDwVACUYW&source=gbs_api"
        },
    ],
    [
        {
            id: "Fvv6CwAAQBAJ",
            thumbnail: "http://books.google.com/books/content?id=Fvv6CwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE72vmlIDkBkI1uVW99x7Pt8YXIZMZCZDO1SM3G3ewhmNw0Oy4If7pvW0Gr82-MUJaEqJk_Iht4hw8lFNQO89OdgpQS1vkDKn5Js8wZWEif5LppjeXsD4IFNODPxKXxED3lLBD6xy&source=gbs_api"
        },
        {
            id: "1yLUDwAAQBAJ",
            thumbnail: "http://books.google.com/books/content?id=1yLUDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE72OiZ0NvN5WLkTuWPo4Xxke_v5Fm8m5wA5Mj7R_wBFw6OYW2hBKUzCSA3H5jMQiXeHxN6ep8uAuO204CfvPszSh7gFzif6dlGgOkdgf8T6mvDbAWdEUgD2fhguGSJxAb6kbaZGo&source=gbs_api"
        },
        {
            id: "oLZgDwAAQBAJ",
            thumbnail: "http://books.google.com/books/content?id=oLZgDwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72kCyzEvA0aK6G6nFv6b8Bj8xqzCZXWWcxcUvS8PxGvl4CE-IubkdodfwDPa3MZJJbUFbbCFfvkAy2HeYpXlBm_RXDzmad_VbSx2kdXknqbv9UmlEuzA5FZN6WNUzkyChNDY5gz&source=gbs_api"
        },
        {
            id: "7B85DwAAQBAJ",
            thumbnail: "http://books.google.com/books/content?id=7B85DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE72VgbZCLRV7gpMgb_dKoS5OKSOettjxzO9HX7lvl7ex6JZDD-vSje_kPohSZXUUFMxp6fxedBmAPdu821lZNO_NHSKVTGby1HsBc9rfQIIMsxq1selrsS_fjDTBSw7EFkb9dTHv&source=gbs_api"
        },
        {
            id: "s41bDwAAQBAJ",
            thumbnail: "http://books.google.com/books/content?id=s41bDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE70x7X8eRZRaDfAMJL7tQCsCPrKlZ--C7VWZ3KFwmCz5HKiBMD14M6Wh3BMXv7rJVQ0tta-MlwUFbrb2oL5Lsh68SvQYYkdQ1Sfm34oHUUk67eLX0UhlcWcMOC3k5iXDTiyzPLvh&source=gbs_api"
        },
        {
            id: "8oO6nSoUTlYC",
            thumbnail: "http://books.google.com/books/content?id=8oO6nSoUTlYC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE73EkYqCtaIRi6Xd0ll1WB7MRa0eEFSSwPGFY45pfyUl8kYHxaOSTj7c_VUNWHBqagvBwtHa4qLKkdaeGgwD6npjZjsm0V1DNqOGT7-FDHTmNk-Qy0B7zUSZuTOgGxb8zeKQ2KX0&source=gbs_api"
        },
    ],
]

const BooksCarousel = ({booksLists = defaultBooksLists}) => (
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
