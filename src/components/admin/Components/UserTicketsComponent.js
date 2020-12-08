import React from "react";
import classes from "../../bookDetail/lenderTable/LenderTable.module.css";
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";
import {Accordion} from "react-bootstrap";
import {Card} from "react-bootstrap";
import {MdExpandMore} from "react-icons/md";
import {connect} from "react-redux";
import {deleteTicket, deleteReview} from "../../../actions/adminActions";

const UserTicketsComponent =
    ({
         tickets=[],
         deleteTicket,
         deleteReview
    }) => {
        return(
        <div>
            <h2>Pending Tickets</h2>
            {
                tickets.length === 0 &&
                <h5>Woohoo! No pending user tickets</h5>
            }
            {
                tickets.length !== 0 && tickets.map((ticket, index) =>
                    ticket.review != null ?
                    <Accordion key={index}>
                        <Card className="mb-3">
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    Reporter: {ticket.reporter.username}<MdExpandMore className="ml-1" size="20px"/>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                     <Card.Body>
                                        <div className={classes.LenderTable}>
                                            <table className="table table-hover">
                                                <thead>
                                                <tr>
                                                    <th>Reviewer</th>
                                                    <th>Reviewee</th>
                                                    <th>Related Book</th>
                                                    <th>Review</th>
                                                    <th>Description</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td>
                                                        <Link to={`/users/${ticket.review.reviewer._id}/profile`}
                                                              className="mr-1">{ticket.review.reviewer.username}</Link>
                                                    </td>
                                                    <td>
                                                        <Link to={`/users/${ticket.review.reviewee._id}/profile`}
                                                              className="mr-1">{ticket.review.reviewee.username}</Link>
                                                    </td>
                                                    <td>
                                                        <Link to={`/book/${ticket.review.book.title}`}>{ticket.review.book.title}</Link>
                                                    </td>
                                                    <td>
                                                        <span>{ticket.review.comments}</span>
                                                    </td>
                                                    <td>
                                                        <span>{ticket.reason}</span>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="float-right mb-3">
                                            <Button variant="danger btn-sm float-right" className="m-2"
                                                    onClick={() => {
                                                        deleteReview(ticket.review._id)
                                                        deleteTicket(ticket._id)
                                                    }}
                                            >
                                                Delete Review
                                            </Button>
                                            <Button variant="success btn-sm float-right" className="m-2"
                                                    onClick={() => deleteTicket(ticket._id)}>Reject Ticket</Button>
                                        </div>
                                    </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion> : <Accordion key={index}>
                            <Card className="mb-3">
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                        Reporter: {ticket.reporter.username}<MdExpandMore className="ml-1" size="20px"/>
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        <span>This review has already been deleted</span>
                                        <Button variant="success btn-sm float-right" className="m-2"
                                                onClick={() => deleteTicket(ticket._id)}>Delete Ticket</Button>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>)
            }
            <br/>
        </div>
        )
}


const stateToPropertyMapper = (state) => ({
    tickets: state.admin.tickets
})

export default connect (stateToPropertyMapper, {deleteTicket, deleteReview})(UserTicketsComponent)
