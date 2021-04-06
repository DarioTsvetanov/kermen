import { Link } from 'react-router-dom';

import { Card, Button } from 'react-bootstrap';

import './FlowerCard.css';

function FlowerCard({
    imageURL,
    name,
    description
}) {
    return (
        <Card style={{ width: '18rem', display: 'inline-block' }} className="flower-card">
            <Card.Img style={{ width: '286px', height: '163px' }} className="flower-card-image" variant="top" src={imageURL} />
            <Card.Body>
                <Card.Title className="flower-card-title">{name}</Card.Title>
                <Card.Text className="flower-card-text" >{description}</Card.Text>
                <Button variant="primary">
                    <Link to="" className="flower-card-link">Details</Link>
                </Button>
            </Card.Body>
        </Card>
    );
}

export default FlowerCard;