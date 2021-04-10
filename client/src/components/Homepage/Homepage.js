import { useState, useEffect } from 'react';

import * as flowerService from '../../services/flowerService';

import { Container, Row, Col } from 'react-bootstrap';

import FlowerCard from '../FlowerCard/FlowerCard';

function Homepage() {
    const [flowers, setFlowers] = useState([]);

    useEffect(() => {
        let isMounted = true;

        flowerService.getAll()
            .then(x => {
                let result = x.data.reverse();
                if (isMounted) setFlowers(result);
            })

        return () => { isMounted = false }
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

export default Homepage;