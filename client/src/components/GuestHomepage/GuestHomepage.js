import { Container, Row, Col } from 'react-bootstrap';

import FlowerCard from '../FlowerCard/FlowerCard';

import './GuestHomepage.css';

function GuestHomepage() {
    return (
        <Container>
            <Row>
                <Col>
                    <FlowerCard />
                    <FlowerCard />
                    <FlowerCard />
                    <FlowerCard />
                    <FlowerCard />
                    <FlowerCard />
                    <FlowerCard />
                    <FlowerCard />
                    <FlowerCard />
                    <FlowerCard />
                    <FlowerCard />
                    <FlowerCard />
                </Col>
            </Row>
        </Container>
    );
}

export default GuestHomepage;