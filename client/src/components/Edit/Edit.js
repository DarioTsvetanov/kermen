import { useState } from 'react';

import validators from '../../utils/validators/validators';
import * as flowerService from '../../services/flowerService';

import './Edit.css';
import { Form, Button, Container, Alert } from 'react-bootstrap';

function Edit() {
    const 

    return (
        <Container>
            <Form className="edit-flower-form" onSubmit={ }>
                <Form.Group>
                    <Form.Label>Name:</Form.Label>
                    <Form.Control
                        onBlur={onFieldValueChangeHandler}
                        type="text"
                        value={ }
                        name="name"
                        id="name"
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
                        onBlur={onFieldValueChangeHandler}
                        type="number"
                        value={ }
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
                        onBlur={onFieldValueChangeHandler}
                        type="text"
                        value={ }
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
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

export default Edit;