import React from "react";
import classes from "../../bookDetail/lendingSummary/LendingSummary.module.css";
import {TiHeart} from "react-icons/ti";
import Button from "react-bootstrap/Button";
import {connect} from "react-redux";
import {createReviewAsBorrower, finishTransaction} from "../../../actions/profileActions";
import Rating from "react-rating";
import {AiFillStar, AiOutlineStar} from "react-icons/all";

class EditReview extends React.Component {
    state = {
        newComment: "",
        newRating: 5
    }

    setNewComment = (comment) =>
        this.setState(prevState => (
            {
                ...prevState,
                newComment: comment
            }
        ))

    setNewRating = (rating) =>
        this.setState({newRating: rating})

    render() {
        return (
            <div className={classes.LendingSummary}>
                <div className={classes.heading}>
                    <h1>BayBookClub</h1>
                    <div className={classes.line}>
                        <span className="bg-white p-2"><TiHeart color="red"/></span>
                    </div>
                    <h4>Please review your experience</h4>
                    <div>
                        <textarea className="form-control mb-3"
                                  value={this.state.newComment}
                                  onChange={(event) => this.setNewComment(event.target.value)}/>
                    </div>
                    <div>
                        <label>Please select a rating for this experience</label>
                        <div>
                            <Rating initialRating={this.state.newRating} onChange={rate => this.setNewRating(rate)}
                                    emptySymbol={<AiOutlineStar color="gold" className="mb-1" size="30px"/>}
                                    fullSymbol={<AiFillStar color="gold" className="mb-1" size="30px"/>}/>
                        </div>
                    </div>
                    <div className="mt-3">
                        <button className="btn btn-danger mr-2" onClick={ () => {
                            this.setState({newComment : ""})
                            this.props.cancelReview()
                        }
                        }>Cancel</button>
                        <Button variant="success" className="mr-2" onClick={() => {
                            this.props.createReviewAsBorrower({
                                reviewer: this.props.user._id,
                                reviewee: this.props.borrowingBeingEdited.lender._id,
                                book: this.props.borrowingBeingEdited.book._id,
                                comments: this.state.newComment,
                                rating: this.state.newRating === 0 ? 5 : this.state.newRating
                            }, this.props.borrowingBeingEdited)
                            this.props.finishTransaction({
                                ...this.props.borrowingBeingEdited,
                                status: "RETURNED",
                                borrowerReview: {
                                    reviewer: this.props.user._id,
                                    reviewee: this.props.borrowingBeingEdited.lender._id,
                                    book: this.props.borrowingBeingEdited.book._id,
                                    comments: this.state.newComment,
                                    rating: this.state.newRating === 0 ? 5 : this.state.newRating
                                }
                            })
                            this.setState({newComment : ""})
                            this.props.cancelReview()
                        }}>Submit Review</Button>
                    </div>
                </div>
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({
    user: state.profile.user
})


export default connect(stateToPropertyMapper, {createReviewAsBorrower, finishTransaction})(EditReview)
