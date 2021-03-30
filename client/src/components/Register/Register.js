import { Form, Button, Container } from 'react-bootstrap';

import './Register.css';

function Register() {
    return (
        <Container>
            <Form className="register-form">
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control className="register-form-input" type="email" placeholder="Enter your email address" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control className="register-form-input" type="password" placeholder="Enter your password" />
                </Form.Group>
                <Form.Group controlId="formBasicRepeatedPassword">
                    <Form.Label>Repeat Password</Form.Label>
                    <Form.Control className="register-form-input" type="password" placeholder="Repeat your password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

export default Register;