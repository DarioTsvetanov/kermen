import { useState } from 'react';

import validators from '../../utils/validators/validators';

import { Form, Button, Container, Alert } from 'react-bootstrap';
import './Login.css';

function Login() {
    const [errors, setErrors] = useState([]);

    const onLoginFormSubmit = (e) => {
        e.preventDefault();
        
        const email =  e.target.email.value;
        const password =  e.target.password.value;

        if (validators.email(email) !== '') {
            setErrors((oldState) => [...oldState, 'email is invalid']);
        }
        
        if (validators.password(password) !== '') {
            setErrors((oldState) => [...oldState, 'password is invalid']);
        }

        console.log(errors);
    }

    return (
        <Container>
            <Form className="login-form" onSubmit={onLoginFormSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        style={{ height: '55px', fontSize: '20px' }}
                        className="login-form-input"
                        type="text"
                        placeholder="Enter your email address"
                        name="email"
                    />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        style={{ height: '55px', fontSize: '20px' }}
                        className="login-form-input"
                        type="password"
                        placeholder="Enter your password"
                        name="password"
                    />
                </Form.Group>
                {errors.map((x, i) => 
                    <Alert style={{fontSize: '18px'}} key={i} variant="danger">{x}</Alert>)
                }
                <Button
                    variant="primary"
                    type="submit"
                    style={{ fontSize: '20px' }}
                >
                    Login
                </Button>
            </Form>
        </Container>
    );
}

export default Login;