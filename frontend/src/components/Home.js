import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Home.css'; // You can add custom styling here

const Home = () => {
    return (
        <Container className="text-center my-5">
            <h1 className="display-4">Welcome to the Translation App</h1>
            <p className="lead">
                Easily translate text between multiple languages and keep track of your translation history!
            </p>
            <Row className="mt-4">
                <Col>
                    <Link to="/signup">
                        <Button variant="primary" size="lg" className="mx-2">
                            Sign Up
                        </Button>
                    </Link>
                </Col>
                <Col>
                    <Link to="/translate">
                        <Button variant="success" size="lg" className="mx-2">
                            Start Translating
                        </Button>
                    </Link>
                </Col>
                <Col>
                    <Link to="/history">
                        <Button variant="info" size="lg" className="mx-2">
                            View History
                        </Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;
