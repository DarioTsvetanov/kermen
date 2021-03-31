import './Register.css';
import { Form, Button, Container } from 'react-bootstrap';


function Register() {

    const onRegisterFormSubmit = (e) => {
        e.preventDefault();

        // const { email, password, repeatPassword } = e.target;
    }

    return (
        <Container>
            <Form className="register-form" onSubmit={onRegisterFormSubmit}>
                <Form.Group controlId="registerFormBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control style={{height: '55px', fontSize: '20px'}} className="register-form-input" type="text" placeholder="Enter your email address" name="email" />
                </Form.Group>

                <Form.Group controlId="registerFormBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control style={{height: '55px', fontSize: '20px'}} className="register-form-input" type="password" placeholder="Enter your password" name="password" />
                </Form.Group>
                <Form.Group controlId="registerFormBasicRepeatedPassword">
                    <Form.Label>Repeat Password</Form.Label>
                    <Form.Control style={{height: '55px', fontSize: '20px'}} className="register-form-input" type="password" placeholder="Repeat your password" name="repeatPassword" />
                </Form.Group>
                <Button variant="primary" type="submit" style={{fontSize: '20px'}}>
                    Register
                </Button>
            </Form>
        </Container>
    );
}

export default Register;