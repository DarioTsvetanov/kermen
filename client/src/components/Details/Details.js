import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import AuthContext from '../../contexts/AuthContext';
import * as flowerService from '../../services/flowerService';

import './Details.css';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

function Details({
    match,
    history
}) {
    const [flower, setFlower] = useState({});
    const { username } = useContext(AuthContext)

    useEffect(() => {
        flowerService.getOne(match.params.flowerId)
            .then(res => {
                console.log(res.data);
                return setFlower(res.data)
            })
    }, [match.params.flowerId])

    const deleteFlower = () => {
        flowerService.deleteFlower(match.params.flowerId)
            .then(() => history.push('/'))
    }

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
                    {username === flower.creator ?
                        <>
                            <Button style={{ fontSize: '20px', marginRight: '10px' }}>
                                <Link style={{ color: 'white' }} to={`/flowers/${flower._id}/edit`}>Edit</Link>
                            </Button>
                            <Button style={{ fontSize: '20px', marginRight: '10px' }} onClick={deleteFlower}>
                                <Link style={{ color: 'white' }} to={`/flowers/${flower._id}/delete`}>Delete</Link>
                            </Button>
                        </> :
                        <>
                            <Button style={{ fontSize: '20px', marginRight: '10px' }}>
                                <Link style={{ color: 'white' }} to="/">Buy</Link>
                            </Button>
                            <span>People bought: 3</span>
                        </>
                    }
                </Col>
            </Row>

        </Container>
    );
}

export default Details;