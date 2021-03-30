import { Container, Row, Col } from 'react-bootstrap';

import FlowerCard from '../FlowerCard/FlowerCard';

import './GuestHomepage.css';

function GuestHomepage() {
    return (
        <>
            <div className="guest-page-div">
                <h1 className="double-border-text"><i>Kermen</i> your favorite flower shop</h1>
            </div>
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
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default GuestHomepage;