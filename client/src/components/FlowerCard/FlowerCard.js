import { Link } from 'react-router-dom';

import { Card, Button } from 'react-bootstrap';

import './FlowerCard.css';

function FlowerCard() {
    return (
        <Card style={{ width: '18rem', display: 'inline-block' }} className="flower-card">
            <Card.Img className="flower-card-image" variant="top" src="https://domigradina.com/images/articles/6472/daliq1.jpg" />
            <Card.Body>
                <Card.Title className="flower-card-title">Card Title</Card.Title>
                <Card.Text className="flower-card-text" >Hello this is my cream chese
                    it is very butiful
                </Card.Text>
                <Button variant="primary">
                    <Link to="" className="flower-card-link">Details</Link>
                </Button>
            </Card.Body>
        </Card>
    );
}

export default FlowerCard;