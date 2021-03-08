import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Home.css';
import { Button, Col, Container, Form, FormControl, Nav, Navbar, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    const [countries, setCountries] = useState([])
    useEffect(() =>{
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then (data => setCountries(data))
    }, [])
    return (
        
        <Container>
            <h1>Home is here: {countries.length}</h1>
                        <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
                </Form>
             </Navbar>
            <Row>
                <Col>
            {
                countries.map(country => <Country country = {country}></Country>)
            }
                </Col>
            </Row>
        </Container>
    );
};

export default Home;