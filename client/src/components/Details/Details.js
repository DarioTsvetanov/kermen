import { useState, useEffect } from 'react';

import * as flowerService from '../../services/flowerService';

import './Details.css';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

function Details({
    match
}) {
    const [flower, setFlower] = useState({});

    useEffect(() => {
        flowerService.getOne(match.params.flowerId)
            .then(res => setFlower(res.data))
    }, [match.params.flowerId])

    return (
        <Container className="flower-details-container">
            <p style={{ textAlign: 'center', marginBottom: '20px', fontSize: '50px' }}>{flower.name}</p>
            <Row>
                <Col style={{ height: '400px', width: '400px' }}>
                    <Image fluid thumbnail src={flower.imageURL} />
                </Col>
                <Col style={{ fontSize: '25px' }}>
                    <h3>Description:</h3>
                    <textarea style={{ height: '150px', width: '500px' }} disabled value={flower.description}></textarea>
                    <h3>Price: {flower.price}.00 lv.</h3>
                    <Button style={{ fontSize: '20px', marginRight: '10px' }}>Edit</Button>
                    <Button style={{ fontSize: '20px', margin: '10px' }}>Delete</Button>
                    <Button style={{ fontSize: '20px', margin: '10px' }}>Buy</Button>
                    <span>People bought: 3</span>
                </Col>
            </Row>

        </Container>
    );
}

export default Details;