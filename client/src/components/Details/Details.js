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
    const [flower, setFlower] = useState({
        peopleBought: []
    });
    const { username } = useContext(AuthContext)

    useEffect(() => {
        flowerService.getOne(match.params.flowerId)
            .then(res => {
                return setFlower(res.data);
            })

        return () => { setFlower({}) }
    }, [match.params.flowerId, username])

    const deleteFlower = () => {
        flowerService.deleteFlower(match.params.flowerId)
            .then(() => {
                history.push('/');

                return null;
            })
    }

    const buyFlower = () => {
        let buyers = flower.peopleBought.slice();
        buyers.push(username);

        return flowerService.update(match.params.flowerId, { ...flower, peopleBought: buyers })
            .then(() => setFlower({...flower, peopleBought: buyers}))
    }

    return (
        <Container className="flower-details-container">
            <p style={{ textAlign: 'center', marginBottom: '20px', fontSize: '45px' }}>{flower.name}</p>
            <Row>
                <Col style={{ height: '300px', width: '300px' }}>
                    <Image fluid thumbnail src={flower.imageURL} />
                </Col>
                <Col style={{ fontSize: '18px' }}>
                    <h3>Description:</h3>
                    <textarea style={{ height: '120px', width: '400px' }} disabled value={flower.description}></textarea>
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
                            {flower.peopleBought.includes(username) ?
                                <span>Bought times: {flower.peopleBought.length}</span> :
                                <Button style={{ fontSize: '20px', marginRight: '10px' }} onClick={buyFlower}>
                                    Buy
                                </Button>
                            }
                        </>
                    }
                </Col>
            </Row>

        </Container>
    );
}

export default Details;