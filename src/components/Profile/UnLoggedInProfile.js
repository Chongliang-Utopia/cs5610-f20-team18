import {Link} from "react-router-dom";
import React from "react";
import ImageCard from "../UI/imageCard/ImageCard";
import classes from "../bookDetail/lenderTable/LenderTable.module.css";
import Rating from "react-rating";
import {AiFillStar, AiOutlineStar} from "react-icons/all";
import ProfileHeading from "./profileHeading/ProfileHeading";

class UnloggedInProfile extends React.Component {
    state = {
        follow: true
    }

    changeFollowing = () =>
        this.setState({
            follow: !this.state.follow
        })

    render () {
        return (
            <div className="container add-top-margin">
                <ProfileHeading user={this.props.userId}/>
                <div className="add-15-padding">
                    <h3>
                        {this.props.userId}'s Postings
                    </h3>
                    {
                        this.props.bookPostings.map(book =>
                            <div className="ImageCard">
                                <ImageCard src={book.src}/>
                            </div>
                        )
                    }
                </div>
                <br/>
                <div className="add-15-padding">
                    <h3>
                        What people says about me...
                    </h3>
                    <div className={classes.LenderTable}>
                        <table className="table table-hover">
                            <thead>
                            <tr>
                                <th>User Name</th>
                                <th>Book Borrowed</th>
                                <th>Rating for {this.props.userId}</th>
                                <th>Review</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            {   this.props.reviews.map(review =>
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
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
        )
    }
}


export default UnloggedInProfile
