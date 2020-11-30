import React from "react";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom";
import classes from "../admin.module.css";

const AdminLandingPageComponent = () =>
    <div>
        <h2>Overview of site activity</h2>
        <br/>
        <CardDeck className={classes.cardDeck}>
            <Card className={classes.card} >
                <Card.Body>
                    <Card.Title>Number of members</Card.Title>

                </Card.Body>
                <Card.Footer style={{ "background": "none", "border-top": "none" }}>
                    <br/>
                    <Link to={`/admin/users`} classname="bottom">208</Link>
                </Card.Footer>
            </Card>
            <Card className={classes.card}>
                <Card.Body>
                    <Card.Title>Pending User Tickets</Card.Title>

                </Card.Body>
                <Card.Footer style={{ "background": "none", "border-top": "none" }}>
                    <br/>
                    <Link to={`/admin/tickets`}>12</Link>
                    </Card.Footer>
            </Card>
            <Card className={classes.card}>
                <Card.Body>
                    <Card.Title>Total book postings</Card.Title>

                </Card.Body>
                <Card.Footer style={{ "background": "none", "border-top": "none" }}>
                    <br/>
                    <span>426</span>
                </Card.Footer>
            </Card>
        </CardDeck>
    </div>

export default AdminLandingPageComponent
