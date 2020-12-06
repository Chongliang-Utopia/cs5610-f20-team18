import React from "react";
import classes from "../../bookDetail/lendingSummary/LendingSummary.module.css";
import {TiHeart} from "react-icons/ti";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {createReviewAsLender, createReviewAsBorrower, finishTransaction} from "../../../actions/profileActions";
import {connect} from "react-redux";

class ConfirmReturn extends React.Component {
    state = {
        newComment: "",
        newRating: 0
    }

    setNewComment = (comment) =>
        this.setState(prevState=>(
            {
                ...prevState,
                newComment: comment
            }
        ))

    setNewRating = (rating) =>
        this.setState(prevState=>(
            {
                ...prevState,
                newRating: rating
            }
        ))
    render() {
        console.log('execute');
        console.log(this.props.transaction)

        return (
            <div className={classes.LendingSummary}>
                <div className={classes.heading}>
                    <h1>BayBookClub</h1>
                    <div className={classes.line}>
                        <span className="bg-white p-2"><TiHeart color="red"/></span>
                    </div>
                    <h4>Thanks for sharing your book!</h4>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Please review your experience</Form.Label>
                        <Form.Control as="textarea" rows={3}
                                      onChange={(event)=>this.setNewComment(event.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label htmlFor="bookCondition">Please select a rating for this experience</Form.Label>
                        <Form.Control as="select" className="form-control" id="bookCondition" onChange={e => this.setNewRating(e.target.value)}>
                                <option>Please select a rating</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                        </Form.Control>
                    </Form.Group>
                    <Button variant="success" onClick={()=>{
                        // use create review as lender
                        this.props.createReviewAsLender({
                            reviewer: this.props.user._id,
                            reviewee: this.props.transaction.borrower._id,
                            book: this.props.transaction.book._id,
                            comments: this.state.newComment,
                            rating: this.state.newRating === 0? 5: this.state.newRating
                        }, this.props.transaction)
                        this.props.finishTransaction({
                            ...this.props.transaction,
                            status: "RETURNED",
                            lenderReview: {
                                reviewer: this.props.user._id,
                                reviewee: this.props.transaction.borrower._id,
                                book: this.props.transaction.book._id,
                                comments: this.state.newComment,
                                rating: this.state.newRating === 0? 5: this.state.newRating
                            }
                        })
                        this.props.cancelConfirm()
                    }}>Submit</Button>
                </div>
            </div>
        )
    }
}


const stateToPropertyMapper = (state) => ({
    user: state.profile.user
})


export default connect(stateToPropertyMapper, {createReviewAsLender, createReviewAsBorrower, finishTransaction})(ConfirmReturn)
