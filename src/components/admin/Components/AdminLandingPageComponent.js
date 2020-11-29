import React from "react";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom";
import "../admin.css"

const AdminLandingPageComponent = () =>
    <div>
        <h2>Overview of site activity</h2>
        <br/>
        <CardDeck>
            <Card style={{ width: '10rem' }} className="center-text" bg={"light"}>
                <Card.Body>
                    <Card.Title>Number of members</Card.Title>
                    <Card.Text>
                        <br/>
                        <Link to={`/admin/users`} classname="bottom">208</Link>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '10rem' }} className="center-text" bg={"light"}>
                <Card.Body>
                    <Card.Title>Pending User Tickets</Card.Title>
                    <Card.Text>
                        <br/>
                        <Link to={`/admin/tickets`}>12</Link>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '10rem' }} className="center-text" bg={"light"}>
                <Card.Body>
                    <Card.Title>Total book postings</Card.Title>
                    <Card.Text>
                        <br/>
                        <span>426</span>
                    </Card.Text>
                </Card.Body>
            </Card>
        </CardDeck>
    </div>

export default AdminLandingPageComponent
