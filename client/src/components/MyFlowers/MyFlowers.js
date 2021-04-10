import { useState, useEffect, useContext } from 'react';

import AuthContext from '../../contexts/AuthContext';
import * as flowerService from '../../services/flowerService';

import { Container, Row, Col } from 'react-bootstrap';

import FlowerCard from '../FlowerCard/FlowerCard';

function MyFlowers() {
    const [flowers, setFlowers] = useState([]);
    const { username } = useContext(AuthContext);

    useEffect(() => {
        flowerService.getAll(username)
            .then(x => {
                let result = x.data.reverse();
                setFlowers(result);
            })
    }, [username])

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

export default MyFlowers;