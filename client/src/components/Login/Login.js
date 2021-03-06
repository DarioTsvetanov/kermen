import { useState } from 'react';

import validators from '../../utils/validators/validators';
import { auth } from '../../utils/firebase';

import './Login.css';
import { Form, Button, Container, Alert } from 'react-bootstrap';

function Login({
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
        firebase: ''
    });

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const onLoginFormSubmit = (e) => {
        e.preventDefault();

        if (errors.email.message !== '' || errors.email.touched === false ||
            errors.password.message !== '' || errors.password.touched === false) return;

        auth.signInWithEmailAndPassword(formData.email, formData.password)
            .then(() => {
                history.push('/');

                return null;
            })
            .catch(error => {
                switch (error.code) {
                    case 'auth/user-not-found':
                        setErrors(oldState => ({ ...oldState, firebase: 'Account with this email does not exist!' }));
                        break;
                    case 'auth/wrong-password':
                        setErrors(oldState => ({ ...oldState, firebase: 'Wrong password!' }));
                        break;
                    default:
                        console.log(error.message);
                        break;
                }
            });
    }

    const onLoginFormChangeHandler = (e) => {
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

        // TODO: check for existing user
    }

    return (
        <Container>
            <Form className="login-form" onSubmit={onLoginFormSubmit}>
                <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        style={{ height: '55px', fontSize: '20px' }}
                        className="login-form-input"
                        type="text"
                        placeholder="Enter your email address"
                        name="email"
                        id="email"
                        onChange={onLoginFormChangeHandler}
                    />
                    <Alert
                        style={{ fontSize: '18px' }}
                        variant="danger"
                        className={errors.email.message !== '' ? null : 'login-form-alert'}
                    >
                        {errors.email.message}
                    </Alert>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        style={{ height: '55px', fontSize: '20px' }}
                        className="login-form-input"
                        type="password"
                        placeholder="Enter your password"
                        name="password"
                        id="password"
                        onChange={onLoginFormChangeHandler}
                    />
                    <Alert
                        variant="danger"
                        style={{ fontSize: '18px' }}
                        className={errors.password.message !== '' ? null : 'login-form-alert'}
                    >
                        {errors.password.message}
                    </Alert>
                </Form.Group>
                <Button
                    variant="primary"
                    type="submit"
                    style={{ fontSize: '20px' }}
                >
                    Login
                </Button>
                <Alert
                    variant="danger"
                    style={{ fontSize: '18px' }}
                    className={errors.firebase !== '' ? null : 'login-form-alert'}
                >
                    {errors.firebase}
                </Alert>
            </Form>
        </Container>
    );
}

export default Login;