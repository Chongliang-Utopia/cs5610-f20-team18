import React from "react";
import classes from "../../bookDetail/lendingSummary/LendingSummary.module.css";
import {TiHeart} from "react-icons/ti";
import Button from 'react-bootstrap/Button';
import {createReviewAsLender, createReviewAsBorrower, finishTransaction} from "../../../actions/profileActions";
import {connect} from "react-redux";
import Rating from "react-rating";
import {AiFillStar, AiOutlineStar} from "react-icons/all";


class ConfirmReturn extends React.Component {
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
        this.setState({
            newRating: rating
        })

    render() {
        // console.log('execute');
        // console.log(this.props.transaction)

        return (
            <div className={classes.LendingSummary}>
                <div className={classes.heading}>
                    <h1>BayBookClub</h1>
                    <div className={classes.line}>
                        <span className="bg-white p-2"><TiHeart color="red"/></span>
                    </div>
                    <h4>Thanks for sharing your book!</h4>
                    <div>
                        <label>Please review your experience</label>
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
                        <button className="btn btn-danger mr-3" onClick={() => {
                            this.setState({newComment : ""})
                            this.props.cancelConfirm()
                        }}>Cancel</button>
                        <Button variant="success" onClick={() => {
                            // use create review as lender
                            this.props.createReviewAsLender({
                                reviewer: this.props.user._id,
                                reviewee: this.props.transaction.borrower._id,
                                book: this.props.transaction.book._id,
                                comments: this.state.newComment,
                                rating: this.state.newRating === 0 ? 5 : this.state.newRating
                            }, this.props.transaction)
                            this.props.finishTransaction({
                                ...this.props.transaction,
                                status: "RETURNED",
                                lenderReview: {
                                    reviewer: this.props.user._id,
                                    reviewee: this.props.transaction.borrower._id,
                                    book: this.props.transaction.book._id,
                                    comments: this.state.newComment,
                                    rating: this.state.newRating
                                }
                            })
                            this.setState({newComment : ""})
                            this.props.cancelConfirm()
                        }}>Confirm Book Returned</Button>
                    </div>
                </div>
            </div>
        )
    }
}


const stateToPropertyMapper = (state) => ({
    user: state.profile.user
})


export default connect(stateToPropertyMapper, {
    createReviewAsLender,
    createReviewAsBorrower,
    finishTransaction
})(ConfirmReturn)
