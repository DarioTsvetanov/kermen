import { Card, Button } from 'react-bootstrap';

import './FlowerCard.css';

function FlowerCard() {
    return (
        <Card style={{ width: '18rem' }} className="flower-card">
            <Card.Img className="flower-card-image" variant="top" src="https://domigradina.com/images/articles/6472/daliq1.jpg" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}

export default FlowerCard;