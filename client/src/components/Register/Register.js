import { useState } from 'react';

import validators from '../../utils/validators/validators';
import { auth } from '../../utils/firebase';

import './Register.css';
import { Form, Button, Container, Alert } from 'react-bootstrap';

function Register({
    history
}) {
    const [errors, setErrors] = useState({
        email: {
            message: '',
            touched: false
        },
        password: {
            message: '',
            touched: false
        },
        repeatPassword: {
            message: '',
            touched: false
        }
    });

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        repeatPassword: ''
    });

    const onRegisterFormSubmit = (e) => {
        e.preventDefault();

        if (errors.email.message !== '' || errors.email.touched === false ||
            errors.password.message !== '' || errors.password.touched === false ||
            errors.repeatPassword.message !== '' || errors.repeatPassword.touched === false) return;

        auth.createUserWithEmailAndPassword(formData.email, formData.password)
            .then(() => history.push('/'))
            .catch((e) => console.log(e.message))
    }

    const onRegisterFormChangeHandler = (e) => {
        e.preventDefault();

        if (e.target.name === 'email') {
            if (validators.email(e.target.value) !== '') {
                setErrors(oldState => ({ ...oldState, email: { message: 'Please enter a valid email!', touched: true } }));
            }
            else {
                setFormData(oldState => ({ ...oldState, email: e.target.value }));
                setErrors(oldState => ({ ...oldState, email: { touched: true, message: '' } }));
            }
        }
        else if (e.target.name === 'password') {
            if (validators.password(e.target.value) !== '') {
                setErrors(oldState => ({ ...oldState, password: { message: 'The password should be bigger than 8 characters and should include a small letter, a capital letter and a number!', touched: true } }));
            }
            else {
                setFormData(oldState => ({ ...oldState, password: e.target.value }));
                setErrors(oldState => ({ ...oldState, password: { touched: true, message: '' } }));
            }
        }
        else if (e.target.name === 'repeatPassword') {
            if (validators.repeatPassword(e.target.value, formData.password) !== '') {
                setErrors(oldState => ({ ...oldState, repeatPassword: { message: 'Passwords do not match', touched: true } }));
            }
            else {
                setFormData(oldState => ({ ...oldState, repeatPassword: e.target.value }));
                setErrors(oldState => ({ ...oldState, repeatPassword: { touched: true, message: '' } }));
            }
        }
    }

    return (
        <Container>
            <Form className="register-form" onSubmit={onRegisterFormSubmit}>
                <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        style={{ height: '55px', fontSize: '20px' }}
                        className="register-form-input"
                        type="text"
                        placeholder="Enter your email address"
                        name="email"
                        id="email"
                        onChange={onRegisterFormChangeHandler}
                    />
                    <Alert
                        variant="danger"
                        style={{ fontSize: '18px' }}
                        className={errors.email.message !== '' ? null : 'register-form-alert'}
                    >
                        {errors.email.message}
                    </Alert>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        style={{ height: '55px', fontSize: '20px' }}
                        className="register-form-input"
                        type="password"
                        placeholder="Enter your password"
                        name="password"
                        id="password"
                        onChange={onRegisterFormChangeHandler}
                    />
                    <Alert
                        variant="danger"
                        style={{ fontSize: '18px' }}
                        className={errors.password.message !== '' ? null : 'register-form-alert'}
                    >
                        {errors.password.message}
                    </Alert>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Repeat Password</Form.Label>
                    <Form.Control
                        style={{ height: '55px', fontSize: '20px' }}
                        className="register-form-input"
                        type="password"
                        placeholder="Repeat your password"
                        name="repeatPassword"
                        id="repeatPassword"
                        onChange={onRegisterFormChangeHandler}
                    />
                    <Alert
                        variant="danger"
                        style={{ fontSize: '18px' }}
                        className={errors.repeatPassword.message !== '' ? null : 'register-form-alert'}
                    >
                        {errors.repeatPassword.message}
                    </Alert>
                </Form.Group>
                <Button variant="primary" type="submit" style={{ fontSize: '20px' }}>
                    Register
                </Button>
            </Form>
        </Container>
    );
}

export default Register;