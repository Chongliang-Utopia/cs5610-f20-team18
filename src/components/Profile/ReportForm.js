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
                    <Button variant="danger" className="mr-3"
                            onClick={this.props.closeReport}>Cancel</Button>
                    <Button variant="success" onClick={() =>
                    {
                        this.props.createReport({
                            reporter: this.props.LoggedInUser._id,
                            reason: this.state.reportReason,
                            review: this.props.selectedReview._id
                        })
                        this.props.closeReport()
                    }
                    }>Report</Button>

                </div>
            </div>
        );

    }
}
const stateToPropertyMapper = (state) => ({
    selectedReview: state.profile.selectedReview,
    user: state.profile.user,
    tickets: state.admin.tickets,
    LoggedInUser: state.auth.user
});


export default connect(stateToPropertyMapper, {createReport, closeReport})(ReportForm);
