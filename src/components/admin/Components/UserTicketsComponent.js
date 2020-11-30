import React from "react";
import classes from "../../bookDetail/lenderTable/LenderTable.module.css";
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";
import {Accordion} from "react-bootstrap";
import {Card} from "react-bootstrap";
import {MdExpandMore} from "react-icons/md";

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
                                </div>
                                <div className="float-right mb-3">
                                <Button variant="danger btn-sm float-right" className="m-2">Delete Review</Button>
                                <Button variant="success btn-sm float-right" className="m-2">Mark as Resolved</Button>
                                </div>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            )
        }
        <br/>
        {/*<h2>Ticket History</h2>*/}
        {/*<div className={classes.LenderTable}>*/}
        {/*    <table className="table table-hover">*/}
        {/*        <thead>*/}
        {/*        <tr>*/}
        {/*            <th>Type of incident</th>*/}
        {/*            <th>user</th>*/}
        {/*            <th>book owner</th>*/}
        {/*            <th>book title</th>*/}
        {/*            <th>reviewer</th>*/}
        {/*            <th>reviewee</th>*/}
        {/*            <th>Description</th>*/}
        {/*            <th>action</th>*/}
        {/*        </tr>*/}
        {/*        </thead>*/}
        {/*        <tbody>*/}
        {/*        <tr>*/}
        {/*            <td>Book posting</td>*/}
        {/*            <td>*/}
        {/*                <Link to={`/users/april/profile`} className="mr-1">april419</Link>*/}
        {/*            </td>*/}
        {/*            <td>*/}
        {/*                <Link to={`/users/phoebe/profile`}>phoebe23</Link>*/}
        {/*            </td>*/}
        {/*            <td>*/}
        {/*                How to cook meth?*/}
        {/*            </td>*/}
        {/*            <td></td>*/}
        {/*            <td></td>*/}
        {/*            <td>Teach people to make drugs??? not appropriate at all!!</td>*/}
        {/*            <td>deleted book posting and deactivated book owner</td>*/}
        {/*        </tr>*/}
        {/*        </tbody>*/}
        {/*    </table>*/}
        {/*</div>*/}
    </div>


export default UserTicketsComponent
