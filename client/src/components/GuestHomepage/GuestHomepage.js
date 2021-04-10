import { useState, useEffect } from 'react';

import * as flowerService from '../../services/flowerService';

import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './GuestHomepage.css';

import FlowerCard from '../FlowerCard/FlowerCard';

function GuestHomepage() {
    const [flowers, setFlowers] = useState([]);

    useEffect(() => {
        let isMounted = true;

        flowerService.getAll()
            .then(x => {
                let result = x.data.reverse().slice(0, 6);
                if (isMounted) setFlowers(result);
            })

        return () => { isMounted = false }
    }, [])

    return (
        <>
            <div className="guest-page-div" >
                <h1 style={{ textAlign: 'center', paddingTop: '150px' }}>Register or Log In to see our garden full of flowers!</h1>
                <Container style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                    <Button style={{ fontSize: '20px' }}>
                        <Link to="/register" className="text-white">Register</Link>
                    </Button>
                    <Button style={{ fontSize: '20px' }}>
                        <Link to="/login" className="text-white">Login</Link>
                    </Button>
                </Container>
            </div>
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
        </>
    );
}

export default GuestHomepage;