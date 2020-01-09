import React, { useEffect, useState } from "react";
import axios from "axios";
import PropertyCard from "./PropertyCard";
import { Container, Row } from 'reactstrap';

export default function PropertyInfo(props) {

    const [property, setProperty] = useState([])

    useEffect(() => {
        axios
        .get('')
        .then(res => {
            console.log(res.data.results);
            setProperty(res.data.results);
            console.log(property);
        })
        .catch(error => {
            console.error('Server Error', error);
        })
    }, []);
    return (
        <Container>
            <Row>
                <section className="property-list">
                    
                </section>
            </Row>
        </Container>
    )
}