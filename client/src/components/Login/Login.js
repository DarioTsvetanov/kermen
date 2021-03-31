import { Form, Button, Container } from 'react-bootstrap';

import './Login.css';

function Login() {
    return (
        <Container>
            <Form className="login-form">
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control style={{height: '55px', fontSize: '20px'}} className="login-form-input" type="email" placeholder="Enter your email address" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control style={{height: '55px', fontSize: '20px'}} className="login-form-input" type="password" placeholder="Enter your password" />
                </Form.Group>
                <Button variant="primary" type="submit" style={{fontSize: '20px'}}>
                    Login
                </Button>
            </Form>
        </Container>
    );
}

export default Login;