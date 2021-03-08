import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import './Country.css';
import {Card, Button, CardGroup, Container, Row, Col} from 'react-bootstrap';


const Country = (props) => {
    const{name, capital, population, flag} = props.country;
    const history = useHistory();
    const handleClick = (countryName) =>{
        const url = `/country/${countryName}`;
        history.push(url)
    }
    return (
        <Container>

            <Row>
                <Col>
                <Card border="danger" style={{ width: '18rem' }}>
                <Card.Header>Country: {name}</Card.Header>
                <Card.Img variant="top" src={flag} />
                <Card.Body>
                <Card.Title>Capital: {capital}</Card.Title>
                <Card.Text>
                Population: {population}
                </Card.Text>
                </Card.Body>
                <Button onClick={()=>handleClick(name)}>Show More</Button>
                 </Card>
                </Col>
                <Col>
                <Card border="danger" style={{ width: '18rem' }}>
                <Card.Header>Country: {name}</Card.Header>
                <Card.Img variant="top" src={flag} />
                <Card.Body>
                <Card.Title>Capital: {capital}</Card.Title>
                <Card.Text>
                Population: {population}
                </Card.Text>
                </Card.Body>
                <Button onClick={()=>handleClick(name)}>Show More</Button>
                 </Card>
                </Col>
                <Col>
                <Card border="danger" style={{ width: '18rem' }}>
                <Card.Header>Country: {name}</Card.Header>
                <Card.Img variant="top" src={flag} />
                <Card.Body>
                <Card.Title>Capital: {capital}</Card.Title>
                <Card.Text>
                Population: {population}
                </Card.Text>
                </Card.Body>
                <Button onClick={()=>handleClick(name)}>Show More</Button>
                 </Card>
                </Col>
            </Row>

            {/* <h1>Name: {name}</h1>
            <img style={{width: '100px'}} src={flag} alt=""/>
            <h3>Capital: {capital}</h3>
            <h3>Population: {population}</h3>
            <Link to={`/country/${name}`}><button>Show</button></Link>
            <button onClick={()=>handleClick(name)}>Show more</button> */}
            
            
        </Container>
    );
};

export default Country;