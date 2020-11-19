import {Link} from "react-router-dom";
import React from "react";
import ImageCard from "../UI/imageCard/ImageCard";
import classes from "../bookDetail/lenderTable/LenderTable.module.css";
import Rating from "react-rating";
import {AiFillStar, AiOutlineStar} from "react-icons/all";

const UnloggedInProfile = ({userId, bookPostings, reviews}) => {
    return (
        <div className="container">
            <div className="add-top-margin add-15-padding font-size-25-italic">
                <span>
                    Welcome! This is {userId}
                </span>
                <span className="add-left-margin">
                    <img className="image" src="https://is2-ssl.mzstatic.com/image/thumb/Podcasts124/v4/54/b0/5d/54b05d73-57bf-6e94-d06f-dfc2ceb4f771/mza_1054230007255374421.jpg/1200x1200bb.jpg"/>
                </span>
            </div>
            <p className="add-15-padding">
                My name is {userId}. I live in Mountain View. I love books very much. If you are a fellow book lover.
                Let's connect!!
            </p>
            <br/>
            <div className="add-15-padding">
                <h3>
                    {userId}'s Postings
                </h3>
                {
                    bookPostings.map(book =>
                        <div className="ImageCard">
                            <ImageCard src={book.src}/>
                        </div>
                    )
                }
            </div>
            <br/>
            <div className="add-15-padding">
                <h3>
                    People who lent from {userId} says.....
                </h3>
                <div className={classes.LenderTable}>
                    <table className="table table-hover">
                        <thead>
                        <tr>
                            <th>User Name</th>
                            <th>Book Borrowed</th>
                            <th>Rating for {userId}</th>
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
            </div>

        </div>
    )
}


export default UnloggedInProfile
