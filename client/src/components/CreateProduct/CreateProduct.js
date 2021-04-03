import { useState } from 'react';

import validators from '../../utils/validators/validators';
import * as flowerService from '../../services/flowerService';

import './CreateProduct.css';
import { Form, Button, Container } from 'react-bootstrap';

function CreateProduct({
    history
}) {
    const [errors, setErrors] = useState([]);

    const onCreateProductSubmitHandler = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const price = e.target.price.value;
        const imageURL = e.target.imageURL.value;
        const description = e.target.description.value;

        if (validators.name(name) !== '') setErrors(oldState => [...oldState, validators.name(name)]);

        if (validators.price(price) !== '') setErrors(oldState => [...oldState, validators.price(price)]);

        if (validators.imageURL(imageURL) !== '') setErrors(oldState => [...oldState, validators.imageURL(imageURL)]);

        if (validators.description(description) !== '') setErrors(oldState => [...oldState, validators.description(description)]);

        flowerService.create({name, price, imageURL, description})
            .then(() => history.push('/'))
    }

    return (
        <Container>
            <Form className="create-product-form" onSubmit={onCreateProductSubmitHandler}>
                <Form.Group>
                    <Form.Label>Name:</Form.Label>
                    <Form.Control type="text" placeholder="Enter flower name" name="name" id="name" style={{ height: '55px', fontSize: '20px' }} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Price:</Form.Label>
                    <Form.Control type="number" placeholder="Enter flower price" name="price" id="price" style={{ height: '55px', fontSize: '20px' }} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Image URL:</Form.Label>
                    <Form.Control type="text" placeholder="Enter image URL" name="imageURL" id="imageURL" style={{ height: '55px', fontSize: '20px' }} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Description:</Form.Label>
                    <Form.Control as="textarea" rows={3} name="description" id="description" style={{ fontSize: '20px' }} />
                </Form.Group>
                <Button variant="primary" type="submit" style={{ fontSize: '20px' }}>
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

export default CreateProduct;