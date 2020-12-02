import React from "react";
import classes from "../../bookDetail/lendingSummary/LendingSummary.module.css";
import {TiHeart} from "react-icons/ti";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {createNewReview, updateTransaction} from "../../../actions/profileActions";
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
                        <Form.Label>Please select a rating for this experience</Form.Label>
                        <Form.Control as="select">
                            <option>Please select a rating</option>
                            <option onClick={()=>this.setNewRating(1)}>1</option>
                            <option onClick={()=>this.setNewRating(2)}>2</option>
                            <option onClick={()=>this.setNewRating(3)}>3</option>
                            <option onClick={()=>this.setNewRating(4)}>4</option>
                            <option onClick={()=>this.setNewRating(5)}>5</option>
                        </Form.Control>
                    </Form.Group>
                    <Button variant="success" onClick={()=>{
                        this.props.createNewReview({
                            _id: "newreview111",
                            isLender: true,
                            revieweeId: this.props.transaction.borrowerId,
                            reviewerId: this.props.user._id,
                            transactionId: this.props.transaction._id,
                            comments: this.state.newComment,
                            rating: this.state.newRating
                        })
                        this.props.updateTransaction({
                            ...this.props.transaction,
                            status: "returned"
                        })
                        this.props.cancelConfirm()
                    }}>Submit</Button>
                    {"  "}
                    <Button variant="danger" onClick={()=>this.props.cancelConfirm()}>Cancel</Button>
                </div>
            </div>
        )
    }
}


const stateToPropertyMapper = (state) => ({
    user: state.profile.user
})


export default connect(stateToPropertyMapper, {createNewReview, updateTransaction})(ConfirmReturn)
