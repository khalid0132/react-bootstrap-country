import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const CountryHistory = () => {
    const {countryName} = useParams(); 
    const [country, setCountry] = useState([])
    // const [region, setRegion] = useState([]);
    useEffect(()=>{
        fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
        .then(res => res.json())
        .then (data => setCountry(data[0]))
    }, [countryName])

    // useEffect(()=>{
    //     fetch(`https://restcountries.eu/rest/v2/region/${region}`)
    // .then(res => res.json())
    // .then (data => setRegion(data))

    // },[])
    

    const {capital, population, flag} = country;
    return (
        <div textAlign="center">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={flag} />
                <Card.Body>
                    <Card.Title>{countryName}</Card.Title>
                    <Card.Text>Capital: {capital} & Population: {population}</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            {/* <h1>Country detail: {countryName}</h1>
            <p>Capital: {capital}</p>
            <p>Population: {population}</p> */}
          
            {/* <div>
                <h1>Area: {region.region}</h1>
            </div> */}


        </div>
    );
};

export default CountryHistory;