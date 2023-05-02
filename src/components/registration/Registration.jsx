import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
        <Form className='w-25 mx-auto border p-3 mt-5 rounded'>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control type="text" name='name' required placeholder="Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" name='email' required placeholder="Enter email" />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formBasicPhoto">
                <Form.Control type="text" name='photoURL' required placeholder="Photo URL" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" name='password' required placeholder="Password" />
            </Form.Group>
            <Button variant="primary w-100" type="submit">Sign Up</Button>
            <p><small>Already have an account? <Link to="/login">Login</Link></small></p>
        </Form>
    );
};

export default Registration;