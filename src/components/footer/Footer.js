import React from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";

const Footer = () =>
    <footer  style={{ backgroundColor: "#0e345a", color: "#ffffff" }}>
        <Container className="px-5 pt-4 pb-5">
            <Row className="justify-content-md-around">
                <Col sm={6} md={4} className="mt-5">
                    <p><b>BayBookClub</b></p>
                    <p>4 N 2nd St.</p>
                    <p>San Jose, CA 95113</p>
                    <p>info@baybookclub.com</p>
                </Col>
                <Col sm={6} md={4} className="mt-5">
                    <p><b>Socials</b></p>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>Instagram</p>
                </Col>
                <Col md={4} className="mt-5">
                    <p><b>Be The First To Know</b></p>
                    <Form>
                        <Form.Group>
                            <Form.Control type="text" placeholder="Enter your email here" />
                        </Form.Group>
                        <Button variant="outline-light" className="w-100">Subscribe</Button>
                    </Form>
                </Col>
            </Row>
            <Row class="mt-5 text-center">
                © {new Date().getFullYear()} BayBookClub
            </Row>
        </Container>
    </footer>

export default Footer;