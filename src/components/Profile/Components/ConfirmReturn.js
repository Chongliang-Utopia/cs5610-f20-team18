import React from "react";
import classes from "../../bookDetail/lendingSummary/LendingSummary.module.css";
import {TiHeart} from "react-icons/ti";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ConfirmReturn = ({request}) =>
    <div className={classes.LendingSummary}>
        <div className={classes.heading}>
            <h1>BayBookClub</h1>
            <div className={classes.line}>
                <span className="bg-white p-2"><TiHeart color="red"/></span>
            </div>
            <h4>Thanks for sharing your book!</h4>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Please review your experience with {request.userName}</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Please select a rating for this experience</Form.Label>
                <Form.Control as="select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Form.Control>
            </Form.Group>
            <Button variant="success">Submit</Button>
            {"  "}
            <Button variant="danger">Cancel</Button>
        </div>
    </div>

export default ConfirmReturn
