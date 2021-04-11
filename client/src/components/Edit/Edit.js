import { useState, useEffect } from 'react';

import validators from '../../utils/validators/validators';
import * as flowerService from '../../services/flowerService';

import './Edit.css';
import { Form, Button, Container, Alert } from 'react-bootstrap';

function Edit({
    match,
    history
}) {
    const [errors, setErrors] = useState({
        productName: {
            message: '',
            touched: false
        },
        price: {
            message: '',
            touched: false
        },
        imageURL: {
            message: '',
            touched: false
        },
        description: {
            message: '',
            touched: false
        },
    });

    const [flower, setFlower] = useState({
        name: '',
        price: 0,
        imageURL: '',
        description: ''
    });

    useEffect(() => {
        flowerService.getOne(match.params.flowerId)
            .then(res => {
                const { name, price, imageURL, description } = res.data;
                return setFlower({ name, price, imageURL, description });
            })
    }, [match.params.flowerId])

    const onFieldValueChangeHandler = (e) => {
        e.preventDefault();

        const fieldName = e.target.name;
        const value = e.target.value;

        if (fieldName === 'name') {
            if (validators.productName(value) !== '') {
                setErrors(oldState => ({ ...oldState, productName: { message: validators.productName(value), touched: true } }));
            }
            else {
                setFlower(oldState => ({ ...oldState, name: value }));
                setErrors(oldState => ({ ...oldState, productName: { touched: true, message: '' } }));
            }
        }
        else if (fieldName === 'price') {
            if (validators.price(value) !== '') {
                setErrors(oldState => ({ ...oldState, price: { message: validators.price(value), touched: true } }));
            }
            else {
                setFlower(oldState => ({ ...oldState, price: value }));
                setErrors(oldState => ({ ...oldState, price: { touched: true, message: '' } }));
            }
        }
        else if (fieldName === 'imageURL') {
            if (validators.imageURL(value) !== '') {
                setErrors(oldState => ({ ...oldState, imageURL: { message: validators.imageURL(value), touched: true } }));
            }
            else {

                setFlower(oldState => ({ ...oldState, imageURL: value }));
                setErrors(oldState => ({ ...oldState, imageURL: { touched: true, message: '' } }));
            }
        }
        else if (fieldName === 'description') {
            if (validators.description(value) !== '') {
                setErrors(oldState => ({ ...oldState, description: { message: validators.description(value), touched: true } }));
            }
            else {
                setFlower(oldState => ({ ...oldState, description: value }));
                setErrors(oldState => ({ ...oldState, description: { touched: true, message: '' } }));
            }
        }
    }

    const onEditProductSubmitHandler = (e) => {
        e.preventDefault();
        
        if (errors.productName.message !== '' || errors.price.message !== '' ||
            errors.imageURL.message !== '' || errors.description.message !== '') return;
        
        flowerService.update(match.params.flowerId, flower)
            .then(() => {
                history.push('/');

                return null;
            })
    }

    return (
        <Container>
            <Form className="edit-flower-form" onSubmit={onEditProductSubmitHandler}>
                <Form.Group>
                    <Form.Label>Name:</Form.Label>
                    <Form.Control
                        onChange={onFieldValueChangeHandler}
                        type="text"
                        name="name"
                        id="name"
                        defaultValue={flower.name}
                        style={{ height: '55px', fontSize: '20px' }}
                    />
                    <Alert
                        variant="danger"
                        style={{ fontSize: '18px' }}
                        className={errors.productName.message !== '' ? null : 'edit-flower-form-alert'}
                    >
                        {errors.productName.message}
                    </Alert>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Price:</Form.Label>
                    <Form.Control
                        onChange={onFieldValueChangeHandler}
                        type="number"
                        value={flower.price}
                        name="price"
                        id="price"
                        style={{ height: '55px', fontSize: '20px' }}
                    />
                    <Alert
                        variant="danger"
                        style={{ fontSize: '18px' }}
                        className={errors.price.message !== '' ? null : 'edit-flower-form-alert'}
                    >
                        {errors.price.message}
                    </Alert>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Image URL:</Form.Label>
                    <Form.Control
                        onChange={onFieldValueChangeHandler}
                        type="text"
                        defaultValue={flower.imageURL}
                        name="imageURL"
                        id="imageURL"
                        style={{ height: '55px', fontSize: '20px' }}
                    />
                    <Alert
                        variant="danger"
                        style={{ fontSize: '18px' }}
                        className={errors.imageURL.message !== '' ? null : 'edit-flower-form-alert'}
                    >
                        {errors.imageURL.message}
                    </Alert>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Description:</Form.Label>
                    <Form.Control
                        onChange={onFieldValueChangeHandler}
                        as="textarea"
                        rows={3}
                        name="description"
                        id="description"
                        defaultValue={flower.description}
                        style={{ fontSize: '20px' }}
                    />
                    <Alert
                        variant="danger"
                        style={{ fontSize: '18px' }}
                        className={errors.description.message !== '' ? null : 'edit-flower-form-alert'}
                    >
                        {errors.description.message}
                    </Alert>
                </Form.Group>
                <Button variant="primary" type="submit" style={{ fontSize: '20px' }}>
                    Edit
                </Button>
            </Form>
        </Container>
    );
}

export default Edit;