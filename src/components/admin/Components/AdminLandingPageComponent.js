import React from "react";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom";
import classes from "../admin.module.css";
import {connect} from "react-redux";

const AdminLandingPageComponent = ({
                                       AllBooks,
                                       users,
                                       tickets
                                   }) => {
    return (
        <div>
            <h2>Overview of site activity</h2>
            <br/>
            <CardDeck className={classes.cardDeck}>
                <Card className={classes.card}>
                    <Link to={`/admin/users`} className="bottom">
                        <Card.Body>
                            <Card.Title>Number of members</Card.Title>

                        </Card.Body>
                        <Card.Footer style={{"background": "none", "borderTop": "none"}}>
                            <br/>
                            {users.length}
                        </Card.Footer>
                    </Link>
                </Card>
                <Card className={classes.card}>
                    <Link to={`/admin/tickets`}>
                        <Card.Body>
                            <Card.Title>Pending User Tickets</Card.Title>

                        </Card.Body>
                        <Card.Footer style={{"background": "none", "borderTop": "none"}}>
                            <br/>
                            {tickets.length}
                        </Card.Footer>
                    </Link>
                </Card>
                <Card className={classes.card}>
                    <Link to={`/admin/postings`}>
                        <Card.Body>
                            <Card.Title>Total book postings</Card.Title>

                        </Card.Body>
                        <Card.Footer style={{"background": "none", "borderTop": "none"}}>
                            <br/>
                            {AllBooks.length}
                        </Card.Footer>
                    </Link>
                </Card>
            </CardDeck>
        </div>
    )
}

const stateToPropertyMapper = (state) => ({
    AllBooks: state.admin.AllBooks,
    users: state.admin.users,
    tickets: state.admin.tickets
})
export default connect(stateToPropertyMapper)(AdminLandingPageComponent)
