import { useState } from 'react';

import validators from '../../utils/validators/validators';
import * as flowerService from '../../services/flowerService';

import './CreateProduct.css';
import { Form, Button, Container, Alert } from 'react-bootstrap';

function CreateProduct({
    history
}) {
    const [errors, setErrors] = useState({
        productName: {
            message: '',
            touched: ''
        },
        price: {
            message: '',
            touched: ''
        },
        imageURL: {
            message: '',
            touched: ''
        },
        description: {
            message: '',
            touched: ''
        },
    });

    const [formData, setFormData] = useState({
        productName: '',
        price: 0,
        imageURL: '',
        description: ''
    });

    const onCreateProductSubmitHandler = (e) => {
        e.preventDefault();

        if (errors.productName.message !== '' || errors.productName.touched === false ||
            errors.price.message !== '' || errors.price.touched === false ||
            errors.imageURL.message !== '' || errors.imageURL.touched === false ||
            errors.description.message !== '' || errors.description.touched === false) return;

        const flowerData = {
            name: formData.productName,
            price: formData.price,
            imageURL: formData.imageURL,
            description: formData.description,
        }

        flowerService.create(flowerData)
            .then(() => history.push('/'))
    }

    const onFieldValueChangeHandler = (e) => {
        e.preventDefault();

        const fieldName = e.target.name;
        const value = e.target.value;

        if (fieldName === 'name') {
            if (validators.productName(value) !== '') {
                setErrors(oldState => ({ ...oldState, productName: { message: validators.productName(value), touched: true } }));
            }
            else {
                setFormData(oldState => ({ ...oldState, productName: value }));
                setErrors(oldState => ({ ...oldState, productName: { touched: true, message: '' } }));
            }
        }
        else if (fieldName === 'price') {
            if (validators.price(value) !== '') {
                setErrors(oldState => ({ ...oldState, price: { message: validators.price(value), touched: true } }));
            }
            else {
                setFormData(oldState => ({ ...oldState, price: value }));
                setErrors(oldState => ({ ...oldState, price: { touched: true, message: '' } }));
            }
        }
        else if (fieldName === 'imageURL') {
            if (validators.imageURL(value) !== '') {
                setErrors(oldState => ({ ...oldState, imageURL: { message: validators.imageURL(value), touched: true } }));
            }
            else {
                setFormData(oldState => ({ ...oldState, imageURL: value }));
                setErrors(oldState => ({ ...oldState, imageURL: { touched: true, message: '' } }));
            }
        }
        else if (fieldName === 'description') {
            if (validators.description(value) !== '') {
                setErrors(oldState => ({ ...oldState, description: { message: validators.description(value), touched: true } }));
            }
            else {
                setFormData(oldState => ({ ...oldState, description: value }));
                setErrors(oldState => ({ ...oldState, description: { touched: true, message: '' } }));
            }
        }
    }

    return (
        <Container>
            <Form className="create-product-form" onSubmit={onCreateProductSubmitHandler}>
                <Form.Group>
                    <Form.Label>Name:</Form.Label>
                    <Form.Control
                        onBlur={onFieldValueChangeHandler}
                        type="text"
                        placeholder="Enter flower name"
                        name="name"
                        id="name"
                        style={{ height: '55px', fontSize: '20px' }}
                    />
                    <Alert
                        variant="danger"
                        style={{ fontSize: '18px' }}
                        className={errors.productName.message !== '' ? null : 'create-product-form-alert'}
                    >
                        {errors.productName.message}
                    </Alert>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Price:</Form.Label>
                    <Form.Control
                        onBlur={onFieldValueChangeHandler}
                        type="number"
                        placeholder="Enter flower price"
                        name="price"
                        id="price"
                        style={{ height: '55px', fontSize: '20px' }}
                    />
                    <Alert
                        variant="danger"
                        style={{ fontSize: '18px' }}
                        className={errors.price.message !== '' ? null : 'create-product-form-alert'}
                    >
                        {errors.price.message}
                    </Alert>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Image URL:</Form.Label>
                    <Form.Control
                        onBlur={onFieldValueChangeHandler}
                        type="text"
                        placeholder="Enter image URL"
                        name="imageURL"
                        id="imageURL"
                        style={{ height: '55px', fontSize: '20px' }}
                    />
                    <Alert
                        variant="danger"
                        style={{ fontSize: '18px' }}
                        className={errors.imageURL.message !== '' ? null : 'create-product-form-alert'}
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
                        style={{ fontSize: '20px' }}
                    />
                    <Alert
                        variant="danger"
                        style={{ fontSize: '18px' }}
                        className={errors.description.message !== '' ? null : 'create-product-form-alert'}
                    >
                        {errors.description.message}
                    </Alert>
                </Form.Group>
                <Button variant="primary" type="submit" style={{ fontSize: '20px' }}>
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

export default CreateProduct;