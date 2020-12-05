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
        return(
            <div>
                <h2>Overview of site activity</h2>
                <br/>
                <CardDeck className={classes.cardDeck}>
                    <Card className={classes.card} >
                        <Card.Body>
                            <Card.Title>Number of members</Card.Title>

                        </Card.Body>
                        <Card.Footer style={{ "background": "none", "borderTop": "none" }}>
                            <br/>
<<<<<<< HEAD
                            <Link to={`/admin/users`} classname="bottom">{users.length}</Link>
=======
                            <Link to={`/admin/users`} className="bottom">{numberOfMembers}</Link>
>>>>>>> master
                        </Card.Footer>
                    </Card>
                    <Card className={classes.card}>
                        <Card.Body>
                            <Card.Title>Pending User Tickets</Card.Title>

                        </Card.Body>
                        <Card.Footer style={{ "background": "none", "borderTop": "none" }}>
                            <br/>
                            <Link to={`/admin/tickets`}>{tickets.length}</Link>
                        </Card.Footer>
                    </Card>
                    <Card className={classes.card}>
                        <Card.Body>
                            <Card.Title>Total book postings</Card.Title>

                        </Card.Body>
                        <Card.Footer style={{ "background": "none", "borderTop": "none" }}>
                            <br/>
                            <Link to={`/admin/postings`}>{AllBooks.length}</Link>
                        </Card.Footer>
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
