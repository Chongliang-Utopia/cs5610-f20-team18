import React from "react";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom";
import classes from "../admin.module.css";
import {connect} from "react-redux";

const AdminLandingPageComponent = ({
    numberOfMembers,
    numberOfPosts,
    numberOfTickets
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
                            <Link to={`/admin/users`} className="bottom">{numberOfMembers}</Link>
                        </Card.Footer>
                    </Card>
                    <Card className={classes.card}>
                        <Card.Body>
                            <Card.Title>Pending User Tickets</Card.Title>

                        </Card.Body>
                        <Card.Footer style={{ "background": "none", "borderTop": "none" }}>
                            <br/>
                            <Link to={`/admin/tickets`}>{numberOfTickets}</Link>
                        </Card.Footer>
                    </Card>
                    <Card className={classes.card}>
                        <Card.Body>
                            <Card.Title>Total book postings</Card.Title>

                        </Card.Body>
                        <Card.Footer style={{ "background": "none", "borderTop": "none" }}>
                            <br/>
                            <span>{numberOfPosts}</span>
                        </Card.Footer>
                    </Card>
                </CardDeck>
            </div>
        )
}

const stateToPropertyMapper = (state) => ({
    numberOfMembers: state.admin.numberOfMembers,
    numberOfPosts: state.admin.numberOfPosts,
    numberOfTickets: state.admin.numberOfTickets,
})
export default connect(stateToPropertyMapper)(AdminLandingPageComponent)
