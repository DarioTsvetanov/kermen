import { useState, useEffect } from 'react';

import * as flowerService from '../../services/flowerService';

import { Container, Row, Col } from 'react-bootstrap';

import FlowerCard from '../FlowerCard/FlowerCard';

function GuestHomepage() {
    const [flowers, setFlowers] = useState([]);

    useEffect(() => {
        flowerService.getAll()
            .then(x => {
                let result = x.data.reverse();
                setFlowers(result);
            })
    }, [])

    return (
        <Container>
                <Row>
                    <Col>
                        {flowers.map(x => {
                            const shortenDescription = x.description.slice(0, 60);
                            const shortenName = x.name.slice(0, 20);

                            return <FlowerCard
                                id={x._id}
                                key={x._id}
                                name={shortenName}
                                description={shortenDescription}
                                imageURL={x.imageURL}
                            />
                        })}
                    </Col>
                </Row>
            </Container>
    );
}

export default GuestHomepage;