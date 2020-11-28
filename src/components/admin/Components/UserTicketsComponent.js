import React from "react";
import classes from "../../bookDetail/lenderTable/LenderTable.module.css";
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";
import {Accordion} from "react-bootstrap";
import {Card} from "react-bootstrap";

const UserTicketsComponent =
    ({
         tickets=[]
    }) =>
    <div>
        <h2>Pending Tickets</h2>
        {
            tickets.length === 0 &&
            <h5>Woohoo! No pending user tickets</h5>
        }
        {
            tickets.length !== 0 && tickets.map(ticket=>
                <Accordion>
                        {
                            ticket.type === "BOOKPOSTING" &&
                                <Card>
                                    <Card.Header>
                                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                            Inappropriate Book posting
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>
                                            <div className={classes.LenderTable}>
                                                <table className="table table-hover">
                                                    <thead>
                                                    <tr>
                                                        <th>user</th>
                                                        <th>Reported user</th>
                                                        <th>Reported book</th>
                                                        <th>Description</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <Link to={`/users/${ticket.reporterId}/profile`} className="mr-1">{ticket.reporterId}</Link>
                                                            </td>
                                                            <td>
                                                                <Link to={`/users/${ticket.reportedId}/profile`} className="mr-1">{ticket.reportedId}</Link>
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
                                                <Button variant="warning">Send Warning</Button>
                                                <Button variant="light" className="add-15-padding">Deactivate User</Button>
                                                <Button variant="light" className="add-15-padding">Delete Book</Button>
                                                <Button variant="success" className="add-15-padding">Mark As Resolved</Button>
                                            </div>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                        }
                        {
                            ticket.type === "REVIEW" &&
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                        Inappropriate User Review
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        <div className={classes.LenderTable}>
                                            <table className="table table-hover">
                                                <thead>
                                                <tr>
                                                    <th>user</th>
                                                    <th>Reviewer</th>
                                                    <th>Reviewee</th>
                                                    <th>Related Book</th>
                                                    <th>Description</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td>
                                                        <Link to={`/users/${ticket.reporterId}/profile`} className="mr-1">{ticket.reporterId}</Link>
                                                    </td>
                                                    <td>
                                                        <Link to={`/users/${ticket.reviewerId}/profile`} className="mr-1">{ticket.reviewerId}</Link>
                                                    </td>
                                                    <td>
                                                        <Link to={`/users/${ticket.revieweeId}/profile`} className="mr-1">{ticket.revieweeId}</Link>
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
                                            <Button variant="warning">Send Warning</Button>
                                            <Button variant="light" className="add-15-padding">Deactivate User</Button>
                                            <Button variant="light" className="add-15-padding">Delete Review</Button>
                                            <Button variant="success" className="add-15-padding">Mark As Resolved</Button>
                                        </div>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        }
                    {
                        ticket.type === "OTHER" &&
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    Others
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <div className={classes.LenderTable}>
                                        <table className="table table-hover">
                                            <thead>
                                            <tr>
                                                <th>user</th>
                                                <th>Description</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>
                                                    <Link to={`/users/${ticket.reporterId}/profile`} className="mr-1">{ticket.reporterId}</Link>
                                                </td>
                                                <td>
                                                    <span>{ticket.description}</span>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                        <Button variant="warning">Send Warning</Button>
                                        <Button variant="light" className="add-15-padding">Deactivate User</Button>
                                        <Button variant="success" className="add-15-padding">Mark As Resolved</Button>
                                    </div>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    }
                </Accordion>
            )
        }
        <br/>
        <h2>Ticket History</h2>
        <div className={classes.LenderTable}>
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>Type of incident</th>
                    <th>user</th>
                    <th>book owner</th>
                    <th>book title</th>
                    <th>reviewer</th>
                    <th>reviewee</th>
                    <th>Description</th>
                    <th>action</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Book posting</td>
                    <td>
                        <Link to={`/users/april/profile`} className="mr-1">april419</Link>
                    </td>
                    <td>
                        <Link to={`/users/phoebe/profile`}>phoebe23</Link>
                    </td>
                    <td>
                        How to cook meth?
                    </td>
                    <td></td>
                    <td></td>
                    <td>Teach people to make drugs??? not appropriate at all!!</td>
                    <td>deleted book posting and deactivated book owner</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>


export default UserTicketsComponent
