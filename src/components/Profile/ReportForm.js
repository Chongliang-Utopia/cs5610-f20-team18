import React from "react";
import classes from "../bookDetail/lendingSummary/LendingSummary.module.css";
import {TiHeart} from "react-icons/ti";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import {connect} from "react-redux";
import {closeReport} from "../../actions/profileActions";
import {createReport} from "../../actions/profileActions";

class ReportForm extends React.Component {

    state = {
        reportReason: "",
    }

    editReportReason = (newReason) =>
        this.setState({
            reportReason: newReason
        })

    render() {
        return (
            <div className={classes.LendingSummary}>
                <div className={classes.heading}>
                    <h1>BayBookClub</h1>
                    <div className={classes.line}>
                        <span className="bg-white p-2"><TiHeart color="red"/></span>
                    </div>
                    <h4>
                        Thank you for your feedback!
                    </h4>
                    <br/>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Please tell us the reason for reporting this review</Form.Label>
                        <Form.Control as="textarea" rows={3}
                                      value={this.state.reportReason}
                                      onChange={(event) => this.editReportReason(event.target.value)}
                        />
                    </Form.Group>
                    <Button variant="success" onClick={() =>
                    {
                        this.props.createReport({
                            reporterId: this.props.user._id,
                            reason: this.state.reportReason,
                            reviewId: this.props.selectedReview._id
                        })
                        this.props.closeReport()
                    }
                    }>Submit</Button>
                    <Button variant="danger" className="add-left-margin"
                            onClick={this.props.closeReport}>Cancel</Button>
                </div>
            </div>
        );

    }
}
const stateToPropertyMapper = (state) => ({
    selectedReview: state.profile.selectedReview,
    user: state.profile.user,
    tickets: state.admin.tickets
});


export default connect(stateToPropertyMapper, {createReport, closeReport})(ReportForm);
