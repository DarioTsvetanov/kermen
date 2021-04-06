import { useState, useEffect } from 'react';

import * as flowerService from '../../services/flowerService';

import { Container, Row, Col } from 'react-bootstrap';
import './GuestHomepage.css';

import FlowerCard from '../FlowerCard/FlowerCard';

function GuestHomepage() {
    const [flowers, setFlowers] = useState([]);

    useEffect(() => {
        flowerService.getAll()
            .then(result => setFlowers(result.data))
    }, [])

    return (
        <>
            <div className="guest-page-div">
                <h1 className="double-border-text"><i>Kermen</i> your favorite flower shop</h1>
            </div>
            <Container>
                <Row>
                    <Col>
                        {flowers.map(x => <FlowerCard key={x._id} name={x.name} description={x.description} imageURL={x.imageURL} />)}
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default GuestHomepage;