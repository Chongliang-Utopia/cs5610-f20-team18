import React from "react";
import classes from "../../bookDetail/lenderTable/LenderTable.module.css";
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";
import {Accordion} from "react-bootstrap";
import {Card} from "react-bootstrap";
import {MdExpandMore} from "react-icons/md";
import {connect} from "react-redux";
import {createTicket, deleteTicket} from "../../../actions/adminActions";

const UserTicketsComponent =
    ({
         tickets=[],
         deleteTicket,
         createTicket
    }) => {

        //TODO: is this correct way of doing this??? delete review here?
        const deleteReview = (rid) => {
        //     reviewService.deleteReviewById(rid)
        //         .then(response => response.json())
        }

        return(
        <div>
            <h2>Pending Tickets</h2>
            {
                tickets.length === 0 &&
                <h5>Woohoo! No pending user tickets</h5>
            }
            {
                tickets.length !== 0 && tickets.map(ticket =>
                    <Accordion>
                        <Card className="mb-3">
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    Reporter: {ticket.reporterId}<MdExpandMore className="ml-1" size="20px"/>
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
                                                <th>Description</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>
                                                    <Link to={`/users/${ticket.reviewerId}/profile`}
                                                          className="mr-1">{ticket.reviewerId}</Link>
                                                </td>
                                                <td>
                                                    <Link to={`/users/${ticket.revieweeId}/profile`}
                                                          className="mr-1">{ticket.revieweeId}</Link>
                                                </td>
                                                <td>
                                                    <Link to={`/book/${ticket.bookTitle}`}>{ticket.bookTitle}</Link>
                                                </td>
                                                <td>
                                                    <span>{ticket.description}</span>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="float-right mb-3">
                                        <Button variant="danger btn-sm float-right" className="m-2"
                                                onClick={() => {
                                                    deleteReview(ticket.reviewId)
                                                    deleteTicket(ticket._id)
                                                }}
                                        >
                                            Delete Review
                                        </Button>
                                        <Button variant="success btn-sm float-right" className="m-2"
                                                onClick={() => deleteTicket(ticket._id)}>Reject Ticket</Button>
                                        <Button variant="success btn-sm float-right" className="m-2"
                                                onClick={() => createTicket({_id: "3",
                                                    reviewId: "r3",
                                                    reporterId: "april419",
                                                    reviewerId: "phoebe23",
                                                    revieweeId: "harry67",
                                                    bookTitle: "Python for Dummies",
                                                    description: "phoebe23 said the book owner is an idiot for no reason. Please" +
                                                    " ban phoebe23"})}>
                                            add Ticket
                                        </Button>
                                    </div>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                )
            }
            <br/>
        </div>)
    }


const stateToPropertyMapper = (state) => ({
    tickets: state.admin.tickets
})

export default connect (stateToPropertyMapper, {deleteTicket, createTicket})(UserTicketsComponent)
