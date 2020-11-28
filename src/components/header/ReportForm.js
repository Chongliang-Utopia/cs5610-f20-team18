import React from "react";
import classes from "../bookDetail/lendingSummary/LendingSummary.module.css";
import {TiHeart} from "react-icons/ti";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {connect} from "react-redux";
import {setReportType} from "../../actions/adminActions";


const ReportForm =
    ({
         type,
         setReportType
        }) =>
    <div className={classes.LendingSummary}>
        <div className={classes.heading}>
            <h1>BayBookClub</h1>
            <div className={classes.line}>
                <span className="bg-white p-2"><TiHeart color="red"/></span>
            </div>
            <h4>
                Please fill out the following details
            </h4>
            <br/>
            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>What kind of user behavior do you want to report</Form.Label>
                <Form.Control as="select">
                    <option onClick={() => setReportType("")}>Select a category</option>
                    <option onClick={() => setReportType("BOOKPOSTING")}>Inappropriate book posting</option>
                    <option onClick={() => setReportType("REVIEW")}>Inappropriate user comment</option>
                    <option onClick={() => setReportType("OTHER")}>Others</option>
                </Form.Control>
            </Form.Group>
            {
                typeof type === "undefined" &&
                    <div></div>
            }
            {
                type === "BOOKPOSTING" &&
                <div>
                <Form.Group controlId="formBasicBookTitle">
                    <Form.Label>Please enter the book title</Form.Label>
                    <Form.Control placeholder="book title" />
                </Form.Group>

                <Form.Group controlId="formBasicBookTitle">
                    <Form.Label>Please enter the owner of the book</Form.Label>
                    <Form.Control placeholder="please enter username" />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Please provide additional information (if any)</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                </div>
            }
            {
                type === "REVIEW" &&
                <div>
                    <Form.Group controlId="formBasicReviewer">
                        <Form.Label>Who made the inappropriate comment?</Form.Label>
                        <Form.Control placeholder="enter username here" />
                    </Form.Group>

                    <Form.Group controlId="formBasicReviewee">
                        <Form.Label>Who was being commented?</Form.Label>
                        <Form.Control placeholder="enter username here" />
                    </Form.Group>

                    <Form.Group controlId="formBasicRelatedBook">
                        <Form.Label>Which book is related to the inappropriate comment?</Form.Label>
                        <Form.Control placeholder="enter book title here" />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Please provide additional information (if any)</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </div>

            }

            {
                type === "OTHER" &&
                <div>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Please description the inappropriate behavior</Form.Label>
                        <Form.Control as="textarea" rows={3}
                                      placeholder="Please provide details such as
                                      username, book title etc. in your description to help
                                      us understand the issue"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.File id="exampleFormControlFile1" label="Upload screenshot (optional)" />
                    </Form.Group>
                </div>

            }

            <Button variant="success">Submit</Button>
            {"  "}
            <Button variant="danger">Cancel</Button>
        </div>
    </div>


const StateToPropertyMapper = (state) => ({
    type: state.admin.type
});


export default connect(StateToPropertyMapper,
    {setReportType})(ReportForm);
