import React from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {addSubscription} from "../../actions/adminActions";
import {Alert} from "reactstrap";
import {connect} from "react-redux";

class Footer extends React.Component {

    state = {
        email: "",
        alertVisible: false
    }

    subscribe = (e) => {
        e.preventDefault();
        this.props.dispatch(addSubscription({email: this.state.email})).then(() => {
            this.setState({email: ""})
            this.setState({alertVisible: true}, () => {
                window.setTimeout(() => {
                    this.setState({alertVisible: false})
                }, 2000)
            })
        })
    }

    render() {
        return (
            <footer>
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
                            <p><a href="https://www.facebook.com/">Facebook</a></p>
                            <p><a href="https://twitter.com/">Twitter</a></p>
                            <p><a href="https://www.instagram.com/">Instagram</a></p>
                        </Col>
                        <Col md={4} className="mt-5">
                            <p><b>Be The First To Know</b></p>
                            <Form onSubmit={this.subscribe}>
                                <Form.Group>
                                    <Form.Control type="email" placeholder="Enter your email here"
                                                  onChange={(e) => this.setState({email: e.target.value})}
                                                  value={this.state.email}/>
                                </Form.Group>
                                <Alert className="alert alert-success text-center" role="alert"
                                       isOpen={this.state.alertVisible}>
                                    Thank you for your subscription! Stay tuned!
                                </Alert>
                                <Button variant="outline-light" className="w-100" type="submit">Subscribe</Button>
                            </Form>
                        </Col>
                    </Row>
                    <div className="mt-5 text-muted text-center">
                        © {new Date().getFullYear()} BayBookClub
                    </div>
                </Container>
            </footer>)
    }
}

export default connect()(Footer);