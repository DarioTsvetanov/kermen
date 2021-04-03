import { useState } from 'react';

import validators from '../../utils/validators/validators';

import './Register.css';
import { Form, Button, Container, Alert } from 'react-bootstrap';


function Register() {
    const [errors, setErrors] = useState([]);

    const onRegisterFormSubmit = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        const repeatPassword = e.target.repeatPassword.value;

        if (validators.email(email) !== '') {
            setErrors((oldState) => [...oldState, { message: 'email is invalid', key: 1 }]);
        }

        if (validators.password(password) !== '') {
            setErrors((oldState) => [...oldState, { message: 'password is invalid', key: 2 }]);
        }

        if (validators.repeatPassword(repeatPassword, password) !== '') {
            setErrors((oldState) => [...oldState, { message: 'repeatPassword is invalid', key: 3 }]);
        }

        console.log(errors);
    }

    return (
        <Container>
            <Form className="register-form" onSubmit={onRegisterFormSubmit}>
                <Form.Group controlId="registerFormBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        style={{ height: '55px', fontSize: '20px' }}
                        className="register-form-input"
                        type="text"
                        placeholder="Enter your email address"
                        name="email"
                    />
                </Form.Group>
                <Form.Group controlId="registerFormBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        style={{ height: '55px', fontSize: '20px' }}
                        className="register-form-input"
                        type="password"
                        placeholder="Enter your password"
                        name="password"
                    />
                </Form.Group>
                <Form.Group controlId="registerFormBasicRepeatedPassword">
                    <Form.Label>Repeat Password</Form.Label>
                    <Form.Control
                        style={{ height: '55px', fontSize: '20px' }}
                        className="register-form-input"
                        type="password"
                        placeholder="Repeat your password"
                        name="repeatPassword"
                    />
                </Form.Group>
                {errors.map((x) => 
                    <Alert style={{fontSize: '18px'}} key={x.key} variant="danger">{x.message}</Alert>)
                }
                <Button variant="primary" type="submit" style={{ fontSize: '20px' }}>
                    Register
                </Button>
            </Form>
        </Container>
    );
}

export default Register;