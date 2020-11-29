import React from "react";
import classes from "../bookDetail/lendingSummary/LendingSummary.module.css";
import {TiHeart} from "react-icons/ti";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";

const ReportForm = () =>
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
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="success">Submit</Button>
            <Button variant="danger" className="add-left-margin">Cancel</Button>
        </div>
    </div>


export default ReportForm;
