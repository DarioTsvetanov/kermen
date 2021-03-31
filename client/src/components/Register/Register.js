import './Register.css';
import { Form, Button, Container } from 'react-bootstrap';


function Register() {
    return (
        <Container>
            <Form className="register-form">
                <Form.Group controlId="registerFormBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control style={{height: '55px', fontSize: '20px'}} className="register-form-input" type="email" placeholder="Enter your email address" />
                </Form.Group>

                <Form.Group controlId="registerFormBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control style={{height: '55px', fontSize: '20px'}} className="register-form-input" type="password" placeholder="Enter your password" />
                </Form.Group>
                <Form.Group controlId="registerFormBasicRepeatedPassword">
                    <Form.Label>Repeat Password</Form.Label>
                    <Form.Control style={{height: '55px', fontSize: '20px'}} className="register-form-input" type="password" placeholder="Repeat your password" />
                </Form.Group>
                <Button variant="primary" type="submit" style={{fontSize: '20px'}}>
                    Register
                </Button>
            </Form>
        </Container>
    );
}

export default Register;